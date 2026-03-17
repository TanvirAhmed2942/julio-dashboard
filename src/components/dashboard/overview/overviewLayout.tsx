"use client";

import SmallPageInfo from "@/components/common/smallPageInfo/smallPageInfo";
import Stats from "../../common/Stats/stats";
import { Users, CircleParking, Euro, BookOpen } from "lucide-react";
import BookingTrendsBarchart, {
  MONTHS,
  type EarningProfitDataPoint,
} from "./BookingTrendsBarchart";
import CustomerMap, { type CustomerMapDataPoint } from "./CustomerMap";
import TrendingItems, { type TrendingItem } from "./TrendingItems";

const EARNING_PROFIT_SAMPLE: EarningProfitDataPoint[] = MONTHS.map(
  (month, i) => ({
    month,
    earning: [4200, 3800, 6200, 5800, 7200, 8900, 9350, 5100, 5400, 8200, 9500, 9800][i],
    profit: [840, 760, 1240, 1160, 1440, 1780, 1870, 1020, 1080, 1640, 1900, 1960][i],
  })
);

const CUSTOMER_MAP_SAMPLE: CustomerMapDataPoint[] = Array.from(
  { length: 31 },
  (_, i) => ({
    day: i + 1,
    value: Math.min(1000, Math.max(0, Math.round(400 + Math.sin((i + 5) / 3) * 300))),
  })
).map((d) => (d.day === 18 ? { ...d, value: d.value } : d));

const TRENDING_ITEMS_SAMPLE: TrendingItem[] = [
  { rank: 1, name: "Burger", price: "$5.6", orderCount: 89, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=112&h=112&fit=crop" },
  { rank: 2, name: "Pizza", price: "$5.6", orderCount: 59, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=112&h=112&fit=crop" },
  { rank: 3, name: "Taco", price: "$5.6", orderCount: 30, imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=112&h=112&fit=crop" },
  { rank: 4, name: "Kebab", price: "$5.6", orderCount: 28, imageUrl: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=112&h=112&fit=crop" },
];

function OverviewLayout() {
  const items = [
    {
      label: "Total Users",
      value: "10,000",
      icon: <Users />,
      iconColor: "text-violet-400",
      iconBgColor: "bg-violet-100",
    },
    {
      label: "Total Parking Spaces",
      value: "500",
      icon: <CircleParking />,
      iconColor: "text-amber-500",
      iconBgColor: "bg-amber-100",
    },
    {
      label: "Total Revenue",
      value: "€5,000",
      icon: <Euro />,
      iconColor: "text-emerald-500",
      iconBgColor: "bg-emerald-100",
    },
    {
      label: "Total Bookings",
      value: "500",
      icon: <BookOpen />,
      iconColor: "text-violet-500",
      iconBgColor: "bg-violet-100",
    },
  ];

  return (
    <div className="space-y-6">
      <SmallPageInfo
        title="Admin Overview Dashboard"
        description="Real-time insights into users, bookings, parking spaces, and revenue performance."
      />
      <Stats items={items} />
      <BookingTrendsBarchart data={EARNING_PROFIT_SAMPLE} />
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-5">
        <div className="flex min-h-0 md:col-span-4">
          <CustomerMap data={CUSTOMER_MAP_SAMPLE} selectedMonth="October" className="h-full w-full" />
        </div>
        <div className="flex min-h-0 md:col-span-1">
          <TrendingItems items={TRENDING_ITEMS_SAMPLE} className="h-full w-full" />
        </div>
      </div>

    </div>
  );
}

export default OverviewLayout;

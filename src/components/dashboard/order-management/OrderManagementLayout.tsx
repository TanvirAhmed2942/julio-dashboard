"use client";

import { useMemo, useState } from "react";
import SmallPageInfo from "@/components/common/smallPageInfo/smallPageInfo";
import OrderHistory, { type OrderHistoryRow } from "./OrderHistory";
import Pagination, { PAGINATION_LIMIT_OPTIONS } from "@/components/common/pagination/Pagination";
import Stats from "@/components/common/Stats/stats";
import { Package, PackageCheck, Clock, XCircle } from "lucide-react";

const DEFAULT_LIMIT = PAGINATION_LIMIT_OPTIONS[0];

const ORDER_HISTORY_DATA: OrderHistoryRow[] = [
    { id: "210987", customerName: "Jane Cooper", items: 2, amount: "$41", date: "22 Oct, 2020", status: "pending" },
    { id: "210986", customerName: "Darrell Steward", items: 4, amount: "$11", date: "1 Feb, 2020", status: "delivered" },
    { id: "210985", customerName: "Ralph Edwards", items: 2, amount: "$28", date: "15 Mar, 2020", status: "canceled" },
    { id: "210984", customerName: "Cameron Williamson", items: 3, amount: "$67", date: "8 Apr, 2020", status: "delivered" },
    { id: "210983", customerName: "Brooklyn Simmons", items: 1, amount: "$19", date: "12 May, 2020", status: "pending" },
    { id: "210982", customerName: "Leslie Alexander", items: 5, amount: "$92", date: "3 Jun, 2020", status: "delivered" },
    { id: "210981", customerName: "Kristin Watson", items: 2, amount: "$34", date: "20 Jul, 2020", status: "canceled" },
    { id: "210980", customerName: "Theresa Webb", items: 4, amount: "$55", date: "14 Aug, 2020", status: "pending" },
    { id: "210979", customerName: "Courtney Henry", items: 1, amount: "$23", date: "9 Sep, 2020", status: "delivered" },
    { id: "210978", customerName: "Jacob Jones", items: 3, amount: "$48", date: "27 Oct, 2020", status: "delivered" },
];

function OrderManagementLayout() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);

    const total = ORDER_HISTORY_DATA.length;
    const totalPage = Math.max(1, Math.ceil(total / limit));
    const paginatedData = useMemo(() => {
        const start = (page - 1) * limit;
        return ORDER_HISTORY_DATA.slice(start, start + limit);
    }, [page, limit]);

    const items = [
        {
            label: "Total Order",
            value: "500",
            icon: <Package />,
            iconColor: "text-amber-500",
            iconBgColor: "bg-amber-100",
        },
        {
            label: "Total Delivered",
            value: "320",
            icon: <PackageCheck />,
            iconColor: "text-emerald-500",
            iconBgColor: "bg-emerald-100",
        },
        {
            label: "Pending Order",
            value: "50",
            icon: <Clock />,
            iconColor: "text-sky-500",
            iconBgColor: "bg-sky-100",
        },
        {
            label: "Cancel Order",
            value: "30",
            icon: <XCircle />,
            iconColor: "text-red-500",
            iconBgColor: "bg-red-100",
        },
    ];

    return (
        <div className="space-y-4">
            <SmallPageInfo
                title="Order Management"
                description="Manage your orders"
            />
            <Stats items={items} />
            <OrderHistory
                data={paginatedData}
                onFilter={() => { }}
                onExport={() => { }}
                onDetails={(row) => console.log("Details", row)}
            />
            <Pagination
                page={page}
                totalPage={totalPage}
                total={total}
                limit={limit}
                onPageChange={setPage}
                onLimitChange={(l) => {
                    setLimit(l);
                    setPage(1);
                }}
                showSummary
            />
        </div>
    );
}

export default OrderManagementLayout;

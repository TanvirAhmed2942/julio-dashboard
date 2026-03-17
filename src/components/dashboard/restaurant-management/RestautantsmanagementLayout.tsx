"use client";

import { useMemo, useState } from 'react'
import SmallPageInfo from '@/components/common/smallPageInfo/smallPageInfo'
import Stats from '@/components/common/Stats/stats'
import Pagination, { PAGINATION_LIMIT_OPTIONS } from '@/components/common/pagination/Pagination'
import { CheckCircle, Clock, Pause, Plus } from 'lucide-react'
import { LuBuilding2 } from 'react-icons/lu'
import RestaurantTable from './RestaurantTable'
import TopFiveRestaurant, { type TopFiveRestaurantRow } from './TopFiveRestaurant'
import TopFiveItems, { type TopFiveItemRow } from './TopFiveItems'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const DEFAULT_LIMIT = PAGINATION_LIMIT_OPTIONS[0]

const RESTAURANT_DATA = [
    { id: "R1001", name: "Pizza Hut", city: "Austria", contact: "01113337774", earning: "€1000", status: "approved" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1002", name: "Burger King", city: "Vienna", contact: "01113337775", earning: "€1200", status: "approved" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1003", name: "Taco Bell", city: "Graz", contact: "01113337776", earning: "€800", status: "pending" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1004", name: "KFC", city: "Linz", contact: "01113337777", earning: "€950", status: "approved" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1005", name: "Subway", city: "Salzburg", contact: "01113337778", earning: "€600", status: "suspended" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1006", name: "McDonald's", city: "Innsbruck", contact: "01113337779", earning: "€1500", status: "approved" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1007", name: "Domino's", city: "Klagenfurt", contact: "01113337780", earning: "€1100", status: "pending" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1008", name: "Starbucks", city: "Villach", contact: "01113337781", earning: "€900", status: "approved" as const, logoUrl: "https://via.placeholder.com/150" },
    { id: "R1009", name: "Dunkin'", city: "Wels", contact: "01113337782", earning: "€750", status: "approved" as const, logoUrl: "https://via.placeholder.com/150" },
]

/** Top 5 by sales/earning for current month (no date selector). */
const TOP_FIVE_CURRENT_MONTH: TopFiveRestaurantRow[] = [
    { name: "Pizza Hut", sales: 100, earning: "€1200" },
    { name: "McDonald's", sales: 95, earning: "€1150" },
    { name: "Starbucks", sales: 88, earning: "€1080" },
    { name: "Burger King", sales: 82, earning: "€990" },
    { name: "KFC", sales: 75, earning: "€920" },
]

/** Top 5 items by quantity/earning for current month (no date selector). */
const TOP_FIVE_ITEMS_CURRENT_MONTH: TopFiveItemRow[] = [
    { name: "Burger", quantity: 1000, earning: "€1200" },
    { name: "Pizza", quantity: 1000, earning: "€1200" },
    { name: "French fry", quantity: 1000, earning: "€1200" },
    { name: "Donuts", quantity: 1000, earning: "€1200" },
    { name: "Taco", quantity: 1000, earning: "€1200" },
]

function RestaurantsManagementLayout() {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState<number>(DEFAULT_LIMIT)
    const items = [
        {
            label: "Total Restaurants",
            value: "10",
            icon: <LuBuilding2 />,
            iconColor: "text-blue-500",
            iconBgColor: "bg-blue-100",
        },
        {
            label: "Active Restaurants",
            value: "10",
            icon: <CheckCircle />,
            iconColor: "text-green-500",
            iconBgColor: "bg-green-100",
        },
        {
            label: "Pending Restaurants",
            value: "10",
            icon: <Clock />,
            iconColor: "text-yellow-500",
            iconBgColor: "bg-yellow-100",
        },
        {
            label: "Suspended Restaurants",
            value: "10",
            icon: <Pause />,
            iconColor: "text-red-500",
            iconBgColor: "bg-red-100",
        },
    ]

    const total = RESTAURANT_DATA.length
    const totalPage = Math.max(1, Math.ceil(total / limit))
    const paginatedData = useMemo(() => {
        const start = (page - 1) * limit
        return RESTAURANT_DATA.slice(start, start + limit)
    }, [page, limit])

    const handlePageChange = (p: number) => setPage(p)
    const handleLimitChange = (l: number) => {
        setLimit(l)
        setPage(1)
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <SmallPageInfo
                    title="Restaurants Management"
                    description="Manage your restaurants"
                />
                <Button variant="outline" asChild>
                    <Link href="/dashboard/restaurant-management/restaurant-add-edit?action=add">
                        <Plus />
                        Add Restaurant
                    </Link>
                </Button>
            </div>
            <Stats items={items} />

            <RestaurantTable data={paginatedData} />


            <Pagination
                page={page}
                totalPage={totalPage}
                total={total}
                limit={limit}
                onPageChange={handlePageChange}
                onLimitChange={handleLimitChange}
                showSummary
            />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <TopFiveRestaurant data={TOP_FIVE_CURRENT_MONTH} />
                <TopFiveItems data={TOP_FIVE_ITEMS_CURRENT_MONTH} />
            </div>
        </div>
    )
}

export default RestaurantsManagementLayout
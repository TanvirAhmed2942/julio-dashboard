"use client";

import SmallPageInfo from "@/components/common/smallPageInfo/smallPageInfo";
import CouponTable, { type CouponTableRow } from "./CouponTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Pagination, { PAGINATION_LIMIT_OPTIONS } from "@/components/common/pagination/Pagination";
import { useState } from "react";

const DEFAULT_LIMIT = PAGINATION_LIMIT_OPTIONS[0];

const COUPON_DATA: CouponTableRow[] = [
    { id: "1", promoCode: "PAYTM20", discount: "20%", startDate: "20 Dec 24", endDate: "31 Dec 24", status: "active", restaurant: "Pizza Hut" },
    { id: "2", promoCode: "FLAT50", discount: "50%", startDate: "1 Dec 24", endDate: "15 Dec 24", status: "inactive", restaurant: "McDonald's" },
    { id: "3", promoCode: "SWIGGY10", discount: "10%", startDate: "5 Dec 24", endDate: "20 Dec 24", status: "active", restaurant: "Burger King" },
    { id: "4", promoCode: "ZOMATO25", discount: "25%", startDate: "10 Dec 24", endDate: "25 Dec 24", status: "active", restaurant: "KFC" },
    { id: "5", promoCode: "NEWUSER15", discount: "15%", startDate: "15 Dec 24", endDate: "31 Dec 24", status: "inactive", restaurant: "Subway" },
    { id: "6", promoCode: "WEEKEND30", discount: "30%", startDate: "18 Dec 24", endDate: "22 Dec 24", status: "active", restaurant: "Domino's" },
    { id: "7", promoCode: "FIRST100", discount: "100 off", startDate: "1 Dec 24", endDate: "10 Dec 24", status: "inactive", restaurant: "Starbucks" },
    { id: "8", promoCode: "HOLIDAY40", discount: "40%", startDate: "24 Dec 24", endDate: "26 Dec 24", status: "active", restaurant: "Pizza Hut" },
    { id: "9", promoCode: "CASHBACK5", discount: "5%", startDate: "1 Dec 24", endDate: "31 Dec 24", status: "active", restaurant: "Dunkin'" },
    { id: "10", promoCode: "FREEDEL", discount: "Free delivery", startDate: "12 Dec 24", endDate: "18 Dec 24", status: "inactive", restaurant: "Taco Bell" },
];

function CouponManagementLayout() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);

    const total = COUPON_DATA.length;
    const totalPage = Math.max(1, Math.ceil(total / limit));

    const handleLimitChange = (newLimit: number) => {
        setLimit(newLimit);
        setPage(1);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <SmallPageInfo
                    title="Coupons Management"
                    description="Manage your coupons"
                />
                <Button variant="outline">
                    <Plus />
                    Add Coupon
                </Button>
            </div>
            <CouponTable
                data={COUPON_DATA}
                onEdit={() => { }}
                onView={() => { }}
                onDelete={() => { }}
            />
            <Pagination
                page={page}
                totalPage={totalPage}
                total={total}
                limit={limit}
                onPageChange={setPage}
                onLimitChange={handleLimitChange}
                showSummary
            />
        </div>
    );
}

export default CouponManagementLayout;

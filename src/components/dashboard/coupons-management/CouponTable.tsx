"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Eye, Trash2, Search, Filter } from "lucide-react";

export type CouponTableRow = {
    id: string;
    promoCode: string;
    discount: string;
    startDate: string;
    endDate: string;
    status: "active" | "inactive" | string;
    restaurant: string;
};

type CouponTableProps = {
    data: CouponTableRow[];
    onEdit?: (row: CouponTableRow) => void;
    onView?: (row: CouponTableRow) => void;
    onDelete?: (row: CouponTableRow) => void;
    className?: string;
};

const statusStyles: Record<string, string> = {
    active: "bg-emerald-500 text-white dark:bg-emerald-600",
    inactive: "bg-red-500 text-white dark:bg-red-600",
};

function getStatusClass(status: string) {
    return statusStyles[status.toLowerCase()] ?? "bg-muted text-muted-foreground";
}

export default function CouponTable({
    data,
    onEdit,
    onView,
    onDelete,
    className,
}: CouponTableProps) {
    const [search, setSearch] = useState("");

    const filteredData = search.trim()
        ? data.filter(
            (row) =>
                row.promoCode.toLowerCase().includes(search.toLowerCase()) ||
                row.restaurant.toLowerCase().includes(search.toLowerCase())
        )
        : data;

    return (
        <div
            className={cn(
                "rounded-xl border border-border bg-card shadow-sm overflow-hidden",
                className
            )}
        >
            <div className="flex flex-col gap-4 border-b border-border bg-card px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-foreground">Coupon List</h3>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-9 w-full min-w-[180px] rounded-lg border bg-background pl-9 pr-3"
                        />
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 rounded-lg">
                        <Filter className="size-4" />
                        Filter
                    </Button>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow className="border-b border-border bg-muted/50 hover:bg-muted/50">
                        <TableHead className="font-semibold text-foreground">SI</TableHead>
                        <TableHead className="font-semibold text-foreground">Promo Code</TableHead>
                        <TableHead className="font-semibold text-foreground">Discount</TableHead>
                        <TableHead className="font-semibold text-foreground">Start Date</TableHead>
                        <TableHead className="font-semibold text-foreground">End Date</TableHead>
                        <TableHead className="font-semibold text-foreground">Status</TableHead>
                        <TableHead className="font-semibold text-foreground">Restaurant</TableHead>
                        <TableHead className="font-semibold text-foreground text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((row, index) => (
                        <TableRow
                            key={row.id}
                            className="border-b border-border bg-card hover:bg-muted/30 transition-colors"
                        >

                            <TableCell className="font-medium text-foreground w-12">
                                {String(index + 1).padStart(2, "0")}
                            </TableCell>
                            <TableCell className="font-medium text-foreground">{row.promoCode}</TableCell>
                            <TableCell className="text-foreground">{row.discount}</TableCell>
                            <TableCell className="text-muted-foreground">{row.startDate}</TableCell>
                            <TableCell className="text-muted-foreground">{row.endDate}</TableCell>
                            <TableCell>
                                <span
                                    className={cn(
                                        "inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                                        getStatusClass(row.status)
                                    )}
                                >
                                    {row.status}
                                </span>
                            </TableCell>
                            <TableCell className="text-foreground">{row.restaurant}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        className="text-muted-foreground hover:text-foreground"
                                        onClick={() => onEdit?.(row)}
                                        aria-label="Edit"
                                    >
                                        <Pencil className="size-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        className="text-muted-foreground hover:text-foreground"
                                        onClick={() => onView?.(row)}
                                        aria-label="View"
                                    >
                                        <Eye className="size-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        className="text-muted-foreground hover:text-destructive"
                                        onClick={() => onDelete?.(row)}
                                        aria-label="Delete"
                                    >
                                        <Trash2 className="size-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

"use client";

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
import { Pencil, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useImageUrl } from "@/hooks/useImageUrl";

export type RestaurantRow = {
    id: string;
    name: string;
    logoUrl?: string;
    city: string;
    contact: string;
    earning: string;
    status: "approved" | "pending" | "suspended" | string;
};

type RestaurantTableProps = {
    data: RestaurantRow[];
    onEdit?: (row: RestaurantRow) => void;
    onView?: (row: RestaurantRow) => void;
    onDelete?: (row: RestaurantRow) => void;
    className?: string;
};

const statusStyles: Record<string, string> = {
    approved: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    pending: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    suspended: "bg-muted text-muted-foreground",
};

function getStatusClass(status: string) {
    return statusStyles[status.toLowerCase()] ?? "bg-muted text-muted-foreground";
}

export default function RestaurantTable({
    data,
    onView,
    onDelete,
    className,
}: RestaurantTableProps) {
    const imageUrl = useImageUrl(data[0].logoUrl ?? "");
    if (!imageUrl) return null;
    return (
        <div
            className={cn(
                "rounded-xl border border-border bg-card shadow-sm overflow-hidden",
                className
            )}
        >
            <Table>
                <TableHeader>
                    <TableRow className="border-b border-border bg-muted/50 hover:bg-muted/50">
                        <TableHead className="h-11 font-semibold text-foreground">Id</TableHead>
                        <TableHead className="font-semibold text-foreground">
                            Restaurant Name
                        </TableHead>
                        <TableHead className="font-semibold text-foreground">City</TableHead>
                        <TableHead className="font-semibold text-foreground">Contact</TableHead>
                        <TableHead className="font-semibold text-foreground">Earning</TableHead>
                        <TableHead className="font-semibold text-foreground">Status</TableHead>
                        <TableHead className="font-semibold text-foreground text-right">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            className="border-b border-border bg-card hover:bg-muted/30"
                        >
                            <TableCell className="font-medium text-foreground">
                                {row.id}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-muted">
                                        {row.logoUrl ? (
                                            <Image
                                                src={imageUrl}
                                                alt={row.name ?? ""}
                                                className="h-full w-full object-cover"
                                                width={36}
                                                height={36}
                                                unoptimized
                                            />
                                        ) : (
                                            <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted-foreground">
                                                {row.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <span className="font-medium text-foreground">{row.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{row.city}</TableCell>
                            <TableCell className="text-muted-foreground">
                                {row.contact}
                            </TableCell>
                            <TableCell className="font-medium text-foreground">
                                {row.earning}
                            </TableCell>
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
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <Link href={`/dashboard/restaurant-management/restaurant-add-edit?action=edit&id=${row.id}`}>
                                        <Button
                                            variant="ghost"
                                            size="icon-sm"
                                            className="text-muted-foreground hover:text-foreground"
                                            aria-label="Edit"
                                        >
                                            <Pencil className="size-4" />
                                        </Button>
                                    </Link>

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

"use client";

import React from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, Download, User } from "lucide-react";

export type OrderHistoryRow = {
  id: string;
  customerName: string;
  customerAvatarUrl?: string;
  items: number;
  amount: string;
  date: string;
  status: "pending" | "delivered" | "canceled" | string;
};

type OrderHistoryProps = {
  data: OrderHistoryRow[];
  onFilter?: () => void;
  onExport?: () => void;
  onDetails?: (row: OrderHistoryRow) => void;
  className?: string;
};

const statusStyles: Record<string, string> = {
  pending: "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-600 dark:bg-sky-950/40 dark:text-sky-400",
  delivered: "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
  canceled: "border-red-300 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-950/40 dark:text-red-400",
};

function getStatusClass(status: string) {
  return statusStyles[status.toLowerCase()] ?? "border-border bg-muted text-muted-foreground";
}

export default function OrderHistory({
  data,
  onFilter,
  onExport,
  onDetails,
  className,
}: OrderHistoryProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card shadow-sm overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col gap-4 border-b border-border bg-card px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-base font-bold text-foreground">Order History</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={onFilter}
          >
            <Filter className="size-4" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={onExport}
          >
            <Download className="size-4" />
            Export
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border bg-muted/50 hover:bg-muted/50">
            <TableHead className="h-11 w-12 pr-0">
              <Checkbox aria-label="Select all" />
            </TableHead>
            <TableHead className="font-semibold text-foreground">Order Id</TableHead>
            <TableHead className="font-semibold text-foreground">Customer</TableHead>
            <TableHead className="font-semibold text-foreground">Items</TableHead>
            <TableHead className="font-semibold text-foreground">Amount</TableHead>
            <TableHead className="font-semibold text-foreground">Date</TableHead>
            <TableHead className="font-semibold text-foreground">Status</TableHead>
            <TableHead className="font-semibold text-foreground text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              className="border-b border-border bg-card hover:bg-muted/30"
            >
              <TableCell className="w-12 pr-0">
                <Checkbox aria-label={`Select order ${row.id}`} />
              </TableCell>
              <TableCell className="font-medium text-foreground">
                #{row.id}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-muted">
                    {row.customerAvatarUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={row.customerAvatarUrl}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-muted-foreground">
                        <User className="size-4" />
                      </span>
                    )}
                  </div>
                  <span className="text-foreground">{row.customerName}</span>
                </div>
              </TableCell>
              <TableCell className="text-foreground">
                {String(row.items).padStart(2, "0")}
              </TableCell>
              <TableCell className="text-foreground">{row.amount}</TableCell>
              <TableCell className="text-muted-foreground">{row.date}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex rounded-md border px-2 py-0.5 text-xs font-medium capitalize",
                    getStatusClass(row.status)
                  )}
                >
                  {row.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => onDetails?.(row)}
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

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
import { Pencil, Eye, Trash2 } from "lucide-react";

export type UserTableRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  order: number;
  status: "active" | "inactive" | "suspended" | string;
  avatarUrl?: string;
};

type UserTableProps = {
  data: UserTableRow[];
  onEdit?: (row: UserTableRow) => void;
  onView?: (row: UserTableRow) => void;
  onDelete?: (row: UserTableRow) => void;
  className?: string;
};

const statusStyles: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  inactive: "bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  suspended: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
  blocked: "bg-muted text-muted-foreground border-border",
};

function getStatusClass(status: string) {
  return statusStyles[status.toLowerCase()] ?? "bg-muted text-muted-foreground border-border";
}

function getStatusLabel(status: string) {
  const s = status.toLowerCase();
  if (s === "active") return "Active";
  if (s === "inactive" || s === "blocked") return "Inactive";
  if (s === "suspended") return "Suspended";
  return status;
}

export default function UserTable({
  data,
  onEdit,
  onView,
  onDelete,
  className,
}: UserTableProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card shadow-sm overflow-hidden",
        className
      )}
    >
      <div className="border-b border-border bg-card px-5 py-4">
        <h3 className="text-base font-bold text-foreground">Customer List</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border bg-muted/50 hover:bg-muted/50">
            <TableHead className="h-11 font-semibold text-foreground">Id</TableHead>
            <TableHead className="font-semibold text-foreground">Name</TableHead>
            <TableHead className="font-semibold text-foreground">Email</TableHead>
            <TableHead className="font-semibold text-foreground">Phone</TableHead>
            <TableHead className="font-semibold text-foreground">Order</TableHead>
            <TableHead className="font-semibold text-foreground">Status</TableHead>
            <TableHead className="font-semibold text-foreground text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              className="border-b border-border bg-card hover:bg-muted/30 transition-colors"
            >
              <TableCell className="font-medium text-foreground">
                {row.id}
              </TableCell>
              <TableCell className="font-medium text-foreground">
                {row.name}
              </TableCell>
              <TableCell className="text-muted-foreground">{row.email}</TableCell>
              <TableCell className="text-muted-foreground">{row.phone}</TableCell>
              <TableCell className="text-foreground">{row.order}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
                    getStatusClass(row.status)
                  )}
                >
                  {getStatusLabel(row.status)}
                </span>
              </TableCell>
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

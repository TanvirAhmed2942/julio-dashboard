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

export type TopFiveRestaurantRow = {
  name: string;
  logoUrl?: string;
  sales: string | number;
  earning: string;
};

type TopFiveRestaurantProps = {
  /** Top 5 items (current month data). Pass exactly 5 or fewer. */
  data: TopFiveRestaurantRow[];
  title?: string;
  className?: string;
};

function TopFiveRestaurant({
  data,
  title = "Top Restaurants",
  className,
}: TopFiveRestaurantProps) {
  const rows = data.slice(0, 5);

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card shadow-sm overflow-hidden",
        className
      )}
    >
      <div className="border-b border-border bg-muted/50 px-5 py-4">
        <h3 className="text-base font-bold text-foreground">{title}</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border bg-muted/40 hover:bg-muted/40">
            <TableHead className="h-10 font-semibold text-foreground w-14">
              SI
            </TableHead>
            <TableHead className="font-semibold text-foreground">
              Name
            </TableHead>
            <TableHead className="font-semibold text-foreground">
              Sales
            </TableHead>
            <TableHead className="font-semibold text-foreground">
              Earning
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`${row.name}-${index}`}
              className="border-b border-border border-dashed bg-card hover:bg-muted/20"
            >
              <TableCell className="font-medium text-foreground w-14">
                {String(index + 1).padStart(2, "0")}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-muted">
                    {row.logoUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={row.logoUrl}
                        alt=""
                        className="h-full w-full object-cover"
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
              <TableCell className="text-foreground">
                {row.sales}
              </TableCell>
              <TableCell className="font-medium text-foreground">
                {row.earning}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TopFiveRestaurant;

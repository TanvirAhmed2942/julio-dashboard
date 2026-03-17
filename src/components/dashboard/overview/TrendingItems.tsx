"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export type TrendingItem = {
    rank: number;
    name: string;
    price: string;
    orderCount: number;
    imageUrl: string;
    imageAlt?: string;
};

type TrendingItemsProps = {
    items: TrendingItem[];
    title?: string;
    className?: string;
};

function TrendingItems({ items, title = "Trending Items", className }: TrendingItemsProps) {
    return (
        <Card className={cn("flex h-full flex-col rounded-xl border-0 bg-card shadow-sm", className)}>
            <CardHeader className="shrink-0 px-6 pb-2 pt-6">
                <h3 className="text-base font-bold text-foreground">{title}</h3>
            </CardHeader>
            <CardContent className="flex min-h-0 flex-1 flex-col gap-0 px-6 pb-6 pt-0">
                {items.map((item) => (
                    <div
                        key={item.rank}
                        className="flex items-center gap-4 border-b border-border py-4 last:border-b-0"
                    >
                        <span className="min-w-8 shrink-0 text-sm font-bold text-foreground">
                            #{item.rank}
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="font-bold text-foreground">{item.name}</p>
                            <div className="mt-0.5 flex flex-wrap items-baseline gap-2">
                                <span className="text-sm text-foreground">{item.price}</span>
                                <span className="text-sm text-muted-foreground">
                                    Order {item.orderCount}x
                                </span>
                            </div>
                        </div>
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
                            <Image
                                src={item.imageUrl}
                                alt={item.imageAlt ?? item.name}
                                className="h-full w-full object-cover"
                                width={56}
                                height={56}
                                unoptimized
                            />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

export default TrendingItems;

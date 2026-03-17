"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Calendar } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const MONTH_OPTIONS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

export type CustomerMapDataPoint = {
    day: number;
    value: number;
};

const BAR_COLOR = "#f97316";

type CustomerMapProps = {
    data: CustomerMapDataPoint[];
    months?: string[];
    selectedMonth?: string;
    onMonthChange?: (month: string) => void;
    className?: string;
};

export default function CustomerMap({
    data,
    months = MONTH_OPTIONS,
    selectedMonth = "October",
    onMonthChange,
    className,
}: CustomerMapProps) {
    const [month, setMonth] = useState(selectedMonth);

    const handleMonthChange = (value: string) => {
        setMonth(value);
        onMonthChange?.(value);
    };

    const yAxisTicks = [0, 250, 500, 750, 1000];
    const yAxisDomain = [0, 1000];

    return (
        <Card className={cn("flex h-full flex-col rounded-xl border-0 bg-card shadow-sm", className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-6 pb-2 pt-6">
                <h3 className="text-base font-bold text-foreground">
                    Customer Map
                </h3>
                <Select value={month} onValueChange={handleMonthChange}>
                    <SelectTrigger className="h-9 min-w-[120px] rounded-lg border-2 border-gray-300 bg-white px-4 shadow-none focus-visible:ring-2 focus-visible:ring-gray-400/30 dark:border-gray-600 dark:bg-white dark:focus-visible:ring-gray-500/30">
                        <Calendar className="mr-2 size-4 shrink-0 text-gray-600 dark:text-gray-700" />
                        <SelectValue className="text-foreground" />
                    </SelectTrigger>
                    <SelectContent>
                        {months.map((m) => (
                            <SelectItem key={m} value={m}>
                                {m}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 16, right: 8, left: 0, bottom: 0 }}
                            barCategoryGap="4%"
                            barGap={0}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="hsl(var(--border))"
                                vertical
                                horizontal
                            />
                            <XAxis
                                dataKey="day"
                                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                                axisLine={false}
                                tickLine={false}
                                tickMargin={8}
                                interval={0}
                            />
                            <YAxis
                                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                                axisLine={false}
                                tickLine={false}
                                domain={yAxisDomain}
                                ticks={yAxisTicks}
                                width={28}
                                tickMargin={8}
                            />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "none",
                                    backgroundColor: "#5c4033",
                                    color: "white",
                                    fontWeight: 500,
                                }}
                                formatter={(value: number | undefined) => [value ?? 0, ""]}
                                labelFormatter={(label) => `Day ${label}`}
                                cursor={false}
                            />
                            <Bar
                                dataKey="value"
                                fill={BAR_COLOR}
                                radius={[6, 6, 0, 0]}
                                maxBarSize={24}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}

export { MONTH_OPTIONS };

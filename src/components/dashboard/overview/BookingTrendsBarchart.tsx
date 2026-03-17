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
    Legend,
} from "recharts";
import { Calendar, ChevronDown } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export type EarningProfitDataPoint = {
    month: string;
    earning: number;
    profit: number;
};

const EARNING_COLOR = "#5b21b6";
const PROFIT_COLOR = "#ea580c";

const formatEuro = (value: number) =>
    `€${Number(value).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

type BookingTrendsBarchartProps = {
    data: EarningProfitDataPoint[];
    years?: number[];
    selectedYear?: number;
    onYearChange?: (year: number) => void;
    className?: string;
};

export default function BookingTrendsBarchart({
    data,
    years = [2024, 2023, 2022],
    selectedYear = 2024,
    onYearChange,
    className,
}: BookingTrendsBarchartProps) {
    const [year, setYear] = useState(selectedYear);

    const handleYearChange = (value: string) => {
        const y = Number(value);
        setYear(y);
        onYearChange?.(y);
    };

    const yAxisTicks = [0, 2000, 4000, 6000, 8000, 10000];
    const yAxisDomain = [0, 10000];

    return (
        <Card className={cn("rounded-xl border-0 bg-card shadow-sm", className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-6 pb-2 pt-6">
                <h3 className="text-base font-bold text-foreground">
                    Total Earning & Profit
                </h3>
                <Select value={String(year)} onValueChange={handleYearChange}>
                    <SelectTrigger className="h-9 min-w-[100px] rounded-lg border-2 border-gray-300 bg-white px-4 shadow-none focus-visible:ring-2 focus-visible:ring-gray-400/30 dark:border-gray-600 dark:bg-white dark:focus-visible:ring-gray-500/30">
                        <Calendar className="mr-2 size-4 shrink-0 text-gray-600 dark:text-gray-700" />
                        <SelectValue className="text-foreground" />

                    </SelectTrigger>
                    <SelectContent>
                        {years.map((y) => (
                            <SelectItem key={y} value={String(y)}>
                                {y}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
                <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 16, right: 8, left: 0, bottom: 0 }}
                            barGap={4}
                            barCategoryGap="20%"

                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="hsl(var(--border))"
                                vertical={false}
                            />
                            <XAxis
                                dataKey="month"
                                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                                axisLine={false}
                                tickLine={false}
                                tickMargin={8}
                            />
                            <YAxis
                                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(v) => `€${v / 1000}k`}
                                domain={yAxisDomain}
                                ticks={yAxisTicks}
                                width={36}
                                tickMargin={8}
                            />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: "6px",
                                    border: "1px solid hsl(var(--border))",
                                    backgroundColor: "#f3f4f6",
                                }}
                                formatter={(value: number | undefined) => [formatEuro(value ?? 0), ""]}
                                labelFormatter={(label) => label}
                                cursor={false}
                            />
                            <Legend
                                wrapperStyle={{ paddingTop: "8px" }}
                                formatter={(value) => (
                                    <span className="text-sm text-muted-foreground">{value}</span>
                                )}
                                iconType="circle"
                                iconSize={10}
                            />
                            <Bar
                                dataKey="earning"
                                name="Total Earning"
                                fill={EARNING_COLOR}
                                radius={[6, 6, 0, 0]}
                                maxBarSize={32}
                                label={{
                                    position: "top",
                                    formatter: (v: unknown) => formatEuro(Number(v ?? 0)),
                                    fontSize: 11,
                                    fill: "hsl(var(--muted-foreground))",
                                }}
                            />
                            <Bar
                                dataKey="profit"
                                name="Profit"
                                fill={PROFIT_COLOR}
                                radius={[6, 6, 0, 0]}
                                maxBarSize={32}
                                label={{
                                    position: "top",
                                    formatter: (v: unknown) => formatEuro(Number(v ?? 0)),
                                    fontSize: 11,
                                    fill: "hsl(var(--muted-foreground))",
                                }}

                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}

export type { BookingTrendsBarchartProps };
export { MONTHS };

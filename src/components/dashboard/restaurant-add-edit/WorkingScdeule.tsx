"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"] as const;

function WorkingSchedule() {
    return (
        <div className="space-y-3 rounded-xl border border-dashed border-border bg-muted/40 p-4">
            <Label className="text-sm font-semibold text-foreground">
                Working Days
            </Label>

            <div className="mt-1 divide-y divide-border rounded-lg border border-dashed border-border bg-card">
                {DAYS.map((day, index) => (
                    <div
                        key={day}
                        className="flex flex-col gap-2 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="w-14 shrink-0 font-medium text-muted-foreground">
                            {day}:
                        </div>
                        <div className="flex flex-1 items-center gap-2 sm:gap-3">
                            <Input
                                type="time"
                                className="h-9 max-w-[130px] rounded-md border bg-background"
                                defaultValue={index === 0 ? "" : "09:00"}
                            />
                            <span className="text-xs text-muted-foreground">To</span>
                            <Input
                                type="time"
                                className="h-9 max-w-[130px] rounded-md border bg-background"
                                defaultValue={index === 0 ? "" : "23:00"}
                            />
                            <label className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                                <Checkbox
                                    defaultChecked={index !== 0}
                                    aria-label={`${day} open`}
                                />
                                <span>Open</span>
                            </label>
                        </div>
                    </div>
                ))}
            </div>
            <Button variant="outline" className="w-full">Save</Button>
        </div>
    );
}

export default WorkingSchedule;


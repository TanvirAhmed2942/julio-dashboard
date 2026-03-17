import React, { cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export type StatItem = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  /** Tailwind class for icon color, e.g. "text-violet-400" */
  iconColor: string;
  /** Tailwind class for icon container background, e.g. "bg-violet-100" */
  iconBgColor: string;
};

type StatsProps = {
  items: StatItem[];
  className?: string;
};

function StatCard({
  label,
  value,
  icon,
  iconColor,
  iconBgColor,
  className,
}: StatItem & { className?: string }) {
  const iconWithColor = isValidElement(icon)
    ? cloneElement(icon as React.ReactElement<{ className?: string }>, {
      className: cn(
        "h-5 w-5 shrink-0",
        (icon as React.ReactElement<{ className?: string }>).props?.className,
        iconColor
      ),
    })
    : icon;

  return (
    <Card
      className={cn(
        "border-0 shadow-sm rounded-xl",
        "flex min-h-[90px] flex-row items-center gap-4 p-4",
        className
      )}
    >
      <div
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-xl",
          iconBgColor
        )}
      >
        {iconWithColor}
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-0.5">
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
        <span className="text-xl font-bold tabular-nums text-foreground md:text-2xl">
          {value}
        </span>
      </div>
    </Card>
  );
}

export default function Stats({ items, className }: StatsProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <StatCard
          key={item.label}
          label={item.label}
          value={item.value}
          icon={item.icon}
          iconColor={item.iconColor}
          iconBgColor={item.iconBgColor}
        />
      ))}
    </div>
  );
}

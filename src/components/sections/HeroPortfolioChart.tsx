import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { cn } from "@/lib/utils";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const PORTFOLIO_SERIES = [
  {
    key: "mutualFunds",
    label: "Mutual Funds",
    allocation: "45%",
    subtitle: "Equities & SIP",
    badge: "Top Pick",
    color: "var(--chart-1)",
    cardClass:
      "from-indigo-500/15 via-violet-500/10 to-indigo-600/20 border-indigo-500/30 ring-indigo-500/20",
    labelClass: "text-indigo-700 dark:text-indigo-300",
    valueClass: "from-indigo-600 to-violet-600",
    subtitleClass: "text-indigo-600/70",
    legendClass: "bg-[var(--chart-1)]",
  },
  {
    key: "licPolicies",
    label: "LIC Policies",
    allocation: "35%",
    subtitle: "Life & Pension",
    color: "var(--chart-2)",
    cardClass:
      "from-emerald-500/15 via-teal-500/10 to-emerald-600/20 border-emerald-500/30 ring-emerald-500/20",
    labelClass: "text-emerald-700 dark:text-emerald-300",
    valueClass: "from-emerald-600 to-teal-600",
    subtitleClass: "text-emerald-600/70",
    legendClass: "bg-[var(--chart-2)]",
  },
  {
    key: "healthGen",
    label: "Health & Gen",
    allocation: "20%",
    subtitle: "Medical Cover",
    color: "var(--chart-3)",
    cardClass:
      "from-amber-500/15 via-orange-500/10 to-amber-600/20 border-amber-500/30 ring-amber-500/20",
    labelClass: "text-amber-700 dark:text-amber-300",
    valueClass: "from-amber-600 to-orange-600",
    subtitleClass: "text-amber-600/70",
    legendClass: "bg-[var(--chart-3)]",
  },
] as const;

type SeriesKey = (typeof PORTFOLIO_SERIES)[number]["key"];

const chartData = [
  { month: "Jan", mutualFunds: 42, licPolicies: 34, healthGen: 19 },
  { month: "Feb", mutualFunds: 40, licPolicies: 35, healthGen: 20 },
  { month: "Mar", mutualFunds: 43, licPolicies: 33, healthGen: 19 },
  { month: "Apr", mutualFunds: 41, licPolicies: 36, healthGen: 18 },
  { month: "May", mutualFunds: 45, licPolicies: 34, healthGen: 19 },
  { month: "Jun", mutualFunds: 44, licPolicies: 36, healthGen: 18 },
  { month: "Jul", mutualFunds: 47, licPolicies: 35, healthGen: 18 },
  { month: "Aug", mutualFunds: 46, licPolicies: 33, healthGen: 20 },
  { month: "Sep", mutualFunds: 44, licPolicies: 35, healthGen: 19 },
  { month: "Oct", mutualFunds: 48, licPolicies: 34, healthGen: 18 },
  { month: "Nov", mutualFunds: 46, licPolicies: 36, healthGen: 18 },
  { month: "Dec", mutualFunds: 45, licPolicies: 35, healthGen: 20 },
];

const chartConfig = {
  mutualFunds: {
    label: "Mutual Funds",
    color: "var(--chart-1)",
  },
  licPolicies: {
    label: "LIC Policies",
    color: "var(--chart-2)",
  },
  healthGen: {
    label: "Health & Gen",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const SERIES_KEYS: SeriesKey[] = ["mutualFunds", "licPolicies", "healthGen"];

const CYCLE_MS = 30000;

export default function HeroPortfolioChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PORTFOLIO_SERIES.length);
      setAnimationCycle((prev) => prev + 1);
    }, CYCLE_MS);

    return () => window.clearInterval(interval);
  }, []);

  const getAreaStyle = (index: number) => {
    const isActive = activeIndex === index;
    return {
      fillOpacity: isActive ? 0.55 : 0.18,
      strokeOpacity: isActive ? 1 : 0.35,
      strokeWidth: isActive ? 2.5 : 1.5,
    };
  };

  return (
    <>
      <div className="pt-2">
        <ChartContainer
          config={chartConfig}
          className="h-44 w-full aspect-auto"
          initialDimension={{ width: 320, height: 176 }}
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 8, right: 8, left: 20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 10 }}
            />
            <ChartTooltip
              cursor={{ stroke: "var(--border)", strokeWidth: 1, strokeDasharray: "4 4" }}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  labelFormatter={(value) => String(value)}
                  formatter={(value, name) => [`${value}% `, chartConfig[name as SeriesKey]?.label ?? name]}
                />
              }
            />
            <defs>
              {PORTFOLIO_SERIES.map((series) => (
                <linearGradient
                  key={series.key}
                  id={`fill-${series.key}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={`var(--color-${series.key})`} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={`var(--color-${series.key})`} stopOpacity={0.1} />
                </linearGradient>
              ))}
            </defs>
            {SERIES_KEYS.map((key, index) => (
              <Area
                key={`${key}-${activeIndex === index ? animationCycle : "idle"}`}
                dataKey={key}
                type="natural"
                fill={`url(#fill-${key})`}
                stroke={`var(--color-${key})`}
                isAnimationActive={activeIndex === index}
                animationDuration={1200}
                animationEasing="ease-in-out"
                // dot={activeIndex === index ? { r: 3, strokeWidth: 2 } : false}
                activeDot={{ r: 5, strokeWidth: 2 }}
                {...getAreaStyle(index)}
              />
            ))}
          </AreaChart>
        </ChartContainer>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {PORTFOLIO_SERIES.map((series, index) => (
            <button
              key={series.key}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center gap-1.5 text-[10px] rounded-full px-2 py-0.5 transition-all duration-500",
                activeIndex === index
                  ? "text-foreground font-semibold bg-muted/60 scale-105"
                  : "text-muted-foreground"
              )}
            >
              <span className={cn("h-2 w-4 rounded-full transition-opacity duration-500", series.legendClass, activeIndex === index ? "opacity-100" : "opacity-50")} />
              {series.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Portfolio Distribution
        </p>
        <div className="grid grid-cols-3 gap-2">
          {PORTFOLIO_SERIES.map((series, index) => {
            const isActive = false

            return (
              <div
                key={series.key}
                className={cn(
                  "relative rounded-lg p-2.5 text-center transition-all duration-700 ease-in-out bg-gradient-to-br border shadow-sm ring-1",
                  series.cardClass,
                  isActive
                    ? "scale-[1.04] shadow-md ring-2 -translate-y-0.5 portfolio-card-active"
                    : "opacity-70 scale-100"
                )}
              >
                {series.badge && isActive && (
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {series.badge}
                  </div>
                )}
                <p className={cn("text-[10px] uppercase font-semibold mt-1", series.labelClass)}>
                  {series.label}
                </p>
                <p
                  className={cn(
                    "font-extrabold bg-gradient-to-r bg-clip-text text-transparent mt-0.5 transition-all duration-500",
                    series.valueClass,
                    isActive ? "text-lg" : "text-sm"
                  )}
                >
                  {series.allocation}
                </p>
                <p className={cn("text-[9px] font-medium mt-0.5", series.subtitleClass)}>
                  {series.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

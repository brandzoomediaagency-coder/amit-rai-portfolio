"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartPoint = {
  month: string;
  leads: number;
  roas: number;
  spend?: number;
};

type GrowthChartProps = {
  data: ChartPoint[];
  variant?: "area" | "bar";
};

export function GrowthChart({ data, variant = "area" }: GrowthChartProps) {
  if (variant === "bar") {
    return (
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="month" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
          <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(67,217,255,0.08)" }}
            contentStyle={{
              background: "rgba(5, 7, 11, 0.92)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 8,
              color: "#fff",
            }}
          />
          <Bar dataKey="leads" fill="#43D9FF" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="roasGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#43D9FF" stopOpacity={0.48} />
            <stop offset="95%" stopColor="#43D9FF" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
        <XAxis dataKey="month" stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
        <YAxis stroke="rgba(255,255,255,0.45)" tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            background: "rgba(5, 7, 11, 0.92)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            color: "#fff",
          }}
        />
        <Area
          type="monotone"
          dataKey="roas"
          stroke="#43D9FF"
          strokeWidth={3}
          fill="url(#roasGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

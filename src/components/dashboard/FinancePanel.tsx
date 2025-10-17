import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, CreditCard, Target } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

const expenseData = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 52000 },
  { month: "Mar", amount: 48000 },
  { month: "Apr", amount: 61000 },
  { month: "May", amount: 55000 },
  { month: "Jun", amount: 67000 },
];

const cashflowData = [
  { month: "Jan", inflow: 85000, outflow: 45000 },
  { month: "Feb", inflow: 92000, outflow: 52000 },
  { month: "Mar", inflow: 78000, outflow: 48000 },
  { month: "Apr", inflow: 101000, outflow: 61000 },
  { month: "May", inflow: 95000, outflow: 55000 },
  { month: "Jun", inflow: 110000, outflow: 67000 },
];

const kpiData = [
  { name: "Profit Margin", value: 68, fill: "hsl(var(--primary))" },
  { name: "Cashflow Ratio", value: 85, fill: "hsl(var(--secondary))" },
  { name: "ROI", value: 72, fill: "hsl(var(--accent))" },
];

export const FinancePanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="glass-card border-primary/20 h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Finance Agent
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Revenue</p>
              <p className="text-2xl font-bold text-primary">₹110K</p>
              <p className="text-xs text-accent flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +12%
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Expenses</p>
              <p className="text-2xl font-bold text-secondary">₹67K</p>
              <p className="text-xs text-muted-foreground mt-1">Current</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Profit</p>
              <p className="text-2xl font-bold text-accent">₹43K</p>
              <p className="text-xs text-accent flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +18%
              </p>
            </div>
          </div>

          {/* Expense Analysis Chart */}
          <div className="glass-card p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-secondary" />
              Expense Analysis
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={expenseData}>
                <defs>
                  <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="hsl(var(--secondary))"
                  fill="url(#expenseGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* KPI Radial Charts */}
          <div className="glass-card p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-accent" />
              Performance KPIs
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="20%"
                outerRadius="90%"
                data={kpiData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          {/* Cashflow Visualization */}
          <div className="glass-card p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4">Cashflow Overview</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={cashflowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="inflow"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))" }}
                />
                <Line
                  type="monotone"
                  dataKey="outflow"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--destructive))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

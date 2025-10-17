import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Target } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const performanceData = [
  { month: "Jan", sales: 85, target: 100 },
  { month: "Feb", sales: 92, target: 100 },
  { month: "Mar", sales: 78, target: 100 },
  { month: "Apr", sales: 101, target: 100 },
  { month: "May", sales: 95, target: 100 },
  { month: "Jun", sales: 110, target: 100 },
];

const categoryData = [
  { name: "Products", value: 45 },
  { name: "Services", value: 30 },
  { name: "Consulting", value: 25 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"];

export const AnalyticsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <Card className="glass-card border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-accent" />
            Analytics Agent
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4">
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Total Users</p>
              <p className="text-2xl font-bold text-primary">2,450</p>
              <p className="text-xs text-accent flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +25%
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Conversion</p>
              <p className="text-2xl font-bold text-secondary">68%</p>
              <p className="text-xs text-accent flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +12%
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Engagement</p>
              <p className="text-2xl font-bold text-accent">89%</p>
              <p className="text-xs text-muted-foreground mt-1">Active</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">ROI</p>
              <p className="text-2xl font-bold text-primary">3.8x</p>
              <p className="text-xs text-accent flex items-center gap-1 mt-1">
                <Target className="w-3 h-3" />
                Strong
              </p>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="glass-card p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              Performance vs Target
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={performanceData}>
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
                <Legend />
                <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                <Bar dataKey="target" fill="hsl(var(--muted))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Distribution */}
          <div className="glass-card p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary" />
              Revenue Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

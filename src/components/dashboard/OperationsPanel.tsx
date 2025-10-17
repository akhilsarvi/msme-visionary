import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Package, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const tasks = [
  { id: 1, title: "Process vendor invoices", status: "completed", priority: "high" },
  { id: 2, title: "Update inventory records", status: "in-progress", priority: "medium" },
  { id: 3, title: "Generate monthly report", status: "pending", priority: "high" },
  { id: 4, title: "Review expense claims", status: "in-progress", priority: "low" },
];

const stockItems = [
  { name: "Raw Materials", quantity: 85, max: 100 },
  { name: "Finished Goods", quantity: 62, max: 80 },
  { name: "Packaging", quantity: 45, max: 60 },
];

export const OperationsPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="glass-card border-secondary/20 h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5 text-secondary" />
            Operations Agent
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Productivity Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Completed</p>
              <p className="text-2xl font-bold text-accent">24</p>
              <p className="text-xs text-muted-foreground mt-1">Today</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">In Progress</p>
              <p className="text-2xl font-bold text-secondary">8</p>
              <p className="text-xs text-muted-foreground mt-1">Active</p>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <p className="text-xs text-muted-foreground mb-1">Pending</p>
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground mt-1">Queue</p>
            </div>
          </div>

          {/* Task Tracker */}
          <div className="glass-card p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Active Tasks
            </h3>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors"
                >
                  {task.status === "completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  ) : task.status === "in-progress" ? (
                    <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{task.title}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        task.priority === "high"
                          ? "bg-destructive/20 text-destructive"
                          : task.priority === "medium"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-muted/20 text-muted-foreground"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stock Summary */}
          <div className="glass-card p-4 rounded-xl">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Package className="w-4 h-4 text-primary" />
              Stock Summary
            </h3>
            <div className="space-y-4">
              {stockItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="text-muted-foreground">
                      {item.quantity}/{item.max}
                    </span>
                  </div>
                  <Progress value={(item.quantity / item.max) * 100} className="h-2" />
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Package, BarChart3, Users, Mic, CheckCircle2, Clock, Circle } from "lucide-react";

const timeline = [
  {
    phase: "Phase 1",
    title: "Finance Agent",
    icon: DollarSign,
    description: "Automated expense tracking and cashflow analysis",
    status: "complete",
  },
  {
    phase: "Phase 2",
    title: "Operations Agent",
    icon: Package,
    description: "Task automation and inventory management",
    status: "complete",
  },
  {
    phase: "Phase 3",
    title: "Analytics Agent",
    icon: BarChart3,
    description: "Real-time insights and predictive analytics",
    status: "in-progress",
  },
  {
    phase: "Phase 4",
    title: "CRM Agent",
    icon: Users,
    description: "Customer relationship management",
    status: "planned",
  },
  {
    phase: "Phase 5",
    title: "Voice Agent",
    icon: Mic,
    description: "Natural language interactions",
    status: "planned",
  },
];

const getStatusIcon = (status: string) => {
  if (status === "complete") return CheckCircle2;
  if (status === "in-progress") return Clock;
  return Circle;
};

const getStatusColor = (status: string) => {
  if (status === "complete") return "text-accent";
  if (status === "in-progress") return "text-secondary";
  return "text-muted-foreground";
};

export const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">System Evolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future of business intelligence, one agent at a time
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-secondary to-muted" />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const StatusIcon = getStatusIcon(item.status);
              const statusColor = getStatusColor(item.status);
              
              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    animate={{
                      scale: item.status === "in-progress" ? [1, 1.3, 1] : 1,
                      boxShadow: item.status === "in-progress"
                        ? [
                            "0 0 0 0 hsl(var(--secondary) / 0.7)",
                            "0 0 0 10px hsl(var(--secondary) / 0)",
                            "0 0 0 0 hsl(var(--secondary) / 0)",
                          ]
                        : "none",
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute left-6 w-5 h-5 rounded-full flex items-center justify-center ${
                      item.status === "complete"
                        ? "bg-accent glow-effect"
                        : item.status === "in-progress"
                        ? "bg-secondary"
                        : "bg-muted"
                    }`}
                  >
                    <StatusIcon className="w-3 h-3 text-background" />
                  </motion.div>

                  <Card
                    className="ml-20 glass-card hover:scale-105 transition-all border-l-4 border-l-transparent hover:border-l-primary"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl ${
                            item.status === "complete"
                              ? "bg-accent/20"
                              : item.status === "in-progress"
                              ? "bg-secondary/20"
                              : "bg-muted/20"
                          }`}
                        >
                          <Icon className={`w-6 h-6 ${statusColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-muted-foreground tracking-wider">
                              {item.phase}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                item.status === "complete"
                                  ? "bg-accent/20 text-accent"
                                  : item.status === "in-progress"
                                  ? "bg-secondary/20 text-secondary"
                                  : "bg-muted/20 text-muted-foreground"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

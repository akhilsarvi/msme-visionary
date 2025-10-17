import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const timeline = [
  {
    phase: "Phase 1",
    title: "Finance & Operations Agents",
    status: "Active",
    features: ["Expense tracking", "Invoice management", "Task automation", "Real-time analytics"],
  },
  {
    phase: "Phase 2",
    title: "Inventory Agent",
    status: "Coming Soon",
    features: ["Stock management", "Reorder alerts", "Supplier tracking", "Warehouse optimization"],
  },
  {
    phase: "Phase 3",
    title: "CRM Agent",
    status: "Planned",
    features: ["Customer insights", "Lead tracking", "Sales pipeline", "Communication hub"],
  },
  {
    phase: "Phase 4",
    title: "Analytics Agent",
    status: "Planned",
    features: ["Predictive analytics", "Business forecasting", "Trend analysis", "Custom reports"],
  },
];

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
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col`}
              >
                <div className="flex-1 lg:text-right lg:even:text-left">
                  <Card className="glass-card border-primary/20 hover:scale-105 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2 lg:justify-end lg:even:justify-start justify-center">
                        <span className="text-sm font-semibold text-primary">{item.phase}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            item.status === "Active"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted/20 text-muted-foreground"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 lg:justify-end lg:even:justify-start justify-center text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-8 h-8 rounded-full glass-card border-2 border-primary items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp, Users, Brain } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automation",
    description: "Automate repetitive tasks and workflows to save time and reduce errors.",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Insights",
    description: "Get instant analytics and actionable insights from your business data.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Seamless team collaboration with shared dashboards and notifications.",
    color: "text-secondary",
  },
  {
    icon: Brain,
    title: "Smart Decisions",
    description: "AI-powered recommendations to optimize your business operations.",
    color: "text-accent",
  },
];

export const FeaturesSection = () => {
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
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run your business efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-primary/20 h-full hover:scale-105 transition-transform group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-card/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

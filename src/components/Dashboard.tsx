import { motion } from "framer-motion";
import { FinancePanel } from "@/components/dashboard/FinancePanel";
import { OperationsPanel } from "@/components/dashboard/OperationsPanel";
import { AIChatWidget } from "@/components/dashboard/AIChatWidget";

export const Dashboard = () => {
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
            <span className="gradient-text">Intelligent Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time insights powered by AI agents working in harmony
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <FinancePanel />
          <OperationsPanel />
        </div>

        <div className="mt-6">
          <AIChatWidget />
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FinancePanel } from "@/components/dashboard/FinancePanel";
import { OperationsPanel } from "@/components/dashboard/OperationsPanel";
import { AnalyticsPanel } from "@/components/dashboard/AnalyticsPanel";
import { AIChatWidget } from "@/components/dashboard/AIChatWidget";
import { DashboardSidebar } from "@/components/DashboardSidebar";

export const Dashboard = () => {
  const [activeAgent, setActiveAgent] = useState("finance");

  return (
    <section className="min-h-screen flex">
      <DashboardSidebar activeAgent={activeAgent} onAgentChange={setActiveAgent} />
      
      <div className="flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Intelligent Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time insights powered by AI agents working in harmony
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeAgent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeAgent === "finance" && <FinancePanel />}
            {activeAgent === "operations" && <OperationsPanel />}
            {activeAgent === "analytics" && <AnalyticsPanel />}
          </motion.div>
        </AnimatePresence>
      </div>

      <AIChatWidget />
    </section>
  );
};

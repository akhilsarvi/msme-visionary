import { motion } from "framer-motion";
import { DollarSign, Package, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activeAgent: string;
  onAgentChange: (agent: string) => void;
}

const agents = [
  { id: "finance", label: "Finance", icon: DollarSign },
  { id: "operations", label: "Operations", icon: Package },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

export const DashboardSidebar = ({ activeAgent, onAgentChange }: DashboardSidebarProps) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 glass-card border-r border-primary/20 p-6 space-y-2"
    >
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-muted-foreground mb-4 tracking-wider">
          AI AGENTS
        </h3>
      </div>
      
      {agents.map((agent, index) => {
        const Icon = agent.icon;
        const isActive = activeAgent === agent.id;
        
        return (
          <motion.button
            key={agent.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onAgentChange(agent.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
              isActive
                ? "bg-primary/20 text-primary border border-primary/30 glow-effect"
                : "hover:bg-muted/30 text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{agent.label}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

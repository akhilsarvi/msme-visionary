import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <HeroSection />
        <Dashboard />
        <FeaturesSection />
        <AboutSection />
        <TechStackSection />
      </motion.div>
    </div>
  );
};

export default Index;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { Dashboard } from "@/components/Dashboard";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { Footer } from "@/components/Footer";
import { LoadingSplash } from "@/components/LoadingSplash";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingSplash />}
      </AnimatePresence>

      <div className="min-h-screen relative overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="fixed inset-0 bg-gradient-to-b from-background to-card -z-10" />
        <div className="fixed inset-0 bg-gradient-mesh opacity-30 -z-10" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <HeroSection />
          <Dashboard />
          <FeaturesSection />
          <AboutSection />
          <TechStackSection />
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Index;

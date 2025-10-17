import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export const AIChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. Ask me about today's revenue, pending invoices, or anything else!",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: getAIResponse(input),
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);

    setInput("");
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("revenue")) {
      return "Today's revenue is ₹110,000, up 12% from yesterday. Great performance! 📈";
    } else if (lowerQuery.includes("invoice")) {
      return "You have 3 pending invoices totaling ₹45,000. Would you like me to send reminders?";
    } else if (lowerQuery.includes("expense")) {
      return "This month's expenses are ₹67,000. Highest category: Operations (₹28,000).";
    }
    return "I can help you with revenue tracking, invoice management, expense analysis, and more. What would you like to know?";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="glass-card border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-accent" />
            AI Assistant
            <Sparkles className="w-4 h-4 text-accent ml-auto" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64 pr-4">
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "glass-card border border-accent/20"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollArea>

          <div className="flex gap-2 mt-4">
            <Input
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="glass-card border-accent/20"
            />
            <Button onClick={handleSend} size="icon" className="bg-accent hover:bg-accent/90">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

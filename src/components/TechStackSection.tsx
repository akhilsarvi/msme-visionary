import { motion } from "framer-motion";

const techStack = [
  { name: "FastAPI", color: "from-green-500 to-emerald-600" },
  { name: "LangChain", color: "from-blue-500 to-cyan-600" },
  { name: "GPT", color: "from-purple-500 to-pink-600" },
  { name: "React.js", color: "from-cyan-500 to-blue-600" },
  { name: "MongoDB", color: "from-green-600 to-teal-600" },
  { name: "PostgreSQL", color: "from-blue-600 to-indigo-600" },
  { name: "Render", color: "from-purple-600 to-violet-600" },
  { name: "Vercel", color: "from-slate-700 to-zinc-800" },
];

export const TechStackSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powered By</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built with cutting-edge technology stack
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl flex items-center justify-center hover:border-primary/40 transition-colors"
            >
              <div className={`font-bold text-lg bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

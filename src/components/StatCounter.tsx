import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  target: number;
  suffix: string;
  label: string;
}

const StatCounter = ({ target, suffix, label }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center group"
    >
      <motion.div
        className="text-4xl md:text-5xl font-heading font-bold text-primary"
        animate={inView ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {count.toLocaleString()}{suffix}
      </motion.div>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
      {/* Animated underline */}
      <motion.div
        className="mx-auto mt-3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default StatCounter;

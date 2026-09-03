import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle }) => (
  <div className="mb-12 border-b border-slate-800/50 pb-4">
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-3xl md:text-4xl font-bold tracking-tight font-sans hw-accelerated bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 mt-3 text-sm max-w-2xl font-mono uppercase tracking-widest hw-accelerated"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

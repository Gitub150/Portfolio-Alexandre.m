import React from 'react';
import { motion } from 'motion/react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
  <motion.div 
    {...props}
    className={`glass-premium rounded-2xl p-6 hw-accelerated sleek-hover ${className}`}
  >
    {children}
  </motion.div>
);

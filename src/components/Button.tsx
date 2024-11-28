import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-3 rounded-lg font-medium transition-colors
        ${variant === 'primary' 
          ? 'bg-purple-600 text-white hover:bg-purple-700' 
          : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ 
  label, 
  checked, 
  onChange, 
  disabled,
  className = ''
}) => (
  <motion.label
    whileHover={{ scale: disabled ? 1 : 1.02 }}
    whileTap={{ scale: disabled ? 1 : 0.98 }}
    className={`inline-flex items-center gap-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
  >
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 transition-all duration-200 ${
        disabled ? 'opacity-50' : ''
      }`}
    />
    <span className={`${disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-gray-100'}`}>
      {label}
    </span>
  </motion.label>
);

export default Checkbox;
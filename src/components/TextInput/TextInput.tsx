import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../Typography/Typography';

type TextInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  type = 'text',
  className = ''
}, ref) => (
  <motion.div
    className={`flex flex-col gap-1 ${className}`}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {label && <Typography variant="label">{label}</Typography>}
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`border rounded px-3 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
      } ${
        disabled ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'
      } text-black dark:text-white`}
    />
    {error && <Typography variant="helper" className="text-red-500 dark:text-red-400">{error}</Typography>}
  </motion.div>
));

TextInput.displayName = 'TextInput';

export default TextInput;
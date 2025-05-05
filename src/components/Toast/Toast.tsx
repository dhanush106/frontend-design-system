import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, AlertTriangle, XCircle, X } from 'lucide-react';

type ToastProps = {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose?: () => void;
  duration?: number;
};

const bgColorMap = {
  success: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
  error: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100',
  info: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
  warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
};

const iconMap = {
  success: <CheckCircle className="w-5 h-5" />,
  error: <XCircle className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />,
  warning: <AlertTriangle className="w-5 h-5" />
};

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <motion.div
      className={`p-4 rounded-lg shadow-lg flex items-start gap-3 ${bgColorMap[type]} w-full max-w-xs`}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex-shrink-0">
        {iconMap[type]}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className="text-current hover:opacity-70 transition-opacity"
          aria-label="Close toast"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
};

export default Toast;
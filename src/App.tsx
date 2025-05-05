import React, { useState } from 'react';
import { useDarkMode } from './theme/useDarkMode';
import { Typography } from './components/Typography/Typography';
import TextInput from './components/TextInput/TextInput';
import Checkbox from './components/Checkbox/Checkbox';
import Toast from './components/Toast/Toast';
import Modal from './components/Modal/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showToast = (type, message) => {
    const newToast = { id: Date.now(), type, message };
    setToasts([...toasts, newToast]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-6 space-y-8"
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center gap-2"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </motion.button>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1">Typography Examples</Typography>
        <Typography variant="p">This is a paragraph with default styling.</Typography>
        <Typography variant="label">This is a label</Typography>
        <Typography variant="caption">This is a caption</Typography>
        <Typography variant="helper">This is helper text</Typography>
      </motion.div>

      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <TextInput
          label="Enter Text"
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          error={text === '' ? 'Text is required' : ''}
        />
      </motion.div>

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Checkbox
          label="Accept Terms"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {[{ t: 'success' }, { t: 'warning' }, { t: 'error' }].map(({ t }) => (
          <motion.button
            key={t}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => showToast(t, `${t.charAt(0).toUpperCase() + t.slice(1)} message!`)}
            className={`px-4 py-2 text-white rounded hover:opacity-90 ${
              t === 'success' ? 'bg-green-600' : t === 'warning' ? 'bg-yellow-500' : 'bg-red-600'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)} Toast
          </motion.button>
        ))}

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Show Modal
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={() => removeToast(toast.id)}
            className="fixed bottom-4 right-4 cursor-pointer"
          >
            <Toast type={toast.type} message={toast.message} />
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Modal
              isOpen={showModal}
              title="Confirmation"
              onClose={() => setShowModal(false)}
            >
              <p>Are you sure you want to proceed?</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    setShowModal(false);
                    showToast('success', 'Action confirmed successfully!');
                  }}
                >
                  Confirm
                </button>
              </div>
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;

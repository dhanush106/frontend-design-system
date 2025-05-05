import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'error', 'info'],
    },
    message: { control: 'text' },
    duration: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
  },
};

export const ToastDemo: Story = {
  render: () => {
    const [toasts, setToasts] = useState<{id: number, type: any, message: string}[]>([]);

    const addToast = (type: any, message: string) => {
      const id = Date.now();
      setToasts([...toasts, { id, type, message }]);
    };

    const removeToast = (id: number) => {
      setToasts(toasts.filter(t => t.id !== id));
    };

    return (
      <div className="space-x-2">
        <button
          onClick={() => addToast('success', 'Success message!')}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Success
        </button>
        <button
          onClick={() => addToast('error', 'Error occurred!')}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Error
        </button>
        <button
          onClick={() => addToast('warning', 'Warning message!')}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Warning
        </button>
        <button
          onClick={() => addToast('info', 'Information message!')}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Info
        </button>

        <div className="fixed bottom-4 right-4 space-y-2">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              type={toast.type}
              message={toast.message}
              onClose={() => removeToast(toast.id)}
              duration={3000}
            />
          ))}
        </div>
      </div>
    );
  },
};
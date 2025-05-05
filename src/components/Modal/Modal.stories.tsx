import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from './Modal';
import { Button } from './Button';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Open Modal
        </button>
        <Modal isOpen={open} title="Confirm Action" onClose={() => setOpen(false)}>
          <p className="mb-4">Are you sure you want to perform this action?</p>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => setOpen(false)}
            >
              Confirm
            </button>
          </div>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <Modal isOpen={open} title="Terms and Conditions" onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor.
          </p>
          <p>
            Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl 
            tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.
          </p>
          <p>
            Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et 
            justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
          </p>
        </div>
      </Modal>
    );
  },
};
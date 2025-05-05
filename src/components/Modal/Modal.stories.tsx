import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from './Modal';
import { Button } from './Button';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls modal visibility'
    },
    title: {
      control: 'text',
      description: 'Modal heading text'
    },
    onClose: {
      action: 'closed',
      description: 'Callback when modal closes'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for modal content'
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
## Modal Dialog Component

### Features
- Focus trapping
- Esc key to close
- Click outside to close
- Responsive sizing
- Dark mode support

### Accessibility
- Uses \`role="dialog"\`
- Proper \`aria-modal\` attribute
- Manages focus automatically
- Implements \`aria-labelledby\` for title

### When to Use
- Critical user decisions
- Contextual information
- Confirmation actions
- Form submissions
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Confirmation</Button>
        <Modal 
          isOpen={open} 
          title="Confirm Action" 
          onClose={() => setOpen(false)}
        >
          <div className="space-y-4">
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-end gap-2">
              <Button 
                variant="secondary" 
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive"
                onClick={() => {
                  alert('Action confirmed');
                  setOpen(false);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard confirmation dialog with action buttons. Use for irreversible actions.',
      },
    },
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Terms</Button>
        <Modal 
          isOpen={open} 
          title="Terms and Conditions" 
          onClose={() => setOpen(false)}
          className="max-h-[70vh]"
        >
          <div className="space-y-4 overflow-y-auto">
            <h3 className="font-semibold">1. Introduction</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
              Vivamus hendrerit arcu sed erat molestie vehicula.
            </p>
            
            <h3 className="font-semibold">2. User Obligations</h3>
            <p>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl 
              tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </p>
            
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 pt-4 border-t">
              <Button 
                onClick={() => setOpen(false)}
                className="w-full"
              >
                I Accept
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with scrollable content and sticky footer. Note the max-height constraint.',
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Accessibility Demo</Button>
        <Modal 
          isOpen={open} 
          title="Accessibility Features" 
          onClose={() => setOpen(false)}
        >
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <h4 className="font-bold mb-2">Keyboard Navigation</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><kbd>ESC</kbd> - Close modal</li>
                <li><kbd>TAB</kbd> - Cycle through focusable elements</li>
                <li><kbd>SHIFT + TAB</kbd> - Reverse cycle</li>
              </ul>
            </div>
            
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <h4 className="font-bold mb-2">ARIA Attributes</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><code>role="dialog"</code></li>
                <li><code>aria-modal="true"</code></li>
                <li><code>aria-labelledby</code> pointing to title</li>
              </ul>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const Anatomy = {
  render: () => (
    <div className="grid gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div>
        <h3 className="font-bold mb-2">Component Structure</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Overlay (click to close)</li>
          <li>Dialog container</li>
          <li>Header (title + close button)</li>
          <li>Content area (scrollable)</li>
          <li>Footer (optional for actions)</li>
        </ol>
      </div>
      
      <div>
        <h3 className="font-bold mb-2">Best Practices</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>✅ Always provide a clear title</li>
          <li>✅ Make buttons descriptive</li>
          <li>✅ Keep focus trapped within modal</li>
          <li>❌ Don't nest modals</li>
          <li>❌ Avoid long content without scrolling</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Anatomy of the modal component with usage guidelines.',
      },
    },
  },
};
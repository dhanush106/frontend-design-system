import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';
import React from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Data Entry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label (required for accessibility)',
    },
    error: {
      control: 'text',
      description: 'Error message text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Text Input Component

### Features
- Floating label pattern
- Error states
- Dark mode support
- ARIA-compliant

### Accessibility Requirements
- Must have associated \`<label>\`
- Error messages must use \`aria-describedby\`
- Focus states must be visible

### Best Practices
- Use for single-line text entry
- Combine with \`HelperText\` for instructions
- Always validate on blur
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    error: 'Valid email required',
    placeholder: 'email@example.com',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with message. Uses `aria-invalid="true"` automatically.',
      },
    },
  },
};

export const InteractiveDemo = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <div className="space-y-4">
        <TextInput
          label="Controlled Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />
        <div className="text-sm">
          Current value: <span className="font-mono">{value || '[empty]'}</span>
        </div>
      </div>
    );
  },
};

export const Anatomy = {
  render: () => (
    <div className="grid gap-4">
      <div className="border rounded-lg p-4">
        <h3 className="font-bold mb-2">Component Structure</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Label (required)</li>
          <li>Input container</li>
          <li>Helper/error text</li>
        </ol>
      </div>
      
      <div className="border rounded-lg p-4">
        <h3 className="font-bold mb-2">Accessibility Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code>aria-invalid</code> on error</li>
          <li><code>aria-describedby</code> for help text</li>
          <li>Visible focus indicator</li>
        </ul>
      </div>
    </div>
  ),
};
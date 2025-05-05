import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Accept Terms"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Group: Story = {
  render: () => {
    const [options, setOptions] = useState([
      { id: 1, label: 'Option 1', checked: false },
      { id: 2, label: 'Option 2', checked: true },
      { id: 3, label: 'Option 3', checked: false },
    ]);

    const handleChange = (id: number) => {
      setOptions(options.map(opt => 
        opt.id === id ? { ...opt, checked: !opt.checked } : opt
      ));
    };

    return (
      <div className="space-y-2">
        {options.map(option => (
          <Checkbox
            key={option.id}
            label={option.label}
            checked={option.checked}
            onChange={() => handleChange(option.id)}
          />
        ))}
      </div>
    );
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'helper'],
      description: 'Text variant from design system',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'muted', 'primary', 'destructive'],
      description: 'Color variant from theme',
    },
    as: {
      control: { type: 'text' },
      description: 'Override rendered HTML element',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Typography System

Our typography follows WCAG 2.1 AA standards with:

- Minimum 4.5:1 contrast ratio
- Responsive font scaling
- Semantic HTML elements

### When to Use
- \`h1-h6\` for document structure
- \`p\` for body text
- \`label\` for form labels
- \`caption\` for small print
- \`helper\` for form field guidance

### Accessibility
- Never skip heading levels
- Don't use typography for decoration only
- Maintain proper hierarchy
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary page headings. Use sparingly (1 per page).',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="p">Paragraph text</Typography>
      <Typography variant="label">Form label</Typography>
      <Typography variant="caption" color="muted">
        Caption text
      </Typography>
      <Typography variant="helper" color="muted">
        Helper text for form fields
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All typography variants shown together for comparison.',
      },
    },
  },
};

export const AccessibilityTest = {
  render: () => (
    <>
      <Typography variant="h1">Proper heading hierarchy</Typography>
      <Typography variant="h2">Subsection</Typography>
      <Typography variant="p">Supporting content</Typography>
      
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded">
        <Typography variant="h3">Do's and Don'ts</Typography>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>✅ Use semantic heading levels in order</li>
          <li>✅ Maintain sufficient color contrast</li>
          <li>❌ Don't use headings just for visual styling</li>
          <li>❌ Avoid tiny font sizes below 12px</li>
        </ul>
      </div>
    </>
  ),
};
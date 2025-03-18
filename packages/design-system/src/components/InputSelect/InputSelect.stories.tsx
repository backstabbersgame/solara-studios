import type { Meta, StoryObj } from '@storybook/react';
import InputSelect from './InputSelect';

const meta = {
  title: 'Components/InputSelect',
  component: InputSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {},
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    currentStep: 1,
    minSteps: 2,
    maxSteps: 4,
  },
};

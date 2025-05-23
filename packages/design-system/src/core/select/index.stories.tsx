import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicSelect from './index';

export default {
  title: 'Core/BasicSelect',
  component: BasicSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof BasicSelect>;

const Template: StoryFn<typeof BasicSelect> = (args) => {
  return <BasicSelect {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Select option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  ...Default.args,
  multiple: true,
};

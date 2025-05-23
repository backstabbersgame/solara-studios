import { Meta, StoryFn } from '@storybook/react';
import InputTextArea from './InputTextArea';
import React from 'react';

export default {
  title: 'Components/InputTextArea',
  component: InputTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<typeof InputTextArea>;

const Template: StoryFn<typeof InputTextArea> = (args) => (
  <InputTextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  id: 'Label',
  placeholder: 'Placeholder',
  type: 'text',
  hint: 'Hint',
  valid: true,
  showIcon: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Label',
  id: 'Label',
  placeholder: 'Placeholder',
  error: 'Error',
  valid: false,
  showIcon: true,
};

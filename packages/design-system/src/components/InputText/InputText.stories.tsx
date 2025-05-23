import { Meta, StoryFn } from '@storybook/react';
import InputText from './InputText';
import React from 'react';

export default {
  title: 'Components/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<typeof InputText>;

const Template: StoryFn<typeof InputText> = (args) => <InputText {...args} />;

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

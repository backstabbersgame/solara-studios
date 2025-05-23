import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicInput from './index';

export default {
  title: 'Core/BasicInput',
  component: BasicInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof BasicInput>;

const Template: StoryFn<typeof BasicInput> = (args) => {
  return <BasicInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  type: 'text',
};

export const DefaultWithText = Template.bind({});
DefaultWithText.args = {
  ...Default.args,
  value: 'Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const DisabledWithText = Template.bind({});
DisabledWithText.args = {
  ...Disabled.args,
  ...DefaultWithText.args,
};

export const Error = Template.bind({});
Error.args = {
  required: true,
  type: 'email',
  value: '',
};

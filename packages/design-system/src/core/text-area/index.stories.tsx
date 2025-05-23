import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicTextArea from './index';

export default {
  title: 'Core/BasicTextArea',
  component: BasicTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof BasicTextArea>;

const Template: StoryFn<typeof BasicTextArea> = (args) => {
  return <BasicTextArea {...args} />;
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
  type: 'number',
  value: '',
};

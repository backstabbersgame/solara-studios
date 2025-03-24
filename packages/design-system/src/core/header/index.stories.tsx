import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicHeader from './index';

export default {
  title: 'Core/BasicHeader',
  component: BasicHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof BasicHeader>;

const Template: StoryFn<typeof BasicHeader> = (args) => {
  return <BasicHeader {...args}>{args.children}</BasicHeader>;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Header',
};

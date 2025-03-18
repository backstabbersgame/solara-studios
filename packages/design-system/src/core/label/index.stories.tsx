import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicLabel from './index';

export default {
  title: 'Core/BasicLabel',
  component: BasicLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof BasicLabel>;

const Template: StoryFn<typeof BasicLabel> = (args) => {
  return <BasicLabel {...args}>{args.children || 'Label'}</BasicLabel>;
};

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'id',
};

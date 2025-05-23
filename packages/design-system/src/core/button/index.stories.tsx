import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicButton from './index';

export default {
  title: 'Core/BasicButton',
  component: BasicButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof BasicButton>;

const Template: StoryFn<typeof BasicButton> = (args) => {
  return <BasicButton {...args}>{args.children || 'Button'}</BasicButton>;
};

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  onClick: () => alert('Button clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'button',
  disabled: true,
};

export const AsLink = Template.bind({});
AsLink.args = {
  children: 'Go to Example',
  href: 'https://www.instagram.com/',
  target: '_blank',
};
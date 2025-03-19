import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { name: 'Início', href: '/' },
    { name: 'Jogos', href: '/about' },
    { name: 'Lojinha', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ],
};
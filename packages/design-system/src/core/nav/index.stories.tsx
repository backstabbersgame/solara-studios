import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicNav from './index';

export default {
  title: 'Core/BasicNav',
  components: BasicNav,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    mode: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} as Meta<typeof BasicNav>;

const Template: StoryFn<typeof BasicNav> = (args) => {
  return <BasicNav {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  links: [
    { name: 'Início', href: '/' },
    { name: 'Jogos', href: '/about' },
    { name: 'Lojinha', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ],
  mode: 'light',
  activeLink: '/',
};

export const Dark = Template.bind({});
Dark.args = {
  links: [
    { name: 'Início', href: '/' },
    { name: 'Jogos', href: '/about' },
    { name: 'Lojinha', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ],
  mode: 'dark',
  activeLink: '/',
};
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { Global, css } from '@storybook/theming';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Global
          styles={css`
            #storybook-root {
              padding: 0 !important;
              margin: 0 !important;
            }
          `}
        />
        <Story />
      </>
    ),
  ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

const basicLinks = [
  { name: 'Início', href: '/' },
  { name: 'Jogos', href: '/jogos' },
  { name: 'Lojinha', href: '/lojinha' },
  { name: 'Contato', href: '/contato' },
];

export const DesktopView: Story = {
  args: {
    links: basicLinks,
    onAccountClick: () => alert('Minha conta clicado'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const MobileView: Story = {
  args: {
    links: basicLinks,
    onMenuClick: () => alert('Modal mobile'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

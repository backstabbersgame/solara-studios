import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ModalMenu from './ModalMenu';
import Button from '../Button/Button';

export default {
  title: 'Components/ModalMenu',
  component: ModalMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ModalMenu>;

type Story = StoryObj<typeof ModalMenu>;

const Template: Story['render'] = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [activeItem, setActiveItem] = useState('inicio');
  const [openSubMenu, setOpenSubMenu] = useState(args.openSubMenu);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Menu</Button>

      <ModalMenu
        {...args}
        isOpen={isOpen}
        activeItem={activeItem}
        openSubMenu={openSubMenu}
        onClose={() => {
          setIsOpen(false);
          args.onClose?.();
        }}
        onItemSelect={(id) => {
          setActiveItem(id);
          args.onItemSelect?.(id);
        }}
        onToggleSubMenu={(id) => {
          setOpenSubMenu(id);
          args.onToggleSubMenu?.(id);
        }}
        onNavigate={(href) => {
          console.log(`Navegação simulada para: ${href}`);
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default = {
  render: Template,
};


export const WithFooterButtonAccount = {
  render: Template,
  args: {
    footerButton: {
      label: 'Minha conta',
      onClick: () => alert('Minha conta'),
    },
  },
};

export const WithFooterButtonLogout = {
  render: Template,
  args: {
    logoutButton: {
      label: 'Sair',
      onClick: () => alert('Logout clicado'),
    },
  },
};

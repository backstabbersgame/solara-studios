import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Chats,
  House,
  Rocket,
  ShoppingCart,
} from '@phosphor-icons/react/dist/ssr';
import Modal from './Modal';
import Button from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const ModalWithAccount: Story = {
  render: (args) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Início');

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div />;

    const handleClose = () => setMenuOpen(false);

    return (
      <>
        <Button
          onClick={() => setMenuOpen(true)}
          variant='cta'
        >
          Open
        </Button>

        {menuOpen && (
          <Modal
            {...args}
            title='Menu'
            isOpen={menuOpen}
            onClose={handleClose}
            items={[
              { icon: <House size={24} />, label: 'Início' },
              {
                icon: <Rocket size={24} />,
                label: 'Jogos',
                hasSubMenu: true,
                subMenuItems: [{ label: 'Jogo 1' }, { label: 'Jogo 2' }],
              },
              { icon: <ShoppingCart size={24} />, label: 'Lojinha' },
              { icon: <Chats size={24} />, label: 'Contato' },
            ]}
            activeItem={activeItem}
            onItemSelect={setActiveItem}
            footerButton={{
              label: 'Minha conta',
              onClick: () => {
                alert('Minha conta!');
              },
            }}
          />
        )}
      </>
    );
  },
};

export const ModalWithSignOut: Story = {
  render: (args) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Início');

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div />;

    const handleClose = () => setMenuOpen(false);

    return (
      <>
        <button onClick={() => setMenuOpen(true)}>Abrir Menu</button>

        {menuOpen && (
          <Modal
            {...args}
            title='Menu'
            isOpen={menuOpen}
            onClose={handleClose}
            items={[
              { icon: <House size={24} />, label: 'Início' },
              {
                icon: <Rocket size={24} />,
                label: 'Jogos',
                hasSubMenu: true,
                subMenuItems: [{ label: 'Jogo 1' }, { label: 'Jogo 2' }],
              },
              { icon: <ShoppingCart size={24} />, label: 'Lojinha' },
              { icon: <Chats size={24} />, label: 'Contato' },
            ]}
            activeItem={activeItem}
            onItemSelect={setActiveItem}
            logoutButton={{
              label: 'Sair',
              onClick: () => {
                alert('Sair!');
              },
            }}
          />
        )}
      </>
    );
  },
};

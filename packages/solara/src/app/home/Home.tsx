'use client';

import React, { useState } from 'react';
import Header from '@solara-studios/design-system/src/components/Header/Header';
import {
  House,
  Rocket,
  ShoppingCart,
  Chats,
} from '@phosphor-icons/react/dist/ssr';
import styles from './Home.module.scss';
import Hero from '../../components/Hero/Hero';
import Game from '../../components/Game/Game';
import About from 'src/components/About/About';

const links = [
  { name: 'Início', href: '/' },
  { name: 'Jogos', href: '/about' },
  { name: 'Lojinha', href: '/services' },
  { name: 'Contato', href: '/contact' },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Início');

  const handleMenuModal = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemSelect = (item: string) => {
    setActiveItem(item);
  };
  return (
    <>
      <div className={styles.stars}>
        <div className={styles['hero-section']}>
          <Header
            className={styles.header}
            links={links}
            modal={{
              showHeader: true,
              title: 'Menu',
              isOpen: menuOpen,
              onClose: handleMenuModal,
              items: [
                { icon: <House size={24} />, label: 'Início' },
                {
                  icon: <Rocket size={24} />,
                  label: 'Jogos',
                  hasSubMenu: true,
                  subMenuItems: [{ label: 'Jogo 1' }, { label: 'Jogo 2' }],
                },
                { icon: <ShoppingCart size={24} />, label: 'Lojinha' },
                { icon: <Chats size={24} />, label: 'Contato' },
              ],
              activeItem: activeItem,
              onItemSelect: handleItemSelect,
              footerButton: undefined,
              logoutButton: undefined,
            }}
            openMenuModal={menuOpen}
            handleMenuModal={handleMenuModal}
          />
          <Hero />
        </div>
      </div>
      <Game />
      <div className={styles.gradient}>
        <About />
        <div
          style={{
            backgroundColor: 'white',
            height: '500px',
            width: '100vw',
            zIndex: 0,
            marginTop: '-2px',
          }}
        ></div>
      </div>
    </>
  );
};
export default Home;

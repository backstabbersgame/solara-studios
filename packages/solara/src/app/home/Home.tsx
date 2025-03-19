'use client';
import React from 'react';
import styles from './Home.module.scss';
import Header from '@solara-studios/design-system/src/components/Header/Header';

const links = [
  { name: 'Início', href: '/' },
  { name: 'Jogos', href: '/about' },
  { name: 'Lojinha', href: '/services' },
  { name: 'Contato', href: '/contact' },
];

const Home = () => {
  return <Header links={links} />;
};

export default Home;

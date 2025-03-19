import React, { useState } from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { List } from '@phosphor-icons/react/dist/ssr';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  links: { name: string; href: string }[];
}

export const Header: React.FC<HeaderProps> = ({
  links,
  className,
  ...props
}) => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';

  return (
    <BasicHeader className={styles.header}>
      <Image
        width={isMobile ? 116 : 145}
        height={isMobile ? 32 : 40}
        src='/images/solara-horizontal-light.svg'
        alt='Solara Studios Logo with light colors'
      />

      {isMobile ? (
        <List
          size={24}
          className={styles.icon}
        />
      ) : (
        <div className={styles.side}>
          <BasicNav
            className={styles.nav}
            links={links}
            mode='light'
            activeLink='/'
          />
          <Button
            variant='cta'
            type='button'
          >
            Minha Conta
          </Button>
        </div>
      )}
    </BasicHeader>
  );
};

export default Header;

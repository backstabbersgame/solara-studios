import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  links: { name: string; href: string }[];
}

export const Header: React.FC<HeaderProps> = ({
  links,
  className,
  ...props
}) => {
  return (
    <BasicHeader className={styles.header}>
      <Image
        width={145}
        height={40}
        src='/images/solara-horizontal-light.svg'
        alt='Solara Studios Logo with light colors'
      />
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
    </BasicHeader>
  );
};

export default Header;

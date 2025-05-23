import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { List } from '@phosphor-icons/react/dist/ssr';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  links: { name: string; href: string }[];
  activeLink?: string;
  onLogoClick?: () => void;
  onMenuClick?: () => void;
  onLinkClick?: (href: string) => void;
  onAccountClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  links,
  activeLink,
  onLogoClick,
  onMenuClick,
  onLinkClick,
  onAccountClick,
}) => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';

  const handleLogoClick = () => {
    onLogoClick?.();
  };

  const handleMenuClick = () => {
    onMenuClick?.();
  };

  const handleAccountClick = () => {
    onAccountClick?.();
  };

  return (
    <BasicHeader className={styles.header}>
      <Image
        width={isMobile ? 116 : 145}
        height={isMobile ? 32 : 40}
        src='/images/solara-horizontal-light.svg'
        alt='Solara Studios Logo with light colors'
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />

      {isMobile ? (
        <button
          onClick={handleMenuClick}
          className={styles.list}
        >
          <List
            size={24}
            className={styles.icon}
          />
        </button>
      ) : (
        <div className={styles.side}>
          <BasicNav
            className={styles.nav}
            links={links}
            mode='light'
            activeLink={activeLink}
            onLinkClick={onLinkClick}
          />
          <Button
            variant='cta'
            type='button'
            onClick={handleAccountClick}
          >
            Minha Conta
          </Button>
        </div>
      )}
    </BasicHeader>
  );
};

export default Header;

import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { List } from '@phosphor-icons/react/dist/ssr';
import Modal, { ModalProps } from '../Modal/Modal';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  links: { name: string; href: string }[];
  modal: ModalProps;
  openMenuModal: boolean;
  handleMenuModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  links,
  modal,
  openMenuModal,
  handleMenuModal,
  className,
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
        <button
          onClick={handleMenuModal}
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
      {openMenuModal && (
        <Modal
          showHeader={modal.showHeader}
          title={modal.title}
          isOpen={modal.isOpen}
          onClose={handleMenuModal}
          items={modal.items}
          activeItem={modal.activeItem}
          onItemSelect={modal.onItemSelect}
          footerButton={modal.footerButton}
          logoutButton={modal.logoutButton}
        />
      )}
    </BasicHeader>
  );
};

export default Header;

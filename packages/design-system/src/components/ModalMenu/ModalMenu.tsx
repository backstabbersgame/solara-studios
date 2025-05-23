import React from 'react';
import {
  Chats,
  House,
  Rocket,
  ShoppingCart,
  CaretDown,
  CaretUp,
  SignOut,
  X,
} from '@phosphor-icons/react/dist/ssr';
import styles from './ModalMenu.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../Button/Button';

export type SubItem = {
  id: string;
  label: string;
  href: string;
};

export type ModalItem = {
  id: string;
  icon: React.ReactNode;
  label: string;
  href?: string;
  hasSubMenu?: boolean;
  subItems?: SubItem[];
};

export type ModalMenuProps = {
  showHeader?: boolean;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
  onItemSelect: (id: string) => void;
  footerButton?: { id?: string; label: string; onClick: () => void };
  logoutButton?: { id?: string; label: string; onClick: () => void };
  customItems?: ModalItem[];
  openSubMenu?: string;
  onToggleSubMenu?: (id?: string) => void;
  onNavigate?: (href: string) => void;
};

const ModalMenu: React.FC<ModalMenuProps> = ({
  showHeader = true,
  title = 'Menu',
  isOpen,
  onClose,
  activeItem,
  onItemSelect,
  footerButton,
  logoutButton,
  customItems,
  openSubMenu,
  onToggleSubMenu,
  onNavigate,
}) => {
  const defaultItems: ModalItem[] = [
    {
      id: 'inicio',
      label: 'Início',
      icon: <House size={24} />,
      href: '/',
    },
    {
      id: 'jogos',
      label: 'Jogos',
      icon: <Rocket size={24} />,
      href: '/jogos',
      hasSubMenu: true,
      subItems: [
        { id: 'jogo1', label: 'Jogo 1', href: '/jogos/jogo-1' },
        { id: 'jogo2', label: 'Jogo 2', href: '/jogos/jogo-2' },
        { id: 'jogo3', label: 'Jogo 3', href: '/jogos/jogo-3' },
      ],
    },
    {
      id: 'lojinha',
      label: 'Lojinha',
      icon: <ShoppingCart size={24} />,
      href: '/lojinha',
    },
    {
      id: 'contato',
      label: 'Contato',
      icon: <Chats size={24} />,
      href: '/contato',
    },
  ];

  const items = customItems || defaultItems;

  const handleNavigation = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  const isItemActive = (item: ModalItem) =>
    (item.id === activeItem && openSubMenu !== item.id) ||
    item.subItems?.some((subItem) => subItem.id === activeItem);

  const handleItemClick = (item: ModalItem) => {
    if (item.hasSubMenu) {
      onToggleSubMenu?.(openSubMenu === item.id ? undefined : item.id);
      onItemSelect(item.id);
    } else if (item.href) {
      handleNavigation(item.href);
      onItemSelect(item.id);
      onToggleSubMenu?.(undefined);
    }
  };

  const handleSubItemClick = (subItem: SubItem) => {
    handleNavigation(subItem.href);
    onItemSelect(subItem.id);
    onToggleSubMenu?.(undefined);
  };

  const handleButtonAction = (href: string, customAction?: () => void) => {
    if (customAction) {
      customAction();
    } else {
      handleNavigation(href);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className={styles.overlay}>
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ opacity: 0, x: '100%' }}
          >
            {showHeader && (
              <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button
                  onClick={onClose}
                  className={styles['button-close']}
                  aria-label='Fechar menu'
                >
                  <X
                    size={24}
                    className={styles.close}
                  />
                </button>
              </div>
            )}

            <nav className={styles.nav}>
              <ul className={styles.list}>
                {items.map((item) => (
                  <React.Fragment key={item.id}>
                    <li
                      className={`${styles.item} ${
                        isItemActive(item) ? styles.active : ''
                      } ${
                        item.hasSubMenu && openSubMenu === item.id
                          ? styles['submenu-open']
                          : ''
                      }`}
                    >
                      <button
                        className={`${styles['button-item']} ${
                          isItemActive(item) ? styles.active : ''
                        }`}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className={styles['icon-label']}>
                          {item.icon}
                          <span className={styles.label}>{item.label}</span>
                        </span>
                        {item.hasSubMenu && (
                          <span className={styles.arrow}>
                            {openSubMenu === item.id ? (
                              <CaretUp size={20} />
                            ) : (
                              <CaretDown size={20} />
                            )}
                          </span>
                        )}
                      </button>

                      {item.hasSubMenu && openSubMenu === item.id && (
                        <AnimatePresence>
                          <motion.ul
                            className={styles.submenu}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subItems?.map((subItem) => (
                              <li
                                key={subItem.id}
                                className={`${styles['submenu-item']} ${
                                  activeItem === subItem.id ? styles.active : ''
                                }`}
                                onClick={() => handleSubItemClick(subItem)}
                              >
                                {subItem.label}
                              </li>
                            ))}
                          </motion.ul>
                        </AnimatePresence>
                      )}
                    </li>
                    <hr className={styles.line} />
                  </React.Fragment>
                ))}
              </ul>
            </nav>
            <div className={styles['modal-footer']}>
              {footerButton && !logoutButton && (
                <Button
                  variant='cta'
                  className={styles['button-footer']}
                  id={footerButton.id}
                  onClick={() =>
                    handleButtonAction('/conta', footerButton.onClick)
                  }
                >
                  {footerButton.label}
                </Button>
              )}

              {logoutButton && !footerButton && (
                <button
                  className={styles['button-logout']}
                  id={logoutButton.id}
                  onClick={() =>
                    handleButtonAction('/logout', logoutButton.onClick)
                  }
                >
                  <SignOut size={20} /> {logoutButton.label}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default ModalMenu;

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CaretDown, CaretUp, SignOut, X } from '@phosphor-icons/react/dist/ssr';
import styles from './Modal.module.scss';
import Button from '../Button/Button';

export type SubMenuItem = {
  label: string;
};

export type ModalItem = {
  icon: React.ReactNode;
  label: string;
  hasSubMenu?: boolean;
  subMenuItems?: SubMenuItem[];
};

export type ModalProps = {
  showHeader: boolean;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  items: ModalItem[];
  activeItem: string | null;
  onItemSelect: (label: string) => void;
  footerButton?: { label: string; onClick: () => void };
  logoutButton?: { label: string; onClick: () => void };
};

export const Modal: React.FC<ModalProps> = ({
  showHeader = true,
  title,
  isOpen,
  onClose,
  items,
  activeItem,
  onItemSelect,
  footerButton,
  logoutButton,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className={styles.overlay}>
      <AnimatePresence mode='wait'>
        {isVisible && (
          <motion.div
            key='modal'
            layoutId='modal'
            className={styles.modal}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, type: 'easeInOut' }}
            exit={{ opacity: 0, x: 100 }}
          >
            {showHeader && (
              <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button
                  onClick={handleClose}
                  className={styles['button-close']}
                >
                  <X
                    size={24}
                    className={styles.close}
                  />
                </button>
              </div>
            )}
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.item}
                ${activeItem === item.label ? styles.active : ''}
                `}
                  onClick={() => {
                    if (item.hasSubMenu) {
                      toggleSubMenu(item.label);
                      onItemSelect(item.label);
                    } else {
                      onItemSelect(item.label);
                    }
                  }}
                >
                  <button className={styles['button-item']}>
                    <span
                      className={`${styles.span}
                ${activeItem === item.label ? styles.active : ''}
                `}
                    >
                      {item.icon} {item.label}
                    </span>
                    {item.hasSubMenu && (
                      <span>
                        {openSubMenu === item.label ? (
                          <CaretUp
                            size={24}
                            className={styles.arrow}
                          />
                        ) : (
                          <CaretDown
                            size={24}
                            className={styles.arrow}
                          />
                        )}
                      </span>
                    )}
                  </button>
                  <AnimatePresence>
                    {item.hasSubMenu && openSubMenu === item.label && (
                      <motion.ul
                        key='submenu'
                        className={styles.submenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0 }}
                      >
                        {item.subMenuItems?.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className={styles['submenu-item']}
                            onClick={() => onItemSelect(subItem.label)}
                          >
                            <a href='/'>{subItem.label}</a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  {index !== items.length - 1 && <hr className={styles.line} />}
                </li>
              ))}
            </ul>

            <div className={styles['modal-footer']}>
              {footerButton && (
                <Button
                  variant='cta'
                  children={footerButton.label}
                  className={styles['button-footer']}
                  onClick={footerButton.onClick}
                />
              )}

              {logoutButton && (
                <button
                  className={styles['button-logout']}
                  onClick={logoutButton.onClick}
                >
                  <SignOut size={24} /> {logoutButton.label}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
};

export default Modal;

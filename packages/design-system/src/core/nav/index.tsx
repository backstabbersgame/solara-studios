import React from 'react';
import styles from './index.module.scss';

interface BasicNavProps extends React.HTMLAttributes<HTMLElement> {
  links: { name: string; href: string }[];
  activeLink?: string;
  onLinkClick?: (href: string) => void;
  mode: 'light' | 'dark';
}

export const BasicNav: React.FC<BasicNavProps> = ({
  links,
  mode = 'light',
  activeLink,
  onLinkClick,
  className,
  ...props
}) => {
  return (
    <nav
      className={`${styles.nav} ${className || ''}`}
      {...props}
    >
      {links.map(({ name, href }) => {
        return (
          <a
            key={href}
            href={href}
            className={`${styles.link} ${
              activeLink === href ? styles.selected : ''
            } 
            ${mode === 'light' ? styles.light : styles.dark}`}
            onClick={() => onLinkClick?.(href)}
          >
            {name}
          </a>
        );
      })}
    </nav>
  );
};

export default BasicNav;

import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import BasicButton, { BasicButtonProps } from '../../core/button';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'cta';

export type ButtonProps = BasicButtonProps & {
  variant?: ButtonVariant;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  arrowLeft = false,
  arrowRight = false,
  href,
  className,
  children,
  ...props
}) => {
  return (
    <BasicButton
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
      href={href}
      {...props}
    >
      {arrowLeft && (
        <ArrowLeft
          size={24}
          className={clsx(styles.arrow)}
        />
      )}
      {children}
      {arrowRight && (
        <ArrowRight
          size={24}
          className={clsx(styles.arrow)}
        />
      )}
    </BasicButton>
  );
};

export default Button;

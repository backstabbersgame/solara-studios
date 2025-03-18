import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import BasicButton from '../../core/button';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'cta';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  arrowLeft?: boolean;
  arrowRight?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  arrowLeft = false,
  arrowRight = false,
  className,
  children,
  ...props
}) => {
  return (
    <BasicButton
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
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

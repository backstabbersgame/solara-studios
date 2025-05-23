import React from 'react';
import styles from './index.module.scss';

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    href?: string;
  };

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & {
    href?: string;
  };

export type BasicButtonProps = ButtonProps | AnchorProps;

export const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  const combinedClassName = `${styles.button} ${className || ''}`;

  if (href) {
    return (
      <a
        className={combinedClassName}
        {...props as AnchorProps}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={combinedClassName}
      {...props as ButtonProps}
    >
      {children}
    </button>
  );
};

export default BasicButton;

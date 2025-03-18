import React from 'react';
import styles from './index.module.scss';

type BasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;

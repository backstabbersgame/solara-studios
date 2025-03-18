import React from 'react';
import styles from './index.module.scss';

type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const BasicInput: React.FC<BasicInputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`${styles.input} ${className || ''}`}
      {...props}
    />
  );
};

export default BasicInput;

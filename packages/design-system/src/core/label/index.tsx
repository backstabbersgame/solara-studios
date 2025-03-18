import React from 'react';
import styles from './index.module.scss';

type BasicLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const BasicLabel: React.FC<BasicLabelProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label
      className={`${styles.label} ${className || ''}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default BasicLabel;

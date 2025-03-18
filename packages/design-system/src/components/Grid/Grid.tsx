import React, { HTMLAttributes } from 'react';
import styles from './Grid.module.scss';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Layout */
  layout?: 12 | 8 | 6 | 4;
  
}

const Grid = ({ children, layout, className, ...props }: GridProps) => {
  return (
    <div
      className={`${styles.grid} ${styles[`grid-${layout}`]}  ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;

import React, { forwardRef } from 'react';
import styles from './index.module.scss';

type BasicTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const BasicTextArea = forwardRef<
  HTMLTextAreaElement,
  BasicTextAreaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`${styles.textarea} ${className || ''}`}
      {...props}
    />
  );
});
export default BasicTextArea;

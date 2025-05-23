import React, { useEffect, useRef, useState } from 'react';
import styles from './InputTextArea.module.scss';
import BasicLabel from '../../core/label';
import BasicTextArea from '../../core/text-area';

interface InputTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  label,
  hint,
  error,
  required = false,
  id,
  className,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(0);
  const max = 500;

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const handleKeyUp = () => {
      setCharCount(textarea.value.length);
    };

    textarea.addEventListener('keyup', handleKeyUp);

    setCharCount(textarea.value.length);

    return () => {
      textarea.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className={styles.container}>
      {label && (
        <BasicLabel htmlFor={id}>
          {label}
          {required && <BasicLabel className={styles.required}></BasicLabel>}
        </BasicLabel>
      )}
      <div className={styles.field}>
        <BasicTextArea
          ref={textareaRef}
          id={id}
          required={required}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={`${styles.textarea}
          ${error ? styles['user-invalid'] : ''}
          ${className || ''}`}
          maxLength={max}
          {...props}
        />
      </div>
      <div className={styles['sub-field']}>
        {hint && (
          <span
            id={`${id}-hint`}
            className={styles.hint}
          >
            {hint}
          </span>
        )}
        {error && <span className={styles.error}>{error}</span>}
        <div className={styles.count}>
          <span className={styles.current}>{charCount}</span>
          <span className={styles.maximum}>/{max}</span>
        </div>
      </div>
    </div>
  );
};

export default InputTextArea;

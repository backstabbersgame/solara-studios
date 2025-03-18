import React, { SelectHTMLAttributes } from 'react';
import styles from './InputSelect.module.scss';

export interface InputTextProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Label */
  label?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Options */
  options?: { value: string; label: string }[];
  /** Hint */
  hint?: string;
  /** Error */
  error?: string;
  /** Disable/Enable input */
  isDisabled?: boolean;
  /** Disable/Enable required */
  isRequired?: boolean;
}

const InputSelect = ({
  label = 'Label',
  placeholder = 'Placeholder',
  options,
  hint = 'Hint',
  error,
  isDisabled = false,
  isRequired = false,
  ...props
}: InputTextProps) => {
  return (
    <div className='select-wrapper'>
      {label && (
        <label className={styles['select-label']}>
          {label}
          {isRequired && <strong> *</strong>}
        </label>
      )}
      <div className='select-container'>
        <div className='select-field-container'>
          <select
            className={`${styles['select-field']} ${
              error ? styles['user-invalid'] : ''
            }`}
            disabled={isDisabled}
            required={isRequired}
            aria-invalid={!!error}
            aria-describedby={label}
            {...props}
          >
            <option
              value={placeholder}
              disabled
              selected
            >
              {placeholder}
            </option>
            {options?.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error ? (
          <label className={styles['select-error']}>{error}</label>
        ) : (
          hint && <label className={styles['select-hint']}>{hint}</label>
        )}
      </div>
    </div>
  );
};

export default InputSelect;

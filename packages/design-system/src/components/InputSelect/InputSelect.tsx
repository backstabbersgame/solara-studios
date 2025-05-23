import React, { SelectHTMLAttributes, useState } from 'react';
import styles from './InputSelect.module.scss';
import BasicLabel from '../../core/label';
import BasicSelect from '../../core/select';

export interface InputTextProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string; disabled?: boolean }[];
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const InputSelect: React.FC<InputTextProps> = ({
  label,
  placeholder,
  options,
  hint,
  error,
  required = false,
  disabled = false,
  id,
  className,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <BasicLabel htmlFor={id}>
          {label}
          {required && <BasicLabel className={styles.required}></BasicLabel>}
        </BasicLabel>
      )}
      <div className={styles.field}>
        <BasicSelect
          id={id}
          options={options}
          disabled={disabled}
          {...props}
        />
      </div>

      {hint && (
        <span
          id={`${id}-hint`}
          className={styles.hint}
        >
          {hint}
        </span>
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );

  // return (
  //   <div className={styles['select-wrapper']}>
  //     {label && (
  //       <label className={styles['select-label']}>
  //         {label}
  //         {isRequired && <strong> *</strong>}
  //       </label>
  //     )}
  //     <div className={styles['select-container']}>
  //       <div className={styles['select-field-container']}>
  //         <select
  //           className={`${styles['select-field']} ${
  //             error ? styles['user-invalid'] : ''
  //           }
  //                ${className || ''}
  //             ${selected === '' ? styles['placeholder'] : ''}
  //           `}
  //           onChange={(e) => setSelected(e.target.value)}
  //           disabled={isDisabled}
  //           required={isRequired}
  //           aria-invalid={!!error}
  //           aria-describedby={label}
  //           defaultValue=''
  //           {...props}
  //         >
  //           <option
  //             value={''}
  //             disabled
  //           >
  //             {placeholder}
  //           </option>
  //           {options?.map((option) => (
  //             <option
  //               key={option.value}
  //               value={option.value}
  //             >
  //               {option.label}
  //             </option>
  //           ))}
  //         </select>
  //         {error ? (
  //           <label className={styles['select-error']}>{error}</label>
  //         ) : (
  //           hint && <label className={styles['select-hint']}>{hint}</label>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default InputSelect;

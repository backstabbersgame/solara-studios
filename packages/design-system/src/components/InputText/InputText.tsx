import React from 'react';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import styles from './InputText.module.scss';
import BasicLabel from '../../core/label';
import BasicInput from '../../core/input';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  showIcon?: boolean;
}

export const InputText: React.FC<InputProps> = ({
  label,
  hint,
  error,
  required = false,
  showIcon = false,
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
        <BasicInput
          id={id}
          required={required}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={`${styles.input}
          ${error ? styles['user-invalid'] : ''}
          ${className || ''}`}
          {...props}
        />
        {showIcon && (
          <CheckCircle
            size={16}
            className={styles.icon}
          />
        )}
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
};

export default InputText;

// return (
//     // <div className={styles['input-wrapper']}>
//     //   {label && (
//     //     <BasicLabel htmlFor={label}>
//     //       {label}
//     //       {required && <strong> *</strong>}
//     //     </BasicLabel>
//     //   )}

//       <BasicInput
//         required={required}
//         aria-describedby={label}
//         className={`${styles.input} ${className || ''}`}
//         {...props}
//       />
//       // {showIcon && (
//       //   <CheckCircle
//       //     size={16}
//       //     className={styles['input-icon']}
//       //   />
//       // )}

//       {/* <input
//             required={required}
//             aria-describedby={label}
//             className={`${className || ''}
//             //  ${error ? styles['user-invalid'] : ''}`}
//             {...props}
//           />
//            */}
//       // {error && <span className={styles.errorMessage}>{error}</span>}
//       {/* {hasError ? (
//           <label className={styles['input-error']}>
//             {errors[id]?.message?.toString()}
//           </label>
//         ) : (
//           hint && <label className={styles['input-hint']}>{hint}</label>
//         )} */}
//     // </div>
//   );

import React from 'react';
import styles from './index.module.scss';

type BasicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  isMultiple?: boolean;
};

export const BasicSelect: React.FC<BasicSelectProps> = ({
  options,
  isMultiple = false,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.arrow} ${isMultiple ? 'hide-arrow' : ''}`}>
      <select
        className={`${styles.select} ${className || ''}`}
        multiple={isMultiple}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BasicSelect;

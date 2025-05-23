import React, { useState } from 'react';
import styles from './index.module.scss';

type BasicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
  multiple?: boolean;
};

export const BasicSelect: React.FC<BasicSelectProps> = ({
  options,
  placeholder,
  multiple = false,
  className,
  ...props
}) => {
  const [selected, setSelected] = useState('');

  return (
    <select
      className={`${styles.select}  ${selected === '' ? styles.placeholder : ''}
        ${multiple ? styles.hide : ''}
        ${className || ''}`}
      multiple={multiple}
      onChange={(e) => setSelected(e.target.value)}
      defaultValue=''
      {...props}
    >
      {!multiple && placeholder && (
        <option
          value={''}
          disabled
        >
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default BasicSelect;

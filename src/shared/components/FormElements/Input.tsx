import React from 'react';
import InputProps from '../../../interfaces/interfaces';

import './Input.css';

export const Input: React.FC<InputProps> = ({
  id,
  label,
  className,
  elementType,
  type,
  placeholder,
  rows,
  onChange,
  value,
}) => {
  const element =
    elementType === 'input' ? (
      <input
        className={className}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    ) : (
      <textarea
        className={className}
        id={id}
        rows={rows || 3}
        onChange={onChange}
        value={value}
      />
    );

  return (
    <div className='form'>
      <label htmlFor={id}>{label}</label>
      {element}
    </div>
  );
};

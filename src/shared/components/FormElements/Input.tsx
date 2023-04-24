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
  onKeyUp,
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
        onKeyUp={onKeyUp}
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

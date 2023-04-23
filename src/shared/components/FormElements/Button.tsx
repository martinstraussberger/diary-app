import React from 'react';
import { ButtonProps } from '../../../interfaces/interfaces';

export const Button: React.FC<ButtonProps> = ({
  style,
  className,
  onClick,
  type,
  disabled,
  icon,
  id,
  label,
}) => {
  return (
    <div style={style}>
      <button className={className} onClick={onClick} type={type} disabled={disabled}>
        {icon}
      </button>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

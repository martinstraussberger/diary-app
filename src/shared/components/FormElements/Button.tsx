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
  ariaLabel,
}) => {
  return (
    <div style={style}>
      <button
        className={className}
        onClick={onClick}
        type={type}
        aria-label={ariaLabel}
        disabled={disabled}
      >
        {icon}
      </button>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

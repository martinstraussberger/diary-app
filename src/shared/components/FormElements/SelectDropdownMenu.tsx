import React, { useEffect, useRef, useState } from 'react';
import { SelectDropdownMenuProps, Option } from '../../../interfaces/interfaces';

import './SelectDropdownMenu.css';

export const SelectDropdownMenu: React.FC<SelectDropdownMenuProps<Option>> = ({
  options,
  onChange,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    // cleanup
    return () => {
      setSelectedOption(null);
    };
  }, []);

  return (
    <div className='select-dropdown-menu' ref={dropdownRef}>
      <div className='select-dropdown-menu-label'>{label}</div>
      <div className='select-dropdown-menu-selected' onClick={handleToggleDropdown}>
        {selectedOption
          ? selectedOption.value + ' ' + selectedOption.label
          : 'Select an option'}
      </div>
      {isOpen && (
        <div className='select-dropdown-menu-options'>
          {options.map((option: Option) => (
            <div
              key={option.value}
              className='select-dropdown-menu-option'
              onClick={() => handleOptionClick(option)}
            >
              {option.value} {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

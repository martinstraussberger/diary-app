import React, { useState } from 'react';
import { SelectDropdownMenuProps, Option } from '../../../interfaces/interfaces';

import './SelectDropdownMenu.css';

export const SelectDropdownMenu: React.FC<SelectDropdownMenuProps<Option>> = ({
  options,
  onChange,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
    // TODO: change stage of selected mood once submitted
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='select-dropdown-menu'>
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
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import React, { CSSProperties } from 'react';

/* Icons */
export interface DropdownIconProps {
  onClick: () => void;
}

/* Entry */
export interface DiaryEntryProps {
  id: string;
  title: string;
  selectedOption: string;
  date: Date;
  content: string;
  tag: string;
  index: number;
}

export interface EntryListProps {
  list: DiaryEntryProps[];
}

export interface ContextProps {
  displayList: boolean;
  handleDropdown: () => void;
}

export interface ListContextProps {
  list: DiaryEntryProps[];
  setList: React.Dispatch<React.SetStateAction<DiaryEntryProps[]>>;
}

/* SelectDropdown */
export interface Option {
  value: string;
  label: string;
}

export interface SelectDropdownMenuProps<T> {
  options: T[];
  onChange: (selectedOption: T) => void;
  label: string;
  value: string;
}

export interface Option {
  value: string;
  label: string;
}

/* Input */
export default interface InputProps {
  id: string;
  label?: string;
  className?: string;
  elementType: 'input' | 'textarea';
  type?: string;
  placeholder?: string;
  rows?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
}

/* Button */
export interface ButtonProps {
  style?: CSSProperties;
  className?: string;
  type: 'submit' | 'reset' | 'button';
  disabled: boolean;
  id?: string;
  label?: string;
  onClick?: () => void;
  icon: JSX.Element;
}

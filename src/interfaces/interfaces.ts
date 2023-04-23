import React, { CSSProperties } from 'react';

/* Icons */
export interface DropdownIconProps {
  onClick: () => void;
}

/* Entry */
export interface DiaryEntryProps extends DiaryEntryListProps {
  customElement: JSX.Element;
  icon: string;
}

/* EntryList */
export interface DiaryEntryListProps {
  id: string;
  title: string;
  selectedOption: string;
  date: Date;
  content: string;
  tag: string;
  index: number;
}
export interface EntryListProps {
  list: DiaryEntryListProps[];
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
  value: T | null;
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
  ariaLabel: string;
  disabled: boolean;
  id?: string;
  label?: string;
  onClick?: () => void;
  icon?: JSX.Element;
  text?: string | JSX.Element;
}
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
  selectedTags: string[];
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
  onKeyUp?: () => void;
}

/* TagInput */
export interface TagInputProps {
  onChange: (tags: string[]) => void;
  value: string[];
  reset: boolean;
}

export interface TagInputState {
  tags: string[];
  inputValue: string;
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

/* Show Entries */
export interface ShowEntriesProps {
  list: DiaryEntryListProps[];
  setList: React.Dispatch<React.SetStateAction<DiaryEntryListProps[]>>;
}

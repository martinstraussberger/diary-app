import { DiaryEntryListProps, SelectDropdownMenuProps, Option } from './interfaces';

export interface EntryListContextProps {
  displayList: boolean;
  handleDropdown: () => void;
}
export interface EntryContextProps {
  list: DiaryEntryListProps[];
  setList: React.Dispatch<React.SetStateAction<DiaryEntryListProps[]>>;
}

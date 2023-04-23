import { DiaryEntryListProps } from './interfaces';

export interface ContextProps {
  displayList: boolean;
  handleDropdown: () => void;
}
export interface ListContextProps {
  list: DiaryEntryListProps[];
  setList: React.Dispatch<React.SetStateAction<DiaryEntryListProps[]>>;
}

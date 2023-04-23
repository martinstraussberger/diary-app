import React from 'react';
import { ContextProps } from '../../interfaces/interfaces';

export const EntryListContext = React.createContext<ContextProps>({
  displayList: false,
  handleDropdown: () => {},
});

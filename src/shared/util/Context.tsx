import React from 'react';
import { ContextProps, ListContextProps } from '../../interfaces/interfaces';

export const ListContext = React.createContext<ListContextProps>({
  list: [],
  setList: () => {},
});

export const EntryListContext = React.createContext<ContextProps>({
  displayList: false,
  handleDropdown: () => {},
});

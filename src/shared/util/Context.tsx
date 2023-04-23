import React from 'react';
import { ListContextProps, ContextProps } from '../../interfaces/ContextInterfaces';

export const ListContext = React.createContext<ListContextProps>({
  list: [],
  setList: () => {},
});

export const EntryListContext = React.createContext<ContextProps>({
  displayList: false,
  handleDropdown: () => {},
});

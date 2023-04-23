import React from 'react';
import {
  EntryListContextProps,
  EntryContextProps,
} from '../../interfaces/ContextInterfaces';

export const ListContext = React.createContext<EntryContextProps>({
  list: [],
  setList: () => {},
});

export const EntryListContext = React.createContext<EntryListContextProps>({
  displayList: false,
  handleDropdown: () => {},
});

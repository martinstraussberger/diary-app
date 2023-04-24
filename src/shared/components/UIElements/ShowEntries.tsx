import React, { useState } from 'react';
import { EntryList } from '../../../components/Entry/EntryList';
import { ListContext } from '../../util/Context';
import { Button } from '../FormElements/Button';
import { DropdownIconDown, DropdownIconUp } from './utils/Icons';
import { ShowEntriesProps } from '../../../interfaces/interfaces';

export const ShowEntries: React.FC<ShowEntriesProps> = ({ list, setList }) => {
  const [displayList, setDisplayList] = useState<boolean>(false);

  return (
    <ListContext.Provider value={{ list, setList }}>
      <section className='grid-item __item-2'>
        <label htmlFor='dropdown-icon'>Show all Diary Entries</label>
        <div className='dropdown-icon'>
          {!displayList ? (
            <div>
              <Button
                className='circle-button'
                style={{ display: 'flex', justifyContent: 'center', padding: '12px' }}
                type='submit'
                ariaLabel='dropdown-closed-button'
                disabled={false}
                icon={<DropdownIconUp onClick={() => setDisplayList(!displayList)} />}
              />

              <EntryList list={list} />
            </div>
          ) : (
            <Button
              className='circle-button'
              style={{ display: 'flex', justifyContent: 'center', padding: '12px' }}
              type='submit'
              disabled={false}
              ariaLabel='dropdown-open-button'
              icon={<DropdownIconDown onClick={() => setDisplayList(!displayList)} />}
            />
          )}
        </div>
      </section>
    </ListContext.Provider>
  );
};

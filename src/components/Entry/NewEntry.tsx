import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DiaryEntryProps, ListContext } from '../../interfaces/interfaces';

import { EntryList } from './EntryList';
import { Input } from '../../shared/components/FormElements/Input';
import { Button } from '../../shared/components/FormElements/Button';
import {
  AddIcon,
  DropdownIconDown,
  DropdownIconUp,
} from '../../shared/components/UIElements/utils/Icons';

import { SelectDropdownMenu } from '../../shared/components/FormElements/SelectDropdownMenu';
import { moodycons } from '../../shared/util/moodiconList';

import './NewEntry.css';
import '../../shared/components/FormElements/Button.css';

const id = uuid();

export const NewEntry: React.FC = () => {
  const [displayList, setDisplayList] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any | null>(null);

  const handleDropdown = () => {
    setDisplayList(!displayList);
  };

  const [list, setList] = useState<DiaryEntryProps[]>([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTitle('');
      setSelectedOption('');
      setContent('');
      setTag('');
      setList([
        ...list,
        {
          id,
          title,
          selectedOption: selectedOption
            ? `${selectedOption.value}${selectedOption.label}`
            : '',
          date: new Date(date),
          content,
          tag,
          index: list.length,
        },
      ]);
    },
    [title, selectedOption, content]
  );

  return (
    <>
      <ListContext.Provider value={{ list, setList }}>
        <form className='entry-form' action='' onSubmit={onSubmit}>
          <Input
            className='entry-input'
            id='title'
            label='Title: '
            elementType='input'
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <SelectDropdownMenu
            options={moodycons}
            onChange={setSelectedOption}
            label='Select your Moodycon'
            value={selectedOption}
          />

          <Input
            id='date'
            elementType='input'
            label='Date:'
            type='date'
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <Input
            className='entry-input'
            id='content'
            elementType='textarea'
            label='Note:'
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />

          <Input
            id='tags'
            elementType='input'
            label='Tags:'
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          />
          <Button
            className='circle-button'
            style={{ display: 'flex', justifyContent: 'center', padding: '12px' }}
            type='submit'
            disabled={false}
            icon={<AddIcon />}
          />
        </form>
        <section className='grid-item-2'>
          <label htmlFor='dropdown-icon'>Show all Diary Entries</label>
          <div className='dropdown-icon'>
            {!displayList ? (
              <div style={{ textAlign: 'center' }}>
                <Button
                  className='circle-button'
                  style={{ display: 'flex', justifyContent: 'center', padding: '12px' }}
                  type='submit'
                  disabled={false}
                  icon={<DropdownIconUp onClick={() => handleDropdown()} />}
                />

                <EntryList list={list} />
              </div>
            ) : (
              <Button
                className='circle-button'
                style={{ display: 'flex', justifyContent: 'center', padding: '12px' }}
                type='submit'
                disabled={false}
                icon={<DropdownIconDown onClick={() => handleDropdown()} />}
              />
            )}
          </div>
        </section>
      </ListContext.Provider>
    </>
  );
};

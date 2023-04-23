import React, { useCallback, useMemo, useState } from 'react';
import { DiaryEntryListProps, Option } from '../../interfaces/interfaces';

import { id } from '../../shared/util/Constants';
import { EntryList } from './EntryList';
import { ListContext } from '../../shared/util/Context';
import { Input } from '../../shared/components/FormElements/Input';
import { Button } from '../../shared/components/FormElements/Button';
import {
  DropdownIconDown,
  DropdownIconUp,
} from '../../shared/components/UIElements/utils/Icons';
import { SelectDropdownMenu } from '../../shared/components/FormElements/SelectDropdownMenu';
import { MoodIcon } from '../../shared/util/moodiconList';

import './NewEntry.css';
import '../../shared/components/FormElements/Button.css';

export const NewEntry: React.FC = () => {
  const [displayList, setDisplayList] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleDropdown = () => {
    setDisplayList(!displayList);
  };

  const [list, setList] = useState<DiaryEntryListProps[]>([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const listMemoProvider = useMemo(() => ({ list, setList }), [list, setList]);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTitle('');
      setContent('');
      setSelectedOption(null);
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

    [title, selectedOption, content, date, tag, list]
  );

  return (
    <>
      <ListContext.Provider value={listMemoProvider}>
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
            options={MoodIcon}
            onChange={setSelectedOption}
            label='What is your mood today?'
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
            id={`${'content' + id}`}
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
            ariaLabel='add-button'
            disabled={false}
            text={<h3>Save</h3>}
          />
        </form>
        <section className='grid-item __item-2'>
          <label htmlFor='dropdown-icon'>Show all Diary Entries</label>
          <div className='dropdown-icon'>
            {!displayList ? (
              <div style={{ textAlign: 'center' }}>
                <Button
                  className='circle-button'
                  style={{ display: 'flex', justifyContent: 'center', padding: '12px' }}
                  type='submit'
                  ariaLabel='dropdown-closed-button'
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
                ariaLabel='dropdown-open-button'
                icon={<DropdownIconDown onClick={() => handleDropdown()} />}
              />
            )}
          </div>
        </section>
      </ListContext.Provider>
    </>
  );
};

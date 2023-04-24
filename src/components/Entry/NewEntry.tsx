import React, { useCallback, useMemo, useState } from 'react';
import { DiaryEntryListProps, Option } from '../../interfaces/interfaces';

import { id } from '../../shared/util/Constants';
import { ListContext } from '../../shared/util/Context';
import { Input } from '../../shared/components/FormElements/Input';
import { Button } from '../../shared/components/FormElements/Button';

import { SelectDropdownMenu } from '../../shared/components/FormElements/SelectDropdownMenu';
import { MoodIcon } from '../../shared/util/moodiconList';

import './NewEntry.css';
import '../../shared/components/FormElements/Button.css';
import { TagInput } from '../../shared/components/FormElements/TagsInput';
import { ShowEntries } from '../../shared/components/UIElements/ShowEntries';

export const NewEntry: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [list, setList] = useState<DiaryEntryListProps[]>([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [resetTags, setResetTags] = useState<boolean>(false);

  const listMemoProvider = useMemo(() => ({ list, setList }), [list, setList]);

  const handleTagChange = (tags: string[]) => {
    setSelectedTags(tags);
    setResetTags(false);
  };

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const newEntry = {
        id,
        title,
        selectedOption: selectedOption
          ? `${selectedOption.value}${selectedOption.label}`
          : '',
        date: new Date(date),
        content,
        selectedTags: selectedTags[0] ? selectedTags : [''],

        index: list.length,
      };
      setList([...list, newEntry]);
      setTitle('');
      setContent('');
      setSelectedOption(null);
      setSelectedTags([]);
      setResetTags(true);
    },
    [title, selectedOption, content, date, selectedTags, list]
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
          {resetTags ? (
            <TagInput reset={true} onChange={handleTagChange} value={[]} />
          ) : (
            <TagInput onChange={handleTagChange} value={selectedTags} reset={false} />
          )}

          <Button
            className='circle-button'
            style={{ display: 'flex', justifyContent: 'center', padding: '12px' }}
            type='submit'
            ariaLabel='add-button'
            disabled={false}
            text={<h3>Save</h3>}
          />
        </form>
        <ShowEntries list={list} setList={setList} />
      </ListContext.Provider>
    </>
  );
};

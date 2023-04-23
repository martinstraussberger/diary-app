import React, { useState, useMemo, useContext, useCallback } from 'react';
import { DiaryEntryListProps, EntryListProps } from '../../interfaces/interfaces';
import { DiaryEntry } from './DiaryEntry';
import { Input } from '../../shared/components/FormElements/Input';
import { Button } from '../../shared/components/FormElements/Button';
import { TrashIcon } from '../../shared/components/UIElements/utils/Icons';
import { EntryListContext, ListContext } from '../../shared/util/Context';
import { id, options } from '../../shared/util/Constants';

import './EntryList.css';

export const EntryList: React.FC<EntryListProps> = ({ list }) => {
  const { setList } = useContext(ListContext);
  const [displayList, setDisplayList] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState('');

  const filteredList = useMemo(() => {
    return list.filter((entry) =>
      entry.tag.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [list, filterValue]);

  const sortedList = useMemo(() => {
    return filteredList
      .filter((entry) => entry.date)
      .sort((a: DiaryEntryListProps, b: DiaryEntryListProps) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [filteredList]);

  const groupedByWeek = useMemo(() => {
    const groups: { [key: string]: DiaryEntryListProps[] } = {};

    sortedList.forEach((entry) => {
      const date = new Date(entry.date);
      const weekStart = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - date.getDay()
      );
      const weekEnd = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - date.getDay() + 6
      );
      const weekLabel = `${weekStart.toLocaleDateString(
        'de-DE',
        options
      )} - ${weekEnd.toLocaleDateString('de-DE', options)}`;
      if (!groups[weekLabel]) {
        groups[weekLabel] = [];
      }
      groups[weekLabel].push(entry);
    });
    return groups;
  }, [sortedList]);

  const handleDropdown = useCallback(() => {
    setDisplayList(!displayList);
  }, [displayList]);

  const dropdownListMemoProvider = useMemo(
    () => ({
      displayList,
      handleDropdown,
    }),
    [displayList, handleDropdown]
  );

  const handleDelete = (id: string) => {
    const entryIndex = list.findIndex((entry) => entry.id === id);
    if (entryIndex !== -1) {
      const updatedList = [...list];
      updatedList.splice(entryIndex, 1);
      setList(updatedList);
    }
  };

  return (
    <EntryListContext.Provider value={dropdownListMemoProvider}>
      <section className='grid-item __item-3'>
        <Input
          className='entry-input'
          id={`${'content' + id}`}
          elementType='input'
          placeholder='Filter by Tag'
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
        />
        {Object.entries(groupedByWeek).map(([weekLabel, entries]: any) => (
          <div key={weekLabel}>
            <h3>{weekLabel}</h3>
            <ul className='list'>
              {entries.map(
                ({
                  id,
                  title,
                  selectedOption,
                  date,
                  content,
                  tag,
                  index,
                }: DiaryEntryListProps) => (
                  <DiaryEntry
                    key={index}
                    title={title}
                    icon={selectedOption}
                    date={date}
                    content={content}
                    tag={tag}
                    customElement={
                      <Button
                        className='delete-button'
                        style={{
                          justifyContent: 'center',
                        }}
                        type='button'
                        ariaLabel='delete-button'
                        onClick={() => handleDelete(id)}
                        disabled={false}
                        icon={<TrashIcon />}
                      />
                    }
                    id={''}
                    selectedOption={''}
                    index={0}
                  />
                )
              )}
            </ul>
          </div>
        ))}
      </section>
    </EntryListContext.Provider>
  );
};

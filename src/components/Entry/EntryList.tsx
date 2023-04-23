import React, { useState, useMemo, useContext } from 'react';
import {
  DiaryEntryProps,
  EntryListProps,
  ListContext,
} from '../../interfaces/interfaces';
import { DiaryEntry } from './DiaryEntry';
import { Input } from '../../shared/components/FormElements/Input';
import { Button } from '../../shared/components/FormElements/Button';
import { TrashIcon } from '../../shared/components/UIElements/utils/Icons';
import { EntryListContext } from '../../shared/util/CreateContext';
import { options } from '../../shared/util/Constants';

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
      .sort((a: DiaryEntryProps, b: DiaryEntryProps) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [filteredList]);

  const groupedByWeek = useMemo(() => {
    const groups: { [key: string]: DiaryEntryProps[] } = {};

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
      )}} - ${weekEnd.toLocaleDateString('de-DE', options)}}`;
      if (!groups[weekLabel]) {
        groups[weekLabel] = [];
      }
      groups[weekLabel].push(entry);
    });
    return groups;
  }, [sortedList]);

  const handleDropdown = () => {
    setDisplayList(!displayList);
  };

  const handleDelete = (id: string) => {
    const entryIndex = list.findIndex((entry) => entry.id === id);
    if (entryIndex !== -1) {
      const updatedList = [...list];
      updatedList.splice(entryIndex, 1);
      setList(updatedList);
    }
  };

  return (
    <EntryListContext.Provider value={{ displayList, handleDropdown }}>
      <section className='grid-item-2'>
        <Input
          className='entry-input'
          id='content'
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
                  setSelectedOption,
                  date,
                  content,
                  tag,
                  index,
                }: DiaryEntryProps) => (
                  <DiaryEntry
                    key={index}
                    title={title}
                    icon={setSelectedOption}
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
                        onClick={() => handleDelete(id)}
                        disabled={false}
                        icon={<TrashIcon />}
                      />
                    }
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

import React from 'react';
import { DiaryEntryProps } from '../../interfaces/interfaces';

import './DiaryEntry.css';
import '../../shared/components/FormElements/TagInput.css';

export const DiaryEntry: React.FC<DiaryEntryProps> = ({
  title,
  content,
  selectedTags,
  date,
  customElement,
  icon,
}) => {
  return (
    <div className='entry-row'>
      <div className='entry-row-header'>
        <p style={{ textAlign: 'right' }}>{date.toLocaleDateString('de-DE')}</p>
        <h3>{title}</h3>
        {icon && <h5> I am {icon}</h5>}
      </div>
      <div className='entry-row-content'>
        <p>{content}</p>
      </div>
      <div className='entry-row-tags'>
        <p>
          <b>Tags</b>
        </p>
        <div className='selected-tags'>
          {selectedTags
            ? selectedTags.map((tag, index) => (
                <span key={index} className='tag-input__tag __tags-entry '>
                  {tag}
                </span>
              ))
            : null}
        </div>
      </div>
      <div className='entry-row-trash'>{customElement}</div>
    </div>
  );
};

import React from 'react';
import { DiaryEntryProps } from '../../interfaces/interfaces';

import './DiaryEntry.css';

export const DiaryEntry: React.FC<DiaryEntryProps> = ({
  title,
  content,
  tag,
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
        <p>{tag}</p>
      </div>
      <div className='entry-row-trash'>{customElement}</div>
    </div>
  );
};

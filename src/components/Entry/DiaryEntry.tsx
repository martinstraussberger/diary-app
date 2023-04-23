import React from 'react';
import './DiaryEntry.css';

interface DiaryEntry {
  title: string;
  content: string;
  tag: string;
  date: Date;
  customElement: JSX.Element;
  icon: any;
}

export const DiaryEntry: React.FC<DiaryEntry> = ({
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
        <h4>{icon}</h4>
        <h3>{title}</h3>
        <p>{date.toLocaleDateString('de-DE')}</p>
      </div>
      <div className='entry-row-content'>
        <p>Note:</p>
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

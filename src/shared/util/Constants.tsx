import { v4 as uuid } from 'uuid';
export const options: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  month: 'long',
  day: 'numeric',
};

export const id = uuid();

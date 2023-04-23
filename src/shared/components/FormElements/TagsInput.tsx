import { useState, useCallback } from 'react';

interface TagInputProps {
  onChange: (tags: string[]) => void;
  value: string[];
}

interface TagInputState {
  tags: string[];
  inputValue: string;
}

export const TagInput: React.FC<TagInputProps> = ({ onChange, value }) => {
  const [state, setState] = useState<TagInputState>({
    tags: value,
    inputValue: '',
  });

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === ' ') {
        event.preventDefault();
        const newTag = state.inputValue.trim();
        if (newTag !== '' && !state.tags.includes(newTag)) {
          const newTags = [...state.tags, newTag];
          setState({
            tags: newTags,
            inputValue: '',
          });
          onChange(newTags);
        }
      } else if (event.key === 'Backspace' && state.inputValue === '') {
        const newTags = state.tags.slice(0, -1);
        setState({
          tags: newTags,
          inputValue: '',
        });
        onChange(newTags);
      }
    },
    [onChange, state]
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        inputValue: event.target.value,
      });
    },
    [state]
  );

  return (
    <div className='tag-input'>
      <div>
        {state.tags.map((tag, index) => (
          <span key={index} className='tag-input__tag __field'>
            {tag}{' '}
            <button
              className='tag-input__tag-remove'
              onClick={() => {
                const newTags = state.tags.filter((_, i) => i !== index);
                setState({
                  tags: newTags,
                  inputValue: '',
                });
                onChange(newTags);
              }}
            >
              X
            </button>
          </span>
        ))}
      </div>
      <input
        type='text'
        className='tag-input__input'
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={state.inputValue}
      />
    </div>
  );
};

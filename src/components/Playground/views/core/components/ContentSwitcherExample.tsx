import { ContentSwitcher } from '@devoinc/genesys-ui';
import * as React from 'react';

const options = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

export const ContentSwitcherExample = () => {
  const [selection, setSelection] = React.useState('second');
  return (
    <ContentSwitcher size='md'>
      {options.map((option) => (
        <ContentSwitcher.Item
          icon='gi-heart_full'
          key={option}
          state={option === selection ? 'selected' : 'enabled'}
          onClick={() => {
            setSelection(option);
          }}
        >
          {option}
        </ContentSwitcher.Item>
      ))}
    </ContentSwitcher>
  );
};

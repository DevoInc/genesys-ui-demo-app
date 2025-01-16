import * as React from 'react';
import { SelectControl } from '@devoinc/genesys-ui';

export const Select2ControlExample = () => {
  return (
    <SelectControl
      aria-label="select-control"
      id={'select-control'}
      size={'lg'}
      selectWidth="xl"
      options={[
        { value: 1, label: 'Option one' },
        { value: 2, label: 'Option two' },
      ]}
    />
  );
};

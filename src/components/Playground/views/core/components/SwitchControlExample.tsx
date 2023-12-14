import * as React from 'react';
import { SwitchControl } from '@devoinc/genesys-ui';
import { useSchema } from '../../../../../providers/ThemeProvider';

export const SwitchControlExample = () => {
  const { toggleSchema, schema } = useSchema();
  return (
    <SwitchControl
      aria-label='switch-control'
      onChange={toggleSchema}
      checked={schema === 'dark'}
    />
  );
};

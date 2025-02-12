import * as React from 'react';
import { Partitions, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const PartitionsExample = () => (
  <VFlex>
    <DefaultHeading>Partitions</DefaultHeading>
    <Partitions
      data={[
        { value: 0.4, color: 'error', tooltip: 'Error: 40%' },
        { value: 0.2, color: 'help', tooltip: 'Help: 20%' },
        { value: 0.2, color: 'warning', tooltip: 'Warning: 20%' },
        { value: 0.1, color: 'success', tooltip: 'Success: 10%' },
        { value: 0.1, color: '#B474DD', tooltip: 'Undefined: 10%' },
      ]}
    />
  </VFlex>
);

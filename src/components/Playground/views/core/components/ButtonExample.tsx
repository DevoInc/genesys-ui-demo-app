import * as React from 'react';
import { GIAlerts } from '@devoinc/genesys-icons';
import { Button, VFlex, Wrap } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const ButtonExample = () => (
  <VFlex>
    <DefaultHeading>Button</DefaultHeading>
    <Wrap hSpacing="cmp-sm" alignItems="center">
      <Button colorScheme="accent-high">Primary action</Button>
      <Button colorScheme="accent">Secondary action</Button>
      <Button>Common action</Button>
      <Button icon={<GIAlerts />}>With icon</Button>
      <Button hasDropdown>Dropdown</Button>
      <Button colorScheme="error">Error status</Button>
      <Button colorScheme="success">Success status</Button>
      <Button state="loading">Loading...</Button>
    </Wrap>
  </VFlex>
);

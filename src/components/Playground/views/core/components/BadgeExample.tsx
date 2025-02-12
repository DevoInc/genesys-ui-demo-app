import * as React from 'react';
import { Badge, HFlex, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';
import { GIAlerts } from '@devoinc/genesys-icons';

export const BadgeExample = () => (
  <VFlex>
    <DefaultHeading>Badge</DefaultHeading>
    <HFlex>
      <Badge colorScheme="info" />
      <Badge colorScheme="info" text="12" />
      <Badge colorScheme="info" icon={<GIAlerts />} />
    </HFlex>
  </VFlex>
);

import * as React from 'react';
import { HFlex, Tag, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';
import { GIAlerts } from '@devoinc/genesys-icons';

export const TagExample = () => (
  <VFlex>
    <DefaultHeading>Tag</DefaultHeading>
    <HFlex>
      <Tag colorScheme="data-teal" text="Tag content" />
      <Tag icon={<GIAlerts />} colorScheme="data-teal" text="Tag with icon" />
    </HFlex>
  </VFlex>
);

import * as React from 'react';
import { HFlex, KeyValue, VFlex } from '@devoinc/genesys-ui';
import { GIUserProfileAvatarManMale } from '@devoinc/genesys-icons';
import { DefaultHeading } from '../../../components';

export const KeyValueExample = () => (
  <VFlex>
    <DefaultHeading>Key-Value</DefaultHeading>
    <HFlex>
      <KeyValue keyContent="Weekly new users" valueContent="2440" />
      <KeyValue
        supportingVisual={<GIUserProfileAvatarManMale />}
        keyContent="Weekly new users"
        valueContent="2440"
      />
      <KeyValue
        format="row"
        supportingVisual={<GIUserProfileAvatarManMale />}
        keyContent="Weekly new users"
        valueContent="2440"
      />
      <KeyValue
        format="column"
        supportingVisual={<GIUserProfileAvatarManMale />}
        keyContent="Weekly new users"
        valueContent="2440"
      />
    </HFlex>
  </VFlex>
);

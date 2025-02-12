import * as React from 'react';
import { VFlex, Avatar } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const AvatarExample = () => (
  <VFlex childrenFitFullWidth={false}>
    <DefaultHeading>Avatar</DefaultHeading>
    <Avatar name="Rick Sanchez" imageSrc="https://i.pravatar.cc/300" />
  </VFlex>
);

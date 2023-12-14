import * as React from 'react';
import { Avatar } from '@devoinc/genesys-ui';

export const AvatarExample = () => {
  return (
    <Avatar
      size='md'
      name='Rick Sanchez'
      variant='circle'
      imageSrc='https://i.pravatar.cc/300'
    />
  );
};

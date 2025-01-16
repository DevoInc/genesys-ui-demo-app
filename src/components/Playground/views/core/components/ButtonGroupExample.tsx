import * as React from 'react';
import {
  GICustomDate,
  GIHeartFull,
  GIPinBookmark,
  GIReloadRefreshUpdate,
} from '@devoinc/genesys-icons';
import { Button, ButtonGroup, IconButton } from '@devoinc/genesys-ui';

export const ButtonGroupExample = () => {
  return (
    <ButtonGroup>
      <IconButton icon={<GICustomDate />} />
      <IconButton icon={<GIReloadRefreshUpdate />} />
      <IconButton icon={<GIPinBookmark />} />
      <Button icon={<GIHeartFull />}>Add to favorites</Button>
    </ButtonGroup>
  );
};

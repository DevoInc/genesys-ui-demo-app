import * as React from 'react';
import { Button, ButtonGroup, IconButton } from '@devoinc/genesys-ui';

export const ButtonGroupExample = () => {
  return (
    <ButtonGroup>
      <IconButton icon='gi-custom_date' />
      <IconButton icon='gi-reload_refresh_update' />
      <IconButton icon='gi-pin_bookmark' />
      <Button icon='gi-heart_full'>Add to favorites</Button>
    </ButtonGroup>
  );
};

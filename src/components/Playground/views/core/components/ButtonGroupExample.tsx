import { Button, ButtonGroup, IconButton } from '@devoinc/genesys-ui';

export const ButtonGroupExample = () => {
  return (
    <ButtonGroup>
      <IconButton icon='custom_date' />
      <IconButton icon='reload_refresh_update' />
      <IconButton icon='pin_bookmark_solid' />
      <Button icon='heart_full'>Add to favorites</Button>
    </ButtonGroup>
  );
};

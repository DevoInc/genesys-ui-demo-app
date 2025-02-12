import * as React from 'react';
import { Button, Popover, Menu, Badge, VFlex } from '@devoinc/genesys-ui';
import { GIGridView, GITextBulletsList } from '@devoinc/genesys-icons';
import { DefaultHeading } from '../../../components';

export const PopoverExample = () => {
  const [selection, setSelection] = React.useState('');
  return (
    <VFlex childrenFitFullWidth={false}>
      <DefaultHeading>Popover</DefaultHeading>
      <Popover id="popover-example" placement="bottom-start">
        {({ toggle, ref, isOpened }) => (
          <Button
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
          >
            TriggerElement
          </Button>
        )}
        <Popover.Panel>
          <Menu>
            <Menu.Item
              label="List view"
              appendContent={
                <Badge size="sm" text="NEW" colorScheme="success" />
              }
              shortcut="⌘ '"
              icon={<GITextBulletsList />}
              name="view mode"
              selectionScheme="single"
              state={selection === 'list' ? 'selected' : 'enabled'}
              onChange={() => {
                setSelection('list');
              }}
            />
            <Menu.Item
              label="Grid view"
              icon={<GIGridView />}
              shortcut="^ G"
              name="view mode"
              selectionScheme="single"
              state={selection === 'grid' ? 'selected' : 'enabled'}
              onChange={() => {
                setSelection('grid');
              }}
            />
          </Menu>
        </Popover.Panel>
      </Popover>
    </VFlex>
  );
};

import * as React from 'react';
import { Button, Popover, Menu, Tag } from '@devoinc/genesys-ui';

export const PopoverExample = () => {
  return (
    <Popover id="popover-example" placement="bottom-start">
      {({ toggle, ref, isOpened, setOpened }) => (
        <Button
          aria-expanded={isOpened}
          aria-haspopup={true}
          onClick={toggle}
          onMouseOver={() => setOpened(true)}
          ref={ref}
        >
          TriggerElement
        </Button>
      )}
      <Popover.Panel>
        <Menu>
          <Menu.Item
            label="Pixel grid"
            state="featured"
            appendContent={<Tag text="NEW" colorScheme="success" />}
            shortcut="⌘ '"
            selectionScheme="multiple"
            onChange={() => {
              window.console.log('checkbox has changed');
            }}
          />
          <Menu.Item
            label="layout grid"
            state="featured"
            shortcut="^ G"
            selectionScheme="multiple"
            onChange={() => {
              window.console.log('Layout Grids Selected!');
            }}
          />
        </Menu>
      </Popover.Panel>
    </Popover>
  );
};

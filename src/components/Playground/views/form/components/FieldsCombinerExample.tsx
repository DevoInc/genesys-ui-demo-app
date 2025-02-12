import * as React from 'react';
import { FieldsCombiner, Menu, Popover, VFlex } from '@devoinc/genesys-ui';
import {
  GIAngleDown,
  GICalendarMonthDayPlannerEvents,
  GIUserProfileAvatarManMale,
  GIUserProfileSuccessfulCheckVerified,
} from '@devoinc/genesys-icons';

export const FieldsCombinerExample = () => (
  <VFlex>
    <FieldsCombiner
      id="fc-example"
      label="Select and Button to right with status"
    >
      <FieldsCombiner.Select
        id="test-2"
        options={[
          {
            label: 'JS',
            value: 1,
          },
          {
            label: 'Typescript',
            value: 2,
          },
        ]}
      />
      <FieldsCombiner.Button colorScheme="accent">Send</FieldsCombiner.Button>
    </FieldsCombiner>
    <FieldsCombiner id="fc-example-2" label="Input and Button to right">
      <FieldsCombiner.Input
        aria-label="Label for story"
        id="test-3"
        onChange={() => {}}
      />
      <FieldsCombiner.Button colorScheme="accent">Send</FieldsCombiner.Button>
    </FieldsCombiner>
    <FieldsCombiner id="fc-example-3" label="Button and Dropdown to right">
      <FieldsCombiner.Button colorScheme={'accent'}>Send</FieldsCombiner.Button>
      <Popover id="popover" placement="bottom-start">
        {({ isOpened, ref, toggle }) => (
          <FieldsCombiner.IconButton
            aria-controls="popover"
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
            tooltip="Open options"
            colorScheme={'accent'}
            icon={<GIAngleDown />}
          />
        )}
        <Popover.Panel>
          <Menu>
            <Menu.Item
              label="Schedule send"
              icon={<GICalendarMonthDayPlannerEvents />}
            />
            <Menu.Item
              label="Send to all the domain users"
              icon={<GIUserProfileSuccessfulCheckVerified />}
            />
            <Menu.Item
              label="Send to all"
              icon={<GIUserProfileAvatarManMale />}
            />
          </Menu>
        </Popover.Panel>
      </Popover>
    </FieldsCombiner>
  </VFlex>
);

import * as React from 'react';

import { GITimeZone } from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../constants';

import {
  Banner,
  Button,
  Checkbox,
  Form,
  HFlex,
  Panel,
  Popover,
  SelectControl,
  Typography,
} from '@devoinc/genesys-ui';

import { AppBarUserOptionsProps } from '../AppBarUserOptions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TimeZoneProps extends AppBarUserOptionsProps {}

export const TimeZone: React.FC<TimeZoneProps> = ({ compact }) => {
  const [isAuto, setIsAuto] = React.useState(true);
  return (
    <Popover
      id="appbar-time-zone-dropdown"
      placement="bottom-end"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [
              0,
              compact
                ? USER_OPTIONS_POPOVER_OFFSET_COMPACT + 2
                : USER_OPTIONS_POPOVER_OFFSET,
            ],
          },
        },
      ]}
    >
      {({ toggle, ref, isOpened }) => (
        <Button
          colorScheme="quiet"
          aria-controls="appbar-time-zone-dropdown"
          aria-haspopup="true"
          aria-expanded={isOpened}
          size={compact ? 'xs' : 'lg'}
          state={isOpened ? 'expanded' : undefined}
          onClick={toggle}
          ref={ref}
        >
          <HFlex spacing="cmp-xxs">
            <GITimeZone
              size={compact ? '1.8rem' : '2rem'}
              style={{ position: 'relative' }}
            />
            <Typography.Caption size={compact ? 'xs' : 'sm'} colorScheme="weak">
              UTC
            </Typography.Caption>
            <Typography.Caption
              size={compact ? 'xs' : 'sm'}
              colorScheme="stronger"
            >
              +1:00
            </Typography.Caption>
          </HFlex>
        </Button>
      )}
      {({ setOpened }) => (
        <Panel
          elevation="activated"
          width="60rem"
          id="appbar-time-zone-dropdown"
          footerSettings={{
            actions: [
              <Button
                key="timezone-btn-1"
                colorScheme="quiet"
                onClick={() => setOpened(false)}
              >
                Cancel
              </Button>,
              <Button
                key="timezone-btn-2"
                colorScheme="accent"
                onClick={() => setOpened(false)}
              >
                Save changes
              </Button>,
            ],
            renderContent: (
              <HFlex justifyContent="space-between" flex="1">
                <Checkbox
                  label="Apply changes only to this session"
                  id="timezone-apply"
                  onChange={() => setIsAuto(!isAuto)}
                />
                <HFlex justifyContent="flex-end">
                  <Button
                    key="timezone-btn-1"
                    colorScheme="quiet"
                    onClick={() => setOpened(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    key="timezone-btn-2"
                    colorScheme="accent"
                    onClick={() => setOpened(false)}
                  >
                    Save changes
                  </Button>
                </HFlex>
              </HFlex>
            ),
          }}
          headerSettings={{
            bordered: true,
          }}
          closeSettings={{
            onClick: () => setOpened(false),
            tooltip: 'Close this panel',
          }}
          size="sm"
          title="Time zone configuration"
        >
          <Panel.Body>
            <Form aria-label="Time zone configuration form">
              <Checkbox
                label="Set timezone automatically"
                id="timezone-auto"
                defaultChecked
                onChange={() => setIsAuto(!isAuto)}
              />
              <SelectControl
                aria-label="Select the timezone"
                menuAppendToBody
                isDisabled={isAuto}
                options={[
                  { value: 1, label: 'Option one' },
                  { value: 2, label: 'Option two' },
                  { value: 4, label: 'Option four' },
                  { value: 5, label: 'Option five' },
                  { value: 6, label: 'Option six' },
                  { value: 7, label: 'Option seven' },
                ]}
                placeholder="CET - Europe/Madrid (UTC + 02:00)"
              />
              <img
                src="/timezone-map.png"
                alt="Timezone map"
                style={{ width: '100%', height: 'auto' }}
              />
              <Banner
                title="Your current timezone"
                content="CET - Europe/Madrid, ES - 12:28:20 (+02:00)"
                status="info"
              />
            </Form>
          </Panel.Body>
          <Panel.Footer />
        </Panel>
      )}
    </Popover>
  );
};

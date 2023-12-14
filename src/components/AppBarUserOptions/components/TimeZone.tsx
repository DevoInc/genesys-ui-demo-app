import * as React from 'react';

import { GITimeZone } from '@devoinc/genesys-icons';

import {
  Banner,
  Button,
  Form,
  HFlex,
  Panel,
  Popper,
  SelectControl,
  Typography,
} from '@devoinc/genesys-ui';

import { Checkbox } from '@devoinc/genesys-ui-form';

export const TimeZone = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isAuto, setIsAuto] = React.useState(true);
  return (
    <Popper
      placement="bottom-end"
      offset={[0, 0]}
      visible={isVisible}
      setIsVisible={setIsVisible}
      trigger={
        <Button
          colorScheme="quiet"
          size="lg"
          aria-controls="appbar-time-zone-dropdown"
          aria-haspopup="true"
          aria-expanded={isVisible}
        >
          <HFlex spacing="cmp-xxs">
            <GITimeZone size="2rem" style={{ position: 'relative' }} />
            <Typography.Caption colorScheme="weak">UTC</Typography.Caption>
            <Typography.Caption colorScheme="stronger">
              +1:00
            </Typography.Caption>
          </HFlex>
        </Button>
      }
    >
      <Panel
        elevation="activated"
        width="60rem"
        id="appbar-time-zone-dropdown"
        footerSettings={{
          actions: [
            <Button
              key="timezone-btn-1"
              colorScheme="quiet"
              onClick={() => setIsVisible(false)}
            >
              Cancel
            </Button>,
            <Button
              key="timezone-btn-2"
              colorScheme="accent"
              onClick={() => setIsVisible(false)}
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
                  onClick={() => setIsVisible(false)}
                >
                  Cancel
                </Button>
                <Button
                  key="timezone-btn-2"
                  colorScheme="accent"
                  onClick={() => setIsVisible(false)}
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
          onClick: () => setIsVisible(false),
          tooltip: 'Close this panel',
        }}
        size="sm"
        title="Time zone configuration"
      >
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
      </Panel>
    </Popper>
  );
};

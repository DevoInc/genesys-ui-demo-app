import * as React from 'react';
import { Button, Menu, Popover, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const MenuExample = () => {
  const popoverId = 'nested';
  return (
    <VFlex childrenFitFullWidth={false}>
      <DefaultHeading>Menu</DefaultHeading>
      <Menu cmpRole="nav">
        <Menu.Heading>Platform</Menu.Heading>
        <Menu.Item
          href="https://www.devo.com/applications/cloud-siem/"
          label="Security Operations"
          target="_blank"
        />
        <Menu.Item
          href="https://www.devo.com/applications/soar/"
          label="SOAR"
          target="_blank"
        />
        <Menu.Item
          href="https://www.devo.com/applications/behavior-analytics/"
          label="Behavior Analytics"
          target="_blank"
        />
        <Menu.Item
          href="https://www.devo.com/applications/service-operations/"
          label="Service Operations"
          target="_blank"
        />
        <Menu.Item
          href="https://www.devo.com/applications/deeptrace/"
          label="DeepTrace"
          target="_blank"
        />
        <Menu.Heading>Use cases</Menu.Heading>
        <Menu.Item
          href="https://www.devo.com/solutions/security/"
          label="Security"
          target="_blank"
        />
        <Menu.Item
          href="https://www.devo.com/solutions/it/"
          label="IT Operations"
          target="_blank"
        />
      </Menu>
      <Popover id={popoverId} placement="bottom-start">
        {({ toggle, ref, isOpened }) => (
          <Button
            aria-controls={popoverId}
            aria-expanded={isOpened}
            aria-haspopup={true}
            onClick={toggle}
            ref={ref}
            state={isOpened ? 'expanded' : undefined}
          >
            Show dropdown
          </Button>
        )}
        <Popover.Panel>
          <Menu>
            <Menu.Item label="Option 1" />
            <Menu.Item label="Option 2" />
            <Menu.Item label="Option 3" />
            <Popover
              id={`${popoverId}-1`}
              appendTo={null}
              modifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [0, 4],
                  },
                },
              ]}
            >
              {({ toggle, ref, isOpened }) => (
                <Menu.Item
                  aria-controls={`${popoverId}-1`}
                  aria-expanded={isOpened}
                  aria-haspopup={true}
                  expandable
                  label="Option 4"
                  onClick={toggle}
                  ref={ref}
                  state={isOpened ? 'expanded' : undefined}
                />
              )}
              <Popover.Panel>
                <Menu>
                  <Menu.Item label="Option 4.1" />
                  <Menu.Item label="Option 4.2" />
                  <Menu.Item label="Option 4.3" />
                  <Popover
                    id={`${popoverId}-2`}
                    appendTo={null}
                    modifiers={[
                      {
                        name: 'offset',
                        options: {
                          offset: [0, 4],
                        },
                      },
                    ]}
                  >
                    {({ toggle, ref, isOpened }) => (
                      <Menu.Item
                        aria-controls={`${popoverId}-2`}
                        aria-expanded={isOpened}
                        aria-haspopup={true}
                        expandable
                        label="Option 4.3.1"
                        onClick={toggle}
                        ref={ref}
                        state={isOpened ? 'expanded' : undefined}
                      />
                    )}
                    <Popover.Panel as={'ul'}>
                      <Menu>
                        <Menu.Item label="Option 4.3.1" />
                        <Menu.Item label="Option 4.3.3" />
                        <Menu.Item label="Option 4.3.2" />
                      </Menu>
                    </Popover.Panel>
                  </Popover>
                </Menu>
              </Popover.Panel>
            </Popover>
          </Menu>
        </Popover.Panel>
      </Popover>
    </VFlex>
  );
};

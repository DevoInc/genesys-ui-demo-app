import * as React from 'react';

import {
  GIAlerts,
  GIFlow,
  GIGaugeDashboardFullFuel,
  GISearchFindZoom,
} from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../constants';

import {
  Box,
  Chip,
  ChipGroup,
  Flex,
  IconButton,
  InputControl,
  Menu,
  Panel,
  Popover,
  Tabs,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

import { AppBarUserOptionsProps } from '../AppBarUserOptions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchProps extends AppBarUserOptionsProps {}

export const Search: React.FC<SearchProps> = ({ compact }) => {
  const [isSearching, setIsSearching] = React.useState(false);
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Popover
      id="appbar-search-dropdown"
      placement="bottom-end"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [
              0,
              compact
                ? USER_OPTIONS_POPOVER_OFFSET_COMPACT
                : USER_OPTIONS_POPOVER_OFFSET,
            ],
          },
        },
      ]}
    >
      {({ toggle, ref, isOpened }) => (
        <IconButton
          size={compact ? 'sm' : 'lg'}
          colorScheme="quiet"
          circular
          aria-controls="appbar-search-dropdown"
          aria-haspopup="true"
          aria-expanded={isOpened}
          ref={ref as React.Ref<HTMLButtonElement>}
          onClick={toggle}
          state={isOpened ? 'expanded' : undefined}
        >
          <GISearchFindZoom
            size={compact ? '1.8rem' : '2rem'}
            style={{ position: 'relative' }}
          />
        </IconButton>
      )}
      {({ setOpened }) => (
        <Popover.Panel width="48rem">
          <Panel.Header
            title="Search Devo"
            closeSettings={{
              onClick: () => setOpened?.(false),
              tooltip: 'Close this panel',
            }}
            size="sm"
          />
          <Panel.Header as="div" size="sm" bordered={isSearching}>
            <Flex flex="1" marginBottom="cmp-xxs">
              <InputControl
                aria-label="Search content in the whole app"
                type="search"
                placeholder="Find Activeboards, Data searches, Flows, Web sections, etc."
                onChange={() => setIsSearching(true)}
                onBlur={() => setIsSearching(false)}
              />
            </Flex>
          </Panel.Header>
          {!isSearching && (
            <Panel.Header as="div" size="sm" removeSpace>
              <Box flex="1" marginBottom="cmp-xs">
                <Tabs contained>
                  <Tabs.List
                    activeTabIndex={activeTab}
                    ref={tabsRef as React.Ref<HTMLDivElement>}
                  >
                    <Tabs.Item
                      label="Recent content"
                      onClick={() => setActiveTab(0)}
                      size="sm"
                      state={activeTab === 0 ? 'selected' : undefined}
                    />
                    <Tabs.Item
                      label="Recently browsed pages"
                      onClick={() => setActiveTab(1)}
                      size="sm"
                      state={activeTab === 1 ? 'selected' : undefined}
                    />
                  </Tabs.List>
                </Tabs>
              </Box>
            </Panel.Header>
          )}
          <Panel.Body size="sm">
            {isSearching ? (
              <>
                <VFlex spacing="cmp-xs" marginBottom="cmp-sm">
                  <Typography.Heading size="h5">
                    Results
                    <Typography.Paragraph as="span" colorScheme="weak">
                      {' '}
                      (2)
                    </Typography.Paragraph>
                  </Typography.Heading>
                  <ChipGroup legend="Search categories" hideLegend>
                    <Chip size="xs">All</Chip>
                    <Chip size="xs">Activeboards</Chip>
                    <Chip size="xs">Alerts</Chip>
                    <Chip size="xs">Data searches</Chip>
                    <Chip size="xs">Flows</Chip>
                    <Chip size="xs" state="disabled">
                      Apps & Tools
                    </Chip>
                    <Chip size="xs">Web sections</Chip>
                  </ChipGroup>
                </VFlex>
                <Menu cmpRole="nav">
                  <Menu.Item
                    href="#"
                    icon={<GIGaugeDashboardFullFuel />}
                    label="siem.logtrust.alerts.dispatched"
                    appendContent={
                      <Flex.Item marginLeft="auto">
                        <Typography.Caption colorScheme="weak" size="xs">
                          Activeboard
                        </Typography.Caption>
                      </Flex.Item>
                    }
                  />
                  <Menu.Item
                    href="#"
                    icon={<GISearchFindZoom />}
                    label="siem.logtrust.web.activityAll"
                    appendContent={
                      <Flex.Item marginLeft="auto">
                        <Typography.Caption colorScheme="weak" size="xs">
                          Data search
                        </Typography.Caption>
                      </Flex.Item>
                    }
                  />
                </Menu>
              </>
            ) : (
              <Menu cmpRole="nav">
                <Menu.Item
                  href="#"
                  icon={<GIGaugeDashboardFullFuel />}
                  label="siem.logtrust.alerts.dispatched"
                  appendContent={
                    <Flex.Item marginLeft="auto">
                      <Typography.Caption colorScheme="weak" size="xs">
                        Activeboard
                      </Typography.Caption>
                    </Flex.Item>
                  }
                />
                <Menu.Item
                  href="#"
                  icon={<GIGaugeDashboardFullFuel />}
                  label="DnsAnomalies_by10IP"
                  appendContent={
                    <Flex.Item marginLeft="auto">
                      <Typography.Caption colorScheme="weak" size="xs">
                        Activeboard
                      </Typography.Caption>
                    </Flex.Item>
                  }
                />
                <Menu.Item
                  href="#"
                  icon={<GIFlow />}
                  label="DevoManagedQuery"
                  appendContent={
                    <Flex.Item marginLeft="auto">
                      <Typography.Caption colorScheme="weak" size="xs">
                        Flow
                      </Typography.Caption>
                    </Flex.Item>
                  }
                />
                <Menu.Item
                  href="#"
                  icon={<GIGaugeDashboardFullFuel />}
                  label="Loxcope router"
                  appendContent={
                    <Flex.Item marginLeft="auto">
                      <Typography.Caption colorScheme="weak" size="xs">
                        Activeboard
                      </Typography.Caption>
                    </Flex.Item>
                  }
                />
                <Menu.Item
                  href="#"
                  icon={<GISearchFindZoom />}
                  label="siem.logtrust.web.activityAll"
                  appendContent={
                    <Flex.Item marginLeft="auto">
                      <Typography.Caption colorScheme="weak" size="xs">
                        Search
                      </Typography.Caption>
                    </Flex.Item>
                  }
                />
                <Menu.Item
                  href="#"
                  icon={<GIAlerts />}
                  label="Apache too many byte range requests"
                  appendContent={
                    <Flex.Item marginLeft="auto">
                      <Typography.Caption colorScheme="weak" size="xs">
                        Alert
                      </Typography.Caption>
                    </Flex.Item>
                  }
                />
              </Menu>
            )}
          </Panel.Body>
        </Popover.Panel>
      )}
    </Popover>
  );
};

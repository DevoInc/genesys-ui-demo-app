import * as React from 'react';

import { GISearchFindZoom } from '@devoinc/genesys-icons';

import {
  Chip,
  ChipGroup,
  Flex,
  IconButton,
  InputControl,
  Menu,
  Panel,
  Popper,
  Tabs,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

export const Search = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Popper
      placement="bottom-end"
      offset={[0, 0]}
      visible={isVisible}
      setIsVisible={setIsVisible}
      trigger={
        <IconButton
          size="lg"
          colorScheme="quiet"
          circular
          aria-controls="appbar-search-dropdown"
          aria-haspopup="true"
          aria-expanded={isVisible}
        >
          <GISearchFindZoom size="2rem" style={{ position: 'relative' }} />
        </IconButton>
      }
    >
      <Panel.Container
        elevation="activated"
        width="48rem"
        id="appbar-search-dropdown"
      >
        <Panel.Header
          title="Search Devo"
          closeSettings={{
            onClick: () => setIsVisible(false),
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
            <Tabs contained flex="1" marginBottom="cmp-xs">
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
            </Tabs>
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
                  icon="gi-gauge_dashboard_full_fuel"
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
                  icon="gi-search_find_zoom"
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
                icon="gi-gauge_dashboard_full_fuel"
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
                icon="gi-gauge_dashboard_full_fuel"
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
                icon="gi-flow"
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
                icon="gi-gauge_dashboard_full_fuel"
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
                icon="gi-search_find_zoom"
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
                icon="gi-alerts"
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
      </Panel.Container>
    </Popper>
  );
};

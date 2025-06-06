import * as React from 'react';

import { GISearchFindZoom } from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../../constants';

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

import { AppBarUserOptionsProps } from '../../AppBarUserOptions';
import { SearchItem } from './SearchItem';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchProps extends AppBarUserOptionsProps {}

export const Search: React.FC<SearchProps> = ({ compact }) => {
  const [isSearching, setIsSearching] = React.useState(false);
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  const label = 'Search within Devo';
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
          tooltip={label}
        >
          <GISearchFindZoom
            size={compact ? '1.8rem' : '2rem'}
            style={{ position: 'relative' }}
          />
        </IconButton>
      )}
      {({ setOpened }) => (
        <Popover.Panel width="48rem" padding="0">
          <Panel.Header
            title={label}
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
                autoFocus
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
                  <SearchItem
                    type="activeboard"
                    label="siem.logtrust.alerts.dispatched"
                  />
                  <SearchItem
                    type="search"
                    label="siem.logtrust.web.activityAll"
                  />
                </Menu>
              </>
            ) : activeTab === 0 ? (
              <Menu cmpRole="nav">
                <SearchItem
                  type="activeboard"
                  label="siem.logtrust.alerts.dispatched"
                />
                <SearchItem type="activeboard" label="DnsAnomalies_by10IP" />
                <SearchItem type="flow" label="DevoManagedQuery" />
                <SearchItem type="activeboard" label="Loxcope router" />
                <SearchItem
                  type="search"
                  label="siem.logtrust.web.activityAll"
                />
                <SearchItem
                  type="alert"
                  label="Apache too many byte range requests"
                />
              </Menu>
            ) : (
              <Menu cmpRole="nav">
                <SearchItem type="page" label="Search" />
                <SearchItem type="page" label="Flow" />
                <SearchItem type="page" label="Preferences" />
                <SearchItem type="page" label="Users" />
              </Menu>
            )}
          </Panel.Body>
        </Popover.Panel>
      )}
    </Popover>
  );
};

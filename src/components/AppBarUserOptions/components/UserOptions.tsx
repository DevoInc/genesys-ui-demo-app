import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { useSchema } from '../../../providers/ThemeProvider';

import { GIExitLogoutDoorEmergencyOutside } from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_AVATAR_OFFSET,
  USER_OPTIONS_POPOVER_NESTED_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../constants';

import {
  Avatar,
  Badge,
  Box,
  Flex,
  HFlex,
  Icon,
  IconButton,
  InputControl,
  Menu,
  Panel,
  Popover,
  Tag,
  TagProps,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';
import { AppBarUserOptionsProps } from '../AppBarUserOptions';

export interface PriorityProps {
  name: 'Low' | 'Normal' | 'High' | 'Maximum';
  colorScheme: TagProps['colorScheme'];
}

const domainsConfig: {
  name: string;
  status: 'success' | 'warning' | 'error';
}[] = [
  {
    name: 'datacontroltest',
    status: 'success',
  },
  {
    name: 'demo@customer',
    status: 'success',
  },
  {
    name: 'best_whishes_poc',
    status: 'success',
  },
  {
    name: 'customer@customer',
    status: 'warning',
  },
  {
    name: 'who_knows_poc',
    status: 'success',
  },
  {
    name: 'waffleiron',
    status: 'success',
  },
  {
    name: 'test@asap-spain',
    status: 'success',
  },
];

const STATUS_ICON_MAP = {
  error: 'gi-error_warning_danger_stop_filled',
  success: 'gi-check_ok_rounded_filled',
  warning: 'gi-attention_error_alert_caution_filled',
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserOptionsProps extends AppBarUserOptionsProps {}

export const UserOptions: React.FC<UserOptionsProps> = ({ compact }) => {
  const theme = useTheme();
  const [isSearching, setIsSearching] = React.useState(false);
  const [priority, setPriority] = React.useState<PriorityProps>({
    name: 'Normal',
    colorScheme: 'success',
  });
  const [currentDomain, setCurrentDomain] = React.useState('waffleiron');
  const { schema, toggleSchema } = useSchema();
  return (
    <Popover
      id="user-options-popover"
      placement="bottom-end"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [
              0,
              compact
                ? USER_OPTIONS_POPOVER_OFFSET_COMPACT
                : USER_OPTIONS_POPOVER_AVATAR_OFFSET,
            ],
          },
        },
      ]}
    >
      {({ toggle, ref, isOpened }) => (
        <IconButton
          aria-expanded={isOpened}
          aria-controls="appbar-user-dropdown"
          aria-haspopup="true"
          hasDropdown
          colorScheme="quiet"
          onClick={toggle}
          ref={ref}
          size={compact ? 'xs' : 'md'}
          styles={css`
            width: auto;
            height: auto;
            padding: ${compact ? '0.2rem' : '0.4rem'};
          `}
          tooltip="Open user and domain options"
        >
          <Flex alignItems="center" marginRight="cmp-xxs">
            <Avatar
              size={compact ? 'xxxs' : 'sm'}
              name="Rick Sanchez"
              variant="circle"
              imageSrc={compact ? undefined : 'https://i.pravatar.cc/300'}
              bordered={!compact}
              colorScheme={compact ? 'info' : undefined}
            />
          </Flex>
        </IconButton>
      )}
      <Popover.Panel width="34rem" padding="cmp-sm">
        <Menu>
          <Menu.Item state="readonly" unlimitedHeight>
            <HFlex alignItems="flex-start">
              <Avatar
                size="lg"
                name="Rick Sanchez"
                variant="circle"
                imageSrc="https://i.pravatar.cc/300"
              />
              <VFlex spacing="0">
                <Typography.Heading size="h6" gutterBottom="cmp-xxs">
                  Rick Sanchez
                </Typography.Heading>
                <Typography.Paragraph gutterBottom="0">
                  rick.sanchez@devo.com
                </Typography.Paragraph>
                <HFlex spacing="cmp-xxs" marginBottom="cmp-xs">
                  <Icon
                    iconId="gi-diamond_prize_award_jewellery_ring"
                    size="xxs"
                    colorScheme="weaker"
                  />
                  <Typography.Paragraph gutterBottom="0" colorScheme="weaker">
                    admin
                  </Typography.Paragraph>
                </HFlex>
              </VFlex>
            </HFlex>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item
            label="User profile"
            icon="gi-user_profile_avatar_man_male"
          />
          <Menu.Item label="Preferences" icon="gi-settings_gear_preferences" />
          <Popover
            appendTo={null}
            id="user-options-popover__theme"
            placement="left-start"
            modifiers={[
              {
                name: 'offset',
                options: {
                  offset: [0, USER_OPTIONS_POPOVER_NESTED_OFFSET],
                },
              },
            ]}
          >
            {({ toggle, ref, isOpened }) => (
              <Menu.Item
                label="Theme"
                icon="gi-paint_brush"
                expandable
                onClick={toggle}
                ref={ref}
                state={isOpened ? 'expanded' : 'enabled'}
                aria-expanded={isOpened}
                aria-controls="appbar-theme-dropdown"
                aria-haspopup="true"
              />
            )}
            {({ setOpened }) => (
              <Popover.Panel>
                <Menu>
                  <Menu.Item
                    selectionScheme="single"
                    label="Dark"
                    state={schema === 'dark' ? 'selected' : 'enabled'}
                    onClick={() => setOpened(true)}
                    onChange={() => toggleSchema()}
                    icon="gi-weather_moon"
                    name="select-theme"
                  />
                  <Menu.Item
                    selectionScheme="single"
                    label="Light"
                    state={schema === 'light' ? 'selected' : 'enabled'}
                    onClick={() => setOpened(true)}
                    onChange={() => toggleSchema()}
                    icon="gi-weather_sun_summer"
                    name="select-theme"
                  />
                </Menu>
              </Popover.Panel>
            )}
          </Popover>
          <Menu.Item
            label="What's new"
            icon="gi-voice_laud_announcement_news"
            appendContent={
              <Flex alignItems="center" marginLeft="auto">
                <Badge size="sm" colorScheme="success" />
              </Flex>
            }
          />
          <Menu.Separator />
          <Popover
            appendTo={null}
            id="user-options-popover__priority"
            placement="left-start"
            modifiers={[
              {
                name: 'offset',
                options: {
                  offset: [0, USER_OPTIONS_POPOVER_NESTED_OFFSET],
                },
              },
            ]}
          >
            {({ toggle, ref, isOpened }) => (
              <Menu.Item
                label="Query priority"
                appendContent={
                  <Box as="span" marginLeft="auto" paddingLeft="cmp-xs">
                    <Tag
                      text={priority.name}
                      colorScheme={priority.colorScheme}
                      size="sm"
                    />
                  </Box>
                }
                icon="gi-arrows_directions_left_right"
                expandable
                onClick={toggle}
                ref={ref}
                state={isOpened ? 'expanded' : 'enabled'}
                aria-expanded={isOpened}
                aria-controls="appbar-query-priority-dropdown"
                aria-haspopup="true"
              />
            )}
            {({ setOpened }) => (
              <Popover.Panel>
                <Menu>
                  <Menu.Item
                    selectionScheme="single"
                    label="Low"
                    state={priority.name === 'Low' ? 'selected' : 'enabled'}
                    onClick={() => setOpened(true)}
                    onChange={() =>
                      setPriority({ name: 'Low', colorScheme: 'data-blue' })
                    }
                    prependContent={<Badge colorScheme={'data-blue'} />}
                    name="priority-option"
                    hasExtraLeftSpace={false}
                  />
                  <Menu.Item
                    selectionScheme="single"
                    label="Normal"
                    state={priority.name === 'Normal' ? 'selected' : 'enabled'}
                    onClick={() => setOpened(true)}
                    onChange={() =>
                      setPriority({ name: 'Normal', colorScheme: 'success' })
                    }
                    prependContent={<Badge colorScheme={'success'} />}
                    name="priority-option"
                    hasExtraLeftSpace={false}
                  />
                  <Menu.Item
                    selectionScheme="single"
                    label="High"
                    state={priority.name === 'High' ? 'selected' : 'enabled'}
                    onClick={() => setOpened(true)}
                    onChange={() =>
                      setPriority({ name: 'High', colorScheme: 'warning' })
                    }
                    prependContent={<Badge colorScheme={'warning'} />}
                    name="priority-option"
                    hasExtraLeftSpace={false}
                  />
                  <Menu.Item
                    selectionScheme="single"
                    label="Maximum"
                    state={priority.name === 'Maximum' ? 'selected' : 'enabled'}
                    onClick={() => setOpened(true)}
                    onChange={() =>
                      setPriority({ name: 'Maximum', colorScheme: 'error' })
                    }
                    prependContent={<Badge colorScheme={'error'} />}
                    name="priority-option"
                    hasExtraLeftSpace={false}
                  />
                </Menu>
              </Popover.Panel>
            )}
          </Popover>
          <Menu.Separator />
          <Popover
            appendTo={null}
            id="user-options-popover__domains"
            placement="left-start"
            modifiers={[
              {
                name: 'offset',
                options: {
                  offset: [0, USER_OPTIONS_POPOVER_NESTED_OFFSET],
                },
              },
            ]}
          >
            {({ ref, toggle, isOpened }) => (
              <Menu.Item
                ref={ref}
                label="Change domain"
                icon="gi-world_earth_worldwide_international_language"
                bottomContent={
                  <Typography.Heading size="h6">
                    {currentDomain}
                  </Typography.Heading>
                }
                onClick={toggle}
                unlimitedHeight
                expandable
                state={isOpened ? 'expanded' : undefined}
                aria-expanded={isOpened}
                aria-controls="user-options-popover__domains"
                aria-haspopup="true"
              />
            )}
            {({ setOpened }) => (
              <Popover.Panel width="34rem" padding="0">
                <Panel.Header
                  size="sm"
                  title="Change domain"
                  closeSettings={{
                    onClick: () => setOpened(false),
                    tooltip: 'Close this panel',
                  }}
                />
                <Panel.Header as="div" size="sm" bordered>
                  <Flex flex="1" marginBottom="cmp-xxs">
                    <InputControl
                      aria-label="Search for domains"
                      type="search"
                      placeholder="Search domain..."
                      onChange={() => setIsSearching(true)}
                      onBlur={() => setIsSearching(false)}
                    />
                  </Flex>
                </Panel.Header>
                <Panel.Body size="sm">
                  <Menu cmpRole="menu">
                    {isSearching ? (
                      <Menu.Item
                        label="waffleiron"
                        icon={
                          <Icon
                            iconId="gi-check_ok_rounded_filled"
                            colorScheme="success-weak"
                          />
                        }
                        state="selected"
                      />
                    ) : (
                      <>
                        {domainsConfig.map((domain, index) => (
                          <Menu.Item
                            key={index}
                            label={domain.name}
                            icon={
                              <Icon
                                iconId={STATUS_ICON_MAP[domain.status]}
                                colorScheme={
                                  domain.status === 'success'
                                    ? 'success-weak'
                                    : domain.status
                                }
                              />
                            }
                            state={
                              currentDomain === domain.name
                                ? 'selected'
                                : 'enabled'
                            }
                            onChange={() => setCurrentDomain(domain.name)}
                          />
                        ))}
                      </>
                    )}
                  </Menu>
                </Panel.Body>
              </Popover.Panel>
            )}
          </Popover>
          <Menu.Separator />
          <Menu.Item
            aria-label="Log out"
            label={
              <Typography.Paragraph colorScheme="error">
                Log out
              </Typography.Paragraph>
            }
            icon={
              <GIExitLogoutDoorEmergencyOutside
                size={theme.alias.menus.itemIcon.size.square.sm}
                color={theme.alias.color.text.feedback.error.base}
                title="Log out"
              />
            }
          />
        </Menu>
      </Popover.Panel>
    </Popover>
  );
};

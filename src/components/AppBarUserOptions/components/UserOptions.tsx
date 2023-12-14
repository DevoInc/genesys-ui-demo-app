import * as React from 'react';
import { useTheme } from 'styled-components';

import { useSchema } from '../../../providers/ThemeProvider';

import { GIExitLogoutDoorEmergencyOutside } from '@devoinc/genesys-icons';

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
  Popper,
  Tag,
  TagProps,
  Typography,
} from '@devoinc/genesys-ui';

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
    name: 'demo@claro',
    status: 'success',
  },
  {
    name: 'elcorteingles_poc',
    status: 'success',
  },
  {
    name: 'ntt@ntt',
    status: 'warning',
  },
  {
    name: 'prosegur_poc',
    status: 'success',
  },
  {
    name: 'waffleiron',
    status: 'success',
  },
  {
    name: 'test@f5-spain',
    status: 'success',
  },
];

const STATUS_ICON_MAP = {
  error: 'gi-error_warning_danger_stop_filled',
  success: 'gi-check_ok_rounded_filled',
  warning: 'gi-attention_error_alert_caution_filled',
};

export const UserOptions = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isSubPriorityVisible, setIsSubPriorityVisible] = React.useState(false);
  const [isDomainsVisible, setIsDomainsVisible] = React.useState(false);
  const [isThemeSelectorVisible, setIsThemeSelectorVisible] =
    React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [priority, setPriority] = React.useState<PriorityProps>({
    name: 'Normal',
    colorScheme: 'success',
  });
  const [currentDomain, setCurrentDomain] = React.useState('waffleiron');
  const { schema, toggleSchema } = useSchema();

  return (
    <Popper
      placement="bottom-end"
      offset={[0, 0]}
      visible={isVisible}
      setIsVisible={setIsVisible}
      trigger={
        <IconButton
          aria-expanded={isVisible}
          aria-controls="appbar-user-dropdown"
          aria-haspopup="true"
          hasDropdown
          colorScheme="quiet"
          styles="width: auto;height: auto;padding: 0.4rem"
          tooltip="Open user and domain options"
        >
          <Flex alignItems="center" marginRight="cmp-xxs">
            <Avatar
              size="sm"
              name="Rick Sanchez"
              variant="circle"
              imageSrc="https://i.pravatar.cc/300"
              bordered
            />
          </Flex>
        </IconButton>
      }
    >
      <Panel elevation="activated" minWidth="34rem" id="appbar-user-dropdown">
        <Menu>
          <Menu.Item
            label="manolito.gafotas@devo.com"
            prependContent={
              <Badge
                text="MG"
                size="sm"
                styles="width: 2.4rem; height: 2.4rem; padding: 0;"
              />
            }
            bottomContent={
              <HFlex spacing="cmp-xxs" paddingLeft="cmp-xl">
                <Icon
                  iconId="gi-diamond_prize_award_jewellery_ring"
                  size="xxs"
                  colorScheme="weak"
                />
                <Typography.Paragraph colorScheme="weak">
                  admin
                </Typography.Paragraph>
              </HFlex>
            }
            unlimitedHeight
          />
          <Menu.Item
            label="User profile"
            icon="gi-user_profile_avatar_man_male"
          />
          <Menu.Separator />
          <Popper
            placement="left-start"
            offset={[0, 0]}
            visible={isSubPriorityVisible}
            setIsVisible={setIsSubPriorityVisible}
            trigger={
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
                state={isSubPriorityVisible ? 'expanded' : 'enabled'}
                aria-expanded={isSubPriorityVisible}
                aria-controls="appbar-query-priority-dropdown"
                aria-haspopup="true"
              />
            }
          >
            <Panel
              size="sm"
              elevation="activated"
              width="18rem"
              id="appbar-query-priority-dropdown"
            >
              <Menu>
                <Menu.Item
                  selectionScheme="single"
                  label="Low"
                  state={priority.name === 'Low' ? 'selected' : 'enabled'}
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
                  onChange={() =>
                    setPriority({ name: 'Maximum', colorScheme: 'error' })
                  }
                  prependContent={<Badge colorScheme={'error'} />}
                  name="priority-option"
                  hasExtraLeftSpace={false}
                />
              </Menu>
            </Panel>
          </Popper>
          <Menu.Separator />
          <Menu.Item label="Preferences" icon="gi-settings_gear_preferences" />
          <Popper
            placement="left-start"
            offset={[0, 0]}
            visible={isThemeSelectorVisible}
            setIsVisible={setIsThemeSelectorVisible}
            trigger={
              <Menu.Item
                label="Theme"
                icon="gi-paint_brush"
                expandable
                state={isThemeSelectorVisible ? 'expanded' : 'enabled'}
                aria-expanded={isThemeSelectorVisible}
                aria-controls="appbar-theme-dropdown"
                aria-haspopup="true"
              />
            }
          >
            <Panel
              size="sm"
              elevation="activated"
              width="18rem"
              id="appbar-theme-dropdown"
            >
              <Menu>
                <Menu.Item
                  selectionScheme="single"
                  label="Dark"
                  state={schema === 'dark' ? 'selected' : 'enabled'}
                  onChange={() => toggleSchema()}
                  icon="gi-weather_moon"
                  name="select-theme"
                />
                <Menu.Item
                  selectionScheme="single"
                  label="Light"
                  state={schema === 'light' ? 'selected' : 'enabled'}
                  onChange={() => toggleSchema()}
                  icon="gi-weather_sun_summer"
                  name="select-theme"
                />
              </Menu>
            </Panel>
          </Popper>
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
          <Popper
            placement="left-start"
            offset={[0, 0]}
            visible={isDomainsVisible}
            setIsVisible={setIsDomainsVisible}
            trigger={
              <Menu.Item
                label="Change domain"
                icon="gi-world_earth_worldwide_international_language"
                bottomContent={
                  <Typography.Heading size="h6">
                    {currentDomain}
                  </Typography.Heading>
                }
                unlimitedHeight
                expandable
                state={isDomainsVisible ? 'expanded' : 'enabled'}
                aria-expanded={isDomainsVisible}
                aria-controls="appbar-domain-dropdown"
                aria-haspopup="true"
              />
            }
          >
            <Panel.Container
              elevation="activated"
              width="34rem"
              id="appbar-domain-dropdown"
            >
              <Panel.Header
                size="sm"
                title="Change domain"
                closeSettings={{
                  onClick: () => setIsVisible(false),
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
            </Panel.Container>
          </Popper>
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
      </Panel>
    </Popper>
  );
};

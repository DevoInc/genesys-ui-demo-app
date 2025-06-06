import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { useSchema } from '../../../providers/ThemeProvider';

import {
  GIArrowsDirectionsLeftRight,
  GIDiamondPrizeAwardJewelleryRing,
  GIExitLogoutDoorEmergencyOutside,
  GIPaintBrush,
  GISettingsGearPreferences,
  GITimeZone,
  GIUserProfileAvatarManMale,
  GIVoiceLaudAnnouncementNews,
  GIWeatherMoon,
  GIWeatherSunSummer,
} from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_AVATAR_OFFSET,
  USER_OPTIONS_POPOVER_NESTED_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../constants';

import {
  Avatar,
  Badge,
  Banner,
  Box,
  Button,
  Checkbox,
  Flex,
  Form,
  HFlex,
  Icon,
  IconButton,
  Menu,
  Panel,
  Popover,
  SelectControl,
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserOptionsProps extends AppBarUserOptionsProps {}

export const UserOptions: React.FC<UserOptionsProps> = ({ compact }) => {
  const theme = useTheme();
  const [timeZoneAuto, setTimeZoneAuto] = React.useState(true);
  const [priority, setPriority] = React.useState<PriorityProps>({
    name: 'Normal',
    colorScheme: 'success',
  });
  const { schema, toggleSchema } = useSchema();
  const avatarSrc = 'https://i.pravatar.cc/150?img=65';
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
          ref={ref as React.Ref<HTMLButtonElement>}
          size={compact ? 'xs' : 'md'}
          style={css`
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
              imageSrc={compact ? undefined : avatarSrc}
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
                imageSrc={avatarSrc}
              />
              <VFlex spacing="0">
                <Typography.Heading size="h6" gutterBottom="cmp-xxs">
                  Rick Sanchez
                </Typography.Heading>
                <Typography.Paragraph>
                  rick.sanchez@devo.com
                </Typography.Paragraph>
                <HFlex spacing="cmp-xxs" marginBottom="cmp-xs">
                  <Icon size="xxs" colorScheme="weaker">
                    {<GIDiamondPrizeAwardJewelleryRing />}
                  </Icon>
                  <Typography.Paragraph colorScheme="weaker">
                    admin
                  </Typography.Paragraph>
                </HFlex>
              </VFlex>
            </HFlex>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item
            label="User profile"
            icon={<GIUserProfileAvatarManMale />}
          />
          <Menu.Item label="Preferences" icon={<GISettingsGearPreferences />} />
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
                icon={<GIPaintBrush />}
                expandable
                onClick={toggle}
                ref={ref as React.Ref<HTMLButtonElement>}
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
                    onClick={() => setOpened?.(true)}
                    onChange={() => toggleSchema()}
                    icon={<GIWeatherMoon />}
                    name="select-theme"
                  />
                  <Menu.Item
                    selectionScheme="single"
                    label="Light"
                    state={schema === 'light' ? 'selected' : 'enabled'}
                    onClick={() => setOpened?.(true)}
                    onChange={() => toggleSchema()}
                    icon={<GIWeatherSunSummer />}
                    name="select-theme"
                  />
                </Menu>
              </Popover.Panel>
            )}
          </Popover>
          <Menu.Item
            label="What's new"
            icon={<GIVoiceLaudAnnouncementNews />}
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
                icon={<GIArrowsDirectionsLeftRight />}
                expandable
                onClick={toggle}
                ref={ref as React.Ref<HTMLButtonElement>}
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
                    onClick={() => setOpened?.(true)}
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
                    onClick={() => setOpened?.(true)}
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
                    onClick={() => setOpened?.(true)}
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
                    onClick={() => setOpened?.(true)}
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
            id="user-options-popover__timezone"
            placement="left"
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
                ref={ref as React.Ref<HTMLButtonElement>}
                label="Timezone"
                icon={<GITimeZone />}
                bottomContent={
                  <Typography format="action-sm" colorScheme="stronger">
                    UTC+2:00
                  </Typography>
                }
                onClick={toggle}
                unlimitedHeight
                expandable
                state={isOpened ? 'expanded' : undefined}
                aria-expanded={isOpened}
                aria-controls="user-options-popover__timezone"
                aria-haspopup="true"
              />
            )}
            {({ setOpened }) => (
              <Popover.Panel width="54rem" padding="0">
                <Panel.Header
                  size="sm"
                  title="Time zone configuration"
                  closeSettings={{
                    onClick: () => setOpened?.(false),
                    tooltip: 'Close this panel',
                  }}
                />
                <Panel.Body size="sm">
                  <Form aria-label="Time zone configuration form">
                    <Checkbox
                      label="Set timezone automatically"
                      id="timezone-auto"
                      defaultChecked
                      onChange={() => setTimeZoneAuto(!timeZoneAuto)}
                    />
                    <SelectControl
                      aria-label="Select the timezone"
                      menuAppendToBody
                      isDisabled={timeZoneAuto}
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
                      src={`/timezone-map${theme.meta.scheme === 'dark' ? '-dark' : ''}.png`}
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
                <Panel.Footer>
                  <HFlex justifyContent="space-between" flex="1">
                    <Checkbox
                      label="Apply changes only to this session"
                      id="timezone-apply"
                      onChange={() => setTimeZoneAuto(!timeZoneAuto)}
                    />
                    <HFlex justifyContent="flex-end">
                      <Button
                        key="timezone-btn-1"
                        colorScheme="quiet"
                        onClick={() => setOpened?.(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        key="timezone-btn-2"
                        colorScheme="accent"
                        onClick={() => setOpened?.(false)}
                      >
                        Save changes
                      </Button>
                    </HFlex>
                  </HFlex>
                </Panel.Footer>
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

import * as React from 'react';
import { css } from 'styled-components';

import { GIBellRingerAlarmSound } from '@devoinc/genesys-icons';

import {
  Badge,
  Button,
  Divider,
  IconButton,
  Panel,
  Popover,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

import { NotificationItem, NotificationItemProps } from './components';
import { AppBarUserOptionsProps } from '../../AppBarUserOptions';
import {
  USER_OPTIONS_POPOVER_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../../constants';

const notificationsConfig: Omit<NotificationItemProps, 'closeOnClick'>[] = [
  {
    buttonText: 'View in Finder',
    date: '10 minutes ago',
    description:
      'There is a new log table format detected with the signature: my.app.ueba.numerouslogonfailures.',
    heading: 'New table MyApp',
    status: 'success',
  },
  {
    date: '10 minutes ago',
    description: 'There is a new log table format detected.',
    heading: 'Lookup P4dinamic was successfully uploaded',
    status: 'success',
  },
  {
    date: '10 minutes ago',
    description:
      'Error in lookup cidr-test: cell value in row 0 and field net is invalid due to NET4 type mismatch. The value presenting the issue is net. Error code: 1202.',
    heading: 'Lookup notification',
    status: 'error',
  },
  {
    cause: 'Column not found error: eventdate.',
    date: '11 minutes ago',
    description:
      'Retry the operation and contact support if the error persists.',
    heading: 'Lookup P7static--eventdateKey could not be loaded',
    status: 'error',
  },
  {
    buttonText: 'View details',
    date: '11 minutes ago',
    description:
      'Retry the operation and contact support if the error persists.',
    heading: 'my.app.test.firewall table has been uploaded with some errors',
    status: 'warning',
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NotificationsProps extends AppBarUserOptionsProps {}

export const Notifications: React.FC<NotificationsProps> = ({ compact }) => {
  const [isBadgeVisible, setIsBadgeVisible] = React.useState(true);
  const [notificationsList, setNotificationsList] = React.useState([
    0, 1, 2, 3, 4,
  ]);
  return (
    <Popover
      id="appbar-notifications-dropdown"
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
          aria-controls="appbar-notifications-dropdown"
          aria-haspopup="true"
          aria-expanded={isOpened}
          size={compact ? 'sm' : 'lg'}
          colorScheme="quiet"
          circular
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            setIsBadgeVisible(false);
            toggle(event);
          }}
          ref={ref}
          state={isOpened ? 'expanded' : undefined}
        >
          <GIBellRingerAlarmSound
            size={compact ? '1.8rem' : '2rem'}
            style={{ position: 'relative' }}
          />
          {isBadgeVisible && notificationsList.length > 0 && (
            <Badge
              text={compact ? undefined : notificationsList.length.toString()}
              size={compact ? 'sm' : 'md'}
              colorScheme="info"
              style={css`
                position: absolute;
                width: ${compact && '0.8rem'};
                height: ${compact && '0.8rem'};
                min-width: ${compact && '0'};
                top: ${compact ? '0' : '-0.4rem'};
                right: -0.2rem;
              `}
            />
          )}
        </IconButton>
      )}
      {({ setOpened }) => (
        <Panel size="sm" elevation="activated" width="44rem" maxHeight="48rem">
          <Panel.Header
            bordered
            title="Notifications"
            closeSettings={{
              onClick: () => setOpened?.(false),
              tooltip: 'Close this panel',
            }}
            actions={
              notificationsList.length > 0
                ? [
                    <>
                      <Button
                        key={1}
                        size="sm"
                        onClick={() => setNotificationsList([])}
                      >
                        Clear all
                      </Button>
                      <Divider vertical height="2.4rem" margin="0 0 0 cmp-md" />
                    </>,
                  ]
                : undefined
            }
          />
          <Panel.Body>
            {notificationsList.length > 0 ? (
              <VFlex as="ul" alignItems="stretch" spacing="cmp-lg">
                {notificationsConfig.map(
                  (noti, index) =>
                    notificationsList.includes(index) && (
                      <NotificationItem
                        key={index}
                        date={noti.date}
                        heading={noti.heading}
                        description={noti.description}
                        buttonText={noti.buttonText}
                        status={noti.status}
                        closeOnClick={() =>
                          setNotificationsList(
                            notificationsList.filter((x) => x !== index),
                          )
                        }
                      />
                    ),
                )}
              </VFlex>
            ) : (
              <Typography.Paragraph>
                There are no notifications.
              </Typography.Paragraph>
            )}
          </Panel.Body>
        </Panel>
      )}
    </Popover>
  );
};

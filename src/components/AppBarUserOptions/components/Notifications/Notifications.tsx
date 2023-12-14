import * as React from 'react';

import { GIBellRingerAlarmSound } from '@devoinc/genesys-icons';

import {
  Badge,
  Button,
  Divider,
  IconButton,
  Panel,
  Popper,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

import { NotificationItem, NotificationItemProps } from './components';

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

export const Notifications = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isBadgeVisible, setIsBadgeVisible] = React.useState(true);
  const [notificationsList, setNotificationsList] = React.useState([
    0, 1, 2, 3, 4,
  ]);
  return (
    <Popper
      placement="bottom-end"
      offset={[0, 0]}
      visible={isVisible}
      setIsVisible={setIsVisible}
      trigger={
        <IconButton
          aria-controls="appbar-notifications-dropdown"
          aria-haspopup="true"
          aria-expanded={isVisible}
          size="lg"
          colorScheme="quiet"
          circular
          onClick={() => setIsBadgeVisible(false)}
        >
          <GIBellRingerAlarmSound
            size="2rem"
            style={{ position: 'relative' }}
          />
          {isBadgeVisible && notificationsList.length > 0 && (
            <Badge
              text={notificationsList.length.toString()}
              colorScheme="info"
              styles="position: absolute; top: -0.4rem; right: -0.2rem;"
            />
          )}
        </IconButton>
      }
    >
      <Panel
        elevation="activated"
        width="44rem"
        maxHeight="48rem"
        id="appbar-notifications-dropdown"
        closeSettings={{
          onClick: () => setIsVisible(false),
          tooltip: 'Close this panel',
        }}
        headerSettings={{
          renderContent: (
            <>
              <Panel.Header.Heading title="Notifications" size="sm" />
              {notificationsList.length > 0 && (
                <>
                  <Button size="sm" onClick={() => setNotificationsList([])}>
                    Clear all
                  </Button>
                  <Divider vertical height="2.4rem" margin="0 0 0 cmp-md" />
                </>
              )}
              <Panel.Header.Close
                size="sm"
                onClick={() => setIsVisible(false)}
                tooltip="Close this panel"
              />
            </>
          ),
          bordered: true,
        }}
        title="Notifications"
      >
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
      </Panel>
    </Popper>
  );
};

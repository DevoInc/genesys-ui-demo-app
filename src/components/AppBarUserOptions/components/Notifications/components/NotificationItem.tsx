import * as React from 'react';

import {
  Box,
  Button,
  HFlex,
  Icon,
  IconButtonRemove,
  OmitUnion,
  ToastProps,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

export interface NotificationItemProps {
  cause?: string;
  date: string;
  description?: string;
  heading: string;
  status: OmitUnion<ToastProps['status'], undefined>;
  buttonText?: string;
  closeOnClick: React.MouseEventHandler;
}

export const STATUS_ICON_MAP = {
  error: 'gi-error_warning_danger_stop_filled',
  info: 'gi-info_round_filled',
  success: 'gi-check_ok_rounded_filled',
  warning: 'gi-attention_error_alert_caution_filled',
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  buttonText,
  cause,
  closeOnClick,
  date,
  description,
  heading,
  status,
}) => {
  const colorScheme = status === 'success' ? 'success-weak' : status;
  return (
    <HFlex alignItems="flex-start" spacing="cmp-xs">
      <Icon
        iconId={STATUS_ICON_MAP[status]}
        size="xxs"
        colorScheme={colorScheme}
      />
      <VFlex spacing="cmp-xxs" alignItems="stretch" flex="1">
        <HFlex
          justifyContent="space-between"
          alignItems="flex-start"
          spacing="cmp-md"
        >
          <VFlex spacing="cmp-xxs">
            <HFlex spacing="cmp-xxs" alignItems="align-center">
              <Typography.Heading size="h6">
                {heading}{' '}
                <Typography.Paragraph
                  as="span"
                  gutterBottom="0"
                  size="xs"
                  colorScheme="weak"
                  truncateLine={1}
                >
                  · {date}
                </Typography.Paragraph>
              </Typography.Heading>
            </HFlex>
          </VFlex>
          <IconButtonRemove
            size="xs"
            tooltip="Remove this notification"
            onClick={(e) => closeOnClick(e)}
          />
        </HFlex>
        <VFlex spacing="0">
          <Typography.Paragraph size="sm" gutterBottom="0">
            {description}
          </Typography.Paragraph>
          {cause && (
            <Typography.Paragraph size="sm" gutterBottom="0">
              <Typography.Strong>Cause: </Typography.Strong>
              {cause}
            </Typography.Paragraph>
          )}
        </VFlex>
        {buttonText && (
          <Box marginTop="cmp-xxs">
            <Button size="sm" colorScheme={status}>
              {buttonText}
            </Button>
          </Box>
        )}
      </VFlex>
    </HFlex>
  );
};

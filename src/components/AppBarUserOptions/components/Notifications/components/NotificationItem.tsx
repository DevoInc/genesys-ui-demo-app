import * as React from 'react';
import { useTheme } from 'styled-components';

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
import {
  GIAttentionErrorAlertCautionFilled,
  GICheckOkRoundedFilled,
  GIErrorWarningDangerStopFilled,
  GIInfoRoundFilled,
} from '@devoinc/genesys-icons';

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
  error: <GIErrorWarningDangerStopFilled />,
  info: <GIInfoRoundFilled />,
  success: <GICheckOkRoundedFilled />,
  warning: <GIAttentionErrorAlertCautionFilled />,
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
  const theme = useTheme();
  const iconSize = 'xxs';
  const paragraphSize = 'md';
  return (
    <HFlex alignItems="flex-start" spacing="cmp-xs">
      <Icon
        size={iconSize}
        colorScheme={colorScheme}
        style={{
          marginTop: `calc((${theme.alias.typographies.typo.lineHeight.body[paragraphSize]} - ${theme.cmp.icon.size.square[iconSize]}) / 2)`,
        }}
      >
        {STATUS_ICON_MAP[status]}
      </Icon>
      <VFlex spacing="cmp-xxs" alignItems="stretch" flex="1">
        <HFlex
          justifyContent="space-between"
          alignItems="flex-start"
          spacing="cmp-md"
        >
          <VFlex spacing="cmp-xxs">
            <HFlex spacing="cmp-xxs" alignItems="align-center">
              <Typography.Paragraph colorScheme="stronger" size={paragraphSize}>
                {heading}{' '}
                <Typography.Paragraph
                  as="span"
                  size="xs"
                  colorScheme="weaker"
                  truncateLine={1}
                >
                  · {date}
                </Typography.Paragraph>
              </Typography.Paragraph>
            </HFlex>
          </VFlex>
          <IconButtonRemove
            size="xs"
            tooltip="Remove this notification"
            onClick={(e) => closeOnClick(e)}
          />
        </HFlex>
        <VFlex spacing="0">
          <Typography.Paragraph size="sm" colorScheme="weak">
            {description}
          </Typography.Paragraph>
          {cause && (
            <Typography.Paragraph size="sm">
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

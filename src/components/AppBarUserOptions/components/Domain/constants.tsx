import * as React from 'react';
import {
  GIAttentionErrorAlertCautionFilled,
  GICheckOkRoundedFilled,
  GIErrorWarningDangerStopFilled,
} from '@devoinc/genesys-icons';
import type { TDomainState } from './declarations';

export const STATUS_ICON_MAP: { [key in TDomainState]: React.ReactNode } = {
  error: <GIErrorWarningDangerStopFilled />,
  success: <GICheckOkRoundedFilled />,
  warning: <GIAttentionErrorAlertCautionFilled />,
};

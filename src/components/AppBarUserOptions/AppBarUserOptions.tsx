import * as React from 'react';

import { Divider, HFlex } from '@devoinc/genesys-ui';

import {
  HelpCenter,
  Notifications,
  Search,
  TimeZone,
  UserOptions,
} from './components';

export interface AppBarUserOptionsProps {
  compact?: boolean;
}

export const AppBarUserOptions: React.FC<AppBarUserOptionsProps> = ({
  compact,
}) => (
  <HFlex spacing={`cmp-${compact ? 'xs' : 'sm'}`} key="one">
    <Search compact={compact} />
    <Notifications compact={compact} />
    <HelpCenter compact={compact} />
    <TimeZone compact={compact} />
    <Divider vertical margin="0" height={compact ? '1.8rem' : undefined} />
    <UserOptions compact={compact} />
  </HFlex>
);

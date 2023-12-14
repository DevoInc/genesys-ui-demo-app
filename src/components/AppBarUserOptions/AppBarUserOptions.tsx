import * as React from 'react';

import { Divider } from '@devoinc/genesys-ui';

import {
  HelpCenter,
  Notifications,
  Search,
  TimeZone,
  UserOptions,
} from './components';

export const AppBarUserOptions = () => (
  <>
    <Search />
    <Notifications />
    <HelpCenter />
    <TimeZone />
    <Divider vertical margin="0" />
    <UserOptions />
  </>
);

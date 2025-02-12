import * as React from 'react';
import { GIAlerts } from '@devoinc/genesys-icons';
import {
  IconButton,
  IconButtonClose,
  IconButtonCollapse,
  IconButtonGoToDocs,
  IconButtonStatus,
  IconButtonStop,
  VFlex,
  Wrap,
} from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const IconButtonExample = () => (
  <VFlex>
    <DefaultHeading>Icon Button</DefaultHeading>
    <Wrap hSpacing="cmp-sm" alignItems="center">
      <IconButton icon={<GIAlerts />} />
      <IconButton icon={<GIAlerts />} hasBadge badgeText="9" />
      <IconButton icon={<GIAlerts />} hasDropdown />
      <IconButtonClose />
      <IconButtonCollapse state="enabled" />
      <IconButtonGoToDocs />
      <IconButtonStatus />
      <IconButtonStop />
    </Wrap>
  </VFlex>
);

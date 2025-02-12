import * as React from 'react';
import { Banner, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const BannerExample = () => (
  <VFlex>
    <DefaultHeading>Banner</DefaultHeading>
    <Banner title="Banner title" content="This is the content for the banner" />
  </VFlex>
);

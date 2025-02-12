import * as React from 'react';
import { Link, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const LinkExample = () => (
  <VFlex>
    <DefaultHeading>Link</DefaultHeading>
    <Link>This is a link</Link>
  </VFlex>
);

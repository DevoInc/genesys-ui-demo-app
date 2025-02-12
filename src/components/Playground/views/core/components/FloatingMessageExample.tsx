import * as React from 'react';
import { Box, FloatingMessage, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const FloatingMessageExample = () => (
  <VFlex spacing="cmp-xs">
    <DefaultHeading>Floating message</DefaultHeading>
    <Box position="relative" height="4rem">
      <FloatingMessage
        position="left-top"
        message="This is a floating message"
      />
    </Box>
  </VFlex>
);

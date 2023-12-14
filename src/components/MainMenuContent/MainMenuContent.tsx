import * as React from 'react';
import { Flex, Typography } from '@devoinc/genesys-ui';

export const MainMenuContent = () => (
  <Flex alignItems='center' justifyContent='center' height='100vh'>
    <div style={{ transform: 'rotate(-90deg)' }}>
      <Typography.Heading truncateLine={1} size='overline-lg'>
        <span style={{ color: '#666' }}>Main menu</span>
      </Typography.Heading>
    </div>
  </Flex>
);

import * as React from 'react';
import { useTheme } from 'styled-components';

import { Grid } from '@devoinc/genesys-ui';

export interface GridGlobalNavProps {
  isFixed?: boolean;
  children?: React.ReactNode;
}

export const GlobalNav: React.FC<GridGlobalNavProps> = ({
  isFixed,
  children,
}) => {
  const theme = useTheme();
  return (
    <Grid.Item
      gridArea="global-nav"
      gridColumn="1 / 2"
      width={isFixed ? '25.6rem' : '6.4rem'} // TODO: tokens
      style={{
        backgroundColor: theme.cmp.mainMenu.color.background,
        height: '100vh',
      }}
    >
      {children}
    </Grid.Item>
  );
};

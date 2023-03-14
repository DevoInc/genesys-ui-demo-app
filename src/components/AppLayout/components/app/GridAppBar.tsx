import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';

export interface GridAppBarProps {
  children: React.ReactNode;
}

export const AppBar: React.FC<GridAppBarProps> = ({ children }) => {
  const { tokens } = useTheme();
  return (
    <Grid.Item
      gridArea='app-bar'
      forwardedAs='header'
      gridRow='1 / 2'
      zIndex={tokens.alias.elevation.zIndex.depth.stickyTop}
    >
      {children}
    </Grid.Item>
  );
};

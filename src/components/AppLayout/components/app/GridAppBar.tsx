import * as React from 'react';
import { Grid, GridProps } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';

export interface GridAppBarProps {
  children: GridProps['children'];
}

export const AppBar: React.FC<GridAppBarProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid.Item
      gridArea="app-bar"
      gridRow="1 / 2"
      zIndex={theme.alias.elevation.zIndex.depth.stickyTop}
    >
      {children}
    </Grid.Item>
  );
};

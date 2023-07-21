import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';
import { GridItemProps } from '@devoinc/genesys-ui/dist/types/src/components/Grid/subcomponents';

export interface GridAppBarProps {
  children: GridItemProps['children'];
}

export const AppBar: React.FC<GridAppBarProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid.Item
      gridArea='app-bar'
      gridRow='1 / 2'
      zIndex={theme.alias.elevation.zIndex.depth.stickyTop}
    >
      {children}
    </Grid.Item>
  );
};

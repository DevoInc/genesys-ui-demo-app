import * as React from 'react';
import { GridItem } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';

export interface GridAppBarProps {
  children: React.ReactNode;
}

export const AppBar: React.FC<GridAppBarProps> = ({ children }) => {
  const { tokens } = useTheme();
  return (
    <GridItem
      gridArea='app-bar'
      forwardedAs='header'
      gridRow='1 / 2'
      zIndex={tokens.alias.elevation.zIndex.depth.stickyTop}
    >
      {children}
    </GridItem>
  );
};

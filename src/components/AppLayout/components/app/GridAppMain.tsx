import * as React from 'react';
import { Grid, GridProps } from '@devoinc/genesys-ui';

export interface GridAppMainProps {
  children: GridProps['children'];
}

export const AppMain: React.FC<GridAppMainProps> = ({ children }) => (
  <Grid.Item gridArea="app-main" overflow="auto" gridRow="2 / 3">
    {children}
  </Grid.Item>
);

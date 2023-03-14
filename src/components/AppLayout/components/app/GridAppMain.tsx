import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';

export interface GridAppMainProps {
  children: React.ReactNode;
  padding?: string;
}

export const AppMain: React.FC<GridAppMainProps> = ({
  children,
  padding = 'layout-xxs',
}) => (
  <Grid.Item
    gridArea='app-main'
    forwardedAs='main'
    overflow='auto'
    padding={padding}
    gridRow='2 / 3'
  >
    {children}
  </Grid.Item>
);

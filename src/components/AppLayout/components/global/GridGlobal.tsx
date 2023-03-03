import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';

export interface GridGlobalProps {
  children: React.ReactNode;
}

export const Global: React.FC<GridGlobalProps> = ({ children }) => (
  <Grid
    gridTemplateAreas='global-nav global-content'
    gridTemplateColumns='min-content auto'
    height='100vh'
  >
    {children}
  </Grid>
);

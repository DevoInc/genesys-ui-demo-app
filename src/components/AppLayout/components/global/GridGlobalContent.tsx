import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';

export interface GridGlobalContentProps {
  children: React.ReactNode;
}

export const GlobalContent: React.FC<GridGlobalContentProps> = ({
  children,
}) => (
  <Grid.Item gridArea='global-content' gridColumn='2 / 3'>
    {children}
  </Grid.Item>
);

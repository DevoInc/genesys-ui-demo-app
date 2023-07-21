import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';
import { GridItemProps } from '@devoinc/genesys-ui/dist/types/src/components/Grid/subcomponents';

export interface GridAppMainProps {
  children: GridItemProps['children'];
}

export const AppMain: React.FC<GridAppMainProps> = ({ children }) => (
  <Grid.Item gridArea='app-main' overflow='auto' gridRow='2 / 3'>
    {children}
  </Grid.Item>
);

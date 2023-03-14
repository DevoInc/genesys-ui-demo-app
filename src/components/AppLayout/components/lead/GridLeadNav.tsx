import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';

export interface GridLeadNavProps {
  children: React.ReactNode;
}

export const LeadNav: React.FC<GridLeadNavProps> = ({ children }) => (
  <Grid.Item gridArea='lead-nav' gridRow='1 / 2'>
    {children}
  </Grid.Item>
);

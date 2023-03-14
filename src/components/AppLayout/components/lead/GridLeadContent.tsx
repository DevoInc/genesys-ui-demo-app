import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';

export interface GridLeadContentProps {
  children: React.ReactNode;
}

export const LeadContent: React.FC<GridLeadContentProps> = ({
  children,
}) => (
  <Grid.Item gridArea='lead-content' padding='layout-xxs' gridRow='2 / 3'>
    {children}
  </Grid.Item>
);

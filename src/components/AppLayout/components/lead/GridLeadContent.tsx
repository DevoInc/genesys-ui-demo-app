import * as React from 'react';
import { GridItem } from '@devoinc/genesys-ui';

export interface GridLeadContentProps {
  children: React.ReactNode;
}

export const LeadContent: React.FC<GridLeadContentProps> = ({
  children,
}) => (
  <GridItem gridArea='lead-content' padding='layout-xxs' gridRow='2 / 3'>
    {children}
  </GridItem>
);

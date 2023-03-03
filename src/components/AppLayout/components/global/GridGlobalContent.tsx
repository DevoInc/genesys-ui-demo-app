import * as React from 'react';
import { GridItem } from '@devoinc/genesys-ui';

export interface GridGlobalContentProps {
  children: React.ReactNode;
}

export const GlobalContent: React.FC<GridGlobalContentProps> = ({
  children,
}) => (
  <GridItem gridArea='global-content' gridColumn='2 / 3'>
    {children}
  </GridItem>
);

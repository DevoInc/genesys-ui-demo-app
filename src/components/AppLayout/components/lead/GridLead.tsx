import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';

export interface GridLeadProps {
  children: React.ReactNode;
}

export const Lead: React.FC<GridLeadProps> = ({ children }) => {
  const { tokens } = useTheme();
  const leadNavHeight = tokens.alias.size.height.surface.xxs as string; //TODO: review this
  const appBarHeight = tokens.alias.size.height.surface.md;
  return (
    <Grid
      gridTemplateAreas='"lead-nav" "lead-content"'
      height='100%'
      gridTemplateRows={`${leadNavHeight} calc(100vh - ${appBarHeight} - ${leadNavHeight})`}
    >
      {children}
    </Grid>
  );
};

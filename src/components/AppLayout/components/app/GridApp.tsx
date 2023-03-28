import * as React from 'react';
import { Grid } from '@devoinc/genesys-ui';
import { useTheme } from 'styled-components';

export interface GridAppProps {
  children: React.ReactNode;
}

export const App: React.FC<GridAppProps> = ({ children }) => {
  const theme = useTheme();
  const appBarHeight = theme.alias.size.height.surface.md;
  return (
    <Grid
      gridTemplateAreas='"app-bar" "app-main"'
      gridTemplateRows={`${appBarHeight} calc(100vh - ${appBarHeight})`}
    >
      {children}
    </Grid>
  );
};

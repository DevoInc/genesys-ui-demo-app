import { Grid } from '@devoinc/genesys-ui';
import styled, { DefaultTheme } from 'styled-components';

export const StyledGridGlobalNav = styled(Grid.Item)`
  ${({ theme }: { theme: DefaultTheme }) => `
background-color: ${theme.cmp.mainMenu.color.background};
height: 100vh;
`}
`;

import { Grid } from '@devoinc/genesys-ui';
import styled from 'styled-components';

export const StyledGridGlobalNav = styled(Grid.Item)`
  ${({ theme }) => `
background-color: ${theme.tokens.cmp.mainMenu.color.background};
height: 100vh;
`}
`;

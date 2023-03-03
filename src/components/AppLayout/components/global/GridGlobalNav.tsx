import * as React from 'react';
import { StyledGridGlobalNav } from './StyledGridGlobalNav';

export interface GridGlobalNavProps {
  isFixed?: boolean;
  children?: React.ReactNode;
}

export const GlobalNav: React.FC<GridGlobalNavProps> = ({
  isFixed,
  children,
}) => (
  <StyledGridGlobalNav
    gridArea='global-nav'
    gridColumn='1 / 2'
    width={isFixed ? '25.6rem' : '6.4rem'} // TODO: tokens
  >
    {children}
  </StyledGridGlobalNav>
);

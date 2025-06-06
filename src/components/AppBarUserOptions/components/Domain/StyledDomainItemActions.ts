import styled from 'styled-components';

interface StyledDomainItemActionsProps {
  visible?: boolean;
}

export const StyledDomainItemActions = styled.span<StyledDomainItemActionsProps>`
  position: absolute;
  right: 12px;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-left: auto;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: ${({ theme }) =>
    `opacity ${theme.cmp.menu.item.mutation.transitionDuration} ease-in-out`};

  *:enabled:hover &,
  li:hover &,
  *:link:hover & {
    opacity: 1;
  }
`;

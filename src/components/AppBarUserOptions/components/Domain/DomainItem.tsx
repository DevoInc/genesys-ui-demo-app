import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TDomainState } from './declarations';
import { STATUS_ICON_MAP } from './constants';
import {
  Flex,
  FloatingMessage,
  Icon,
  IconButton,
  Menu,
  type MenuItemProps,
} from '@devoinc/genesys-ui';
import { GIBookmarkTagSolid } from '@devoinc/genesys-icons';
import { StyledDomainItemActions } from './StyledDomainItemActions';

export interface DomainItemProps extends Omit<MenuItemProps, 'label'> {
  active?: boolean;
  defaultDomain?: boolean;
  label: string;
  onSetAsDefault?: () => void;
  domainState?: TDomainState;
}

export const DomainItem: React.FC<DomainItemProps> = ({
  active,
  domainState = 'success',
  href = '#',
  icon,
  label,
  onSetAsDefault,
  defaultDomain,
  ...menuItemProps
}) => {
  const theme = useTheme();
  const DefaultDomainFloatingMessage = ({ show }: { show: boolean }) => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      if (show) {
        setVisible(true);
        const timer = setTimeout(() => {
          setVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
      }
    }, [show]);

    if (!visible) return null;

    return (
      <FloatingMessage
        status="success"
        message={`Domain ${label} set as default successfully`}
        position="right-bottom"
        style={{ width: '24rem', marginRight: '0', marginBottom: '3.2rem' }}
      />
    );
  };
  const [messageVisible, setMessageVisible] = React.useState(false);
  return (
    <Flex as="li" position="relative" alignItems="center">
      <Menu.Item
        {...menuItemProps}
        selectionScheme="single"
        href={href}
        isItem={false}
        quiet
        icon={
          <Icon
            colorScheme={
              active
                ? 'strong'
                : domainState === 'success'
                  ? 'success-weak'
                  : domainState
            }
            size="xxs"
          >
            {icon || STATUS_ICON_MAP[domainState]}
          </Icon>
        }
        label={label}
        tooltip="Change to this domain"
      />
      <StyledDomainItemActions visible={defaultDomain}>
        {defaultDomain ? (
          <Flex
            inline
            alignItems="center"
            justifyContent="center"
            width={theme.cmp.button.size.square.xs}
            height={theme.cmp.button.size.square.xs}
            tooltip="Domain set as default"
          >
            <Icon size="xxxs">
              <GIBookmarkTagSolid />
            </Icon>
          </Flex>
        ) : (
          <IconButton
            icon={<GIBookmarkTagSolid />}
            size="xs"
            colorScheme="quiet-blend"
            selectionScheme="single"
            onChange={() => {
              setMessageVisible(true);
              onSetAsDefault?.();
            }}
            tooltip="Set domain as default"
          />
        )}
      </StyledDomainItemActions>
      {defaultDomain && <DefaultDomainFloatingMessage show={messageVisible} />}
    </Flex>
  );
};

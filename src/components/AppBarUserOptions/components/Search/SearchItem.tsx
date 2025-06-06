import * as React from 'react';

import { Flex, Menu, Typography } from '@devoinc/genesys-ui';

import { SEARCH_TYPES_ICON_MAP } from './constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SearchItemProps {
  href?: React.HTMLProps<HTMLAnchorElement>['href'];
  label: React.ReactNode;
  type?: 'search' | 'alert' | 'activeboard' | 'flow' | 'page';
}

export const SearchItem: React.FC<SearchItemProps> = ({
  href = '#',
  label,
  type = 'search',
}) => {
  return (
    <Menu.Item
      href={href}
      icon={SEARCH_TYPES_ICON_MAP[type]}
      label={label}
      appendContent={
        type === 'page' ? null : (
          <Flex.Item marginLeft="auto">
            <Typography.Caption colorScheme="weak" size="xs">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography.Caption>
          </Flex.Item>
        )
      }
    />
  );
};

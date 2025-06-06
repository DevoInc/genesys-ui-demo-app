import * as React from 'react';

import { Menu, Typography } from '@devoinc/genesys-ui';

import type { THelpType } from './declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HelpItemProps {
  description: string;
  href?: React.HTMLProps<HTMLAnchorElement>['href'];
  label: React.ReactNode;
  type?: THelpType;
}

export const HelpItem: React.FC<HelpItemProps> = ({
  description,
  href = '#',
  label,
  type = 'article',
}) => {
  return (
    <Menu.Item
      bottomContent={
        <Typography.Paragraph
          as="span"
          colorScheme="weak"
          truncateLine={2}
          size="sm"
        >
          {description}
        </Typography.Paragraph>
      }
      href={href}
      label={label}
      unlimitedHeight
      linkStyled={type === 'article'}
    />
  );
};

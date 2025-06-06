/* eslint-disable indent */
import * as React from 'react';
import { useTheme } from 'styled-components';
import { AppMenu, Popover } from '@devoinc/genesys-ui';
import { appMenuData } from './data';
import { LegacyRef } from 'react';

interface MainMenuProps {
  onCollapseClick?: () => void;
  collapsed?: boolean;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  collapsed,
  onCollapseClick,
}) => {
  const theme = useTheme();
  return (
    <AppMenu collapsed={collapsed}>
      <AppMenu.Header
        logoAlt="Devo Logo"
        logo={
          theme.meta.scheme === 'dark'
            ? './devo-logo.svg'
            : './devo-logo-dark.svg'
        }
        collapsedLogo={
          theme.meta.scheme === 'dark'
            ? './devo-logo-symbol.svg'
            : './devo-logo-symbol-dark.svg'
        }
      />
      <AppMenu.Body>
        {appMenuData.map((menuItem, idx) =>
          menuItem.popoverContent ? (
            <Popover
              key={idx}
              id={menuItem.id}
              placement="right"
              modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
            >
              {({ ref, isOpened, toggle }) => (
                <AppMenu.Item
                  ref={ref as LegacyRef<HTMLButtonElement>}
                  counter={menuItem.counter}
                  expandable={Boolean(menuItem.popoverContent)}
                  href={menuItem.href}
                  icon={menuItem.icon}
                  isBeta={menuItem.isBeta}
                  label={menuItem.label}
                  onClick={toggle}
                  state={
                    menuItem.isCurrent
                      ? 'active'
                      : isOpened
                        ? 'expanded'
                        : 'enabled'
                  }
                  tooltip={menuItem.tooltip}
                />
              )}
              {menuItem.popoverContent}
            </Popover>
          ) : menuItem.isSeparator ? (
            <AppMenu.Separator key={idx} />
          ) : menuItem.isHeading ? (
            <AppMenu.Heading
              key={idx}
              text={menuItem.text}
              collapsedText={menuItem.collapsedText}
            />
          ) : (
            <AppMenu.Item
              href={menuItem.href}
              counter={menuItem.counter}
              key={idx}
              icon={menuItem.icon}
              isBeta={menuItem.isBeta}
              label={menuItem.label}
              state={menuItem.isCurrent ? 'active' : 'enabled'}
              tooltip={menuItem.tooltip}
            />
          ),
        )}
      </AppMenu.Body>
      <AppMenu.Footer onClick={() => onCollapseClick?.()} />
    </AppMenu>
  );
};

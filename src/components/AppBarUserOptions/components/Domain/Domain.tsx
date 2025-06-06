import * as React from 'react';

import {
  GICheckOkRoundedFilled,
  GIWorldEarthWorldwideInternationalLanguage,
} from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../../constants';

import {
  Box,
  Button,
  Flex,
  HFlex,
  Icon,
  InputControl,
  Menu,
  Panel,
  Popover,
  Typography,
} from '@devoinc/genesys-ui';

import { domainsConfig } from './data';
import { AppBarUserOptionsProps } from '../../AppBarUserOptions';
import { DomainItem } from './DomainItem';

interface DomainProps extends AppBarUserOptionsProps {}

export const Domain: React.FC<DomainProps> = ({ compact }) => {
  const [isSearching, setIsSearching] = React.useState(false);
  const [currentDomain, setCurrentDomain] = React.useState(
    'security_management',
  );
  const [defaultDomain, setDefaultDomain] = React.useState(
    'security_management',
  );
  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsSearching(!(value.trim() === ''));
  };
  return (
    <Popover
      id="appbar-time-zone-dropdown"
      placement="bottom-end"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [
              0,
              compact
                ? USER_OPTIONS_POPOVER_OFFSET_COMPACT + 2
                : USER_OPTIONS_POPOVER_OFFSET,
            ],
          },
        },
      ]}
    >
      {({ toggle, ref, isOpened }) => (
        <Box maxWidth="12.4rem">
          <Button
            colorScheme="quiet"
            aria-controls="appbar-domain-dropdown"
            aria-haspopup="true"
            aria-expanded={isOpened}
            size={compact ? 'xs' : 'lg'}
            state={isOpened ? 'expanded' : undefined}
            onClick={toggle}
            ref={ref as React.Ref<HTMLButtonElement>}
            tooltip="Change domain"
            wide
          >
            <HFlex spacing="cmp-xxs">
              <GIWorldEarthWorldwideInternationalLanguage
                size={compact ? '1.8rem' : '2rem'}
                style={{ position: 'relative', flex: '0 0 auto' }}
              />
              <Typography.Caption
                size={compact ? 'xs' : 'sm'}
                colorScheme="weak"
              >
                {currentDomain}
              </Typography.Caption>
            </HFlex>
          </Button>
        </Box>
      )}
      {({ setOpened }) => (
        <Panel
          elevation={'activated'}
          width={'36rem'}
          id={'appbar-domain-dropdown'}
          size="sm"
        >
          <Panel.Header
            bordered
            closeSettings={{
              onClick: () => setOpened?.(false),
              tooltip: 'Close this panel',
            }}
            title="Change domain"
            bottomContent={
              <Flex flex="1" marginBottom="cmp-xxs" marginTop="cmp-xs">
                <InputControl
                  aria-label="Search for domains"
                  type="search"
                  autoFocus
                  placeholder="Search domain..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    inputOnChange(e)
                  }
                  onBlur={() => setIsSearching(false)}
                />
              </Flex>
            }
          />
          <Panel.Body>
            <Menu cmpRole="menu">
              {isSearching ? (
                <Menu.Item
                  icon={
                    <Icon colorScheme="strong" size="xxs">
                      <GICheckOkRoundedFilled />
                    </Icon>
                  }
                  label="security_management"
                  state="active"
                  selectionScheme="single"
                />
              ) : (
                <>
                  {domainsConfig.map((domain, index) => (
                    <DomainItem
                      key={index}
                      active={currentDomain === domain.name}
                      domainState={domain.status}
                      label={domain.name}
                      state={
                        currentDomain === domain.name ? 'active' : 'enabled'
                      }
                      onSetAsDefault={() => {
                        setDefaultDomain(domain.name);
                      }}
                      onClick={() => setCurrentDomain(domain.name)}
                      defaultDomain={defaultDomain === domain.name}
                    />
                  ))}
                </>
              )}
            </Menu>
          </Panel.Body>
        </Panel>
      )}
    </Popover>
  );
};

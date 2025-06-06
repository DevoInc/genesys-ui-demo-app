import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GIAboutQuestionFaqHelp,
  GIChatMessageCommentBubbleTyping,
  GIDocumentFilePaperText,
  GIErrorWarningAlertAttention,
  GIIdea,
  GIVoiceLaudAnnouncementNews,
  GIWalkthrough,
  GIWindowNewExternFullScreenMaximize,
} from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../../constants';

import {
  Button,
  Flex,
  HFlex,
  Icon,
  IconButton,
  InputControl,
  Link,
  Menu,
  Panel,
  Popover,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

import { AppBarUserOptionsProps } from '../../AppBarUserOptions';
import { HelpItem } from './HelpItem';
import { helpCenterData } from './data';

export interface HelpCenterProps extends AppBarUserOptionsProps {}

export const HelpCenter: React.FC<HelpCenterProps> = ({ compact }) => {
  const theme = useTheme();
  const linkColor = theme.cmp.link.color.text.base;
  const label = 'Help & support';
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Popover
      id="appbar-help-center-dropdown"
      placement="bottom-end"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [
              0,
              compact
                ? USER_OPTIONS_POPOVER_OFFSET_COMPACT
                : USER_OPTIONS_POPOVER_OFFSET,
            ],
          },
        },
      ]}
    >
      {({ toggle, ref, isOpened }) => (
        <IconButton
          colorScheme="quiet"
          circular
          aria-controls="appbar-help-center-dropdown"
          aria-haspopup="true"
          aria-expanded={isOpened}
          onClick={toggle}
          ref={ref as React.Ref<HTMLButtonElement>}
          size={compact ? 'sm' : 'lg'}
          state={isOpened ? 'expanded' : undefined}
          tooltip={label}
        >
          <GIAboutQuestionFaqHelp
            size={compact ? '2.2rem' : '2.4rem'}
            style={{ position: 'relative' }}
          />
        </IconButton>
      )}
      {({ setOpened }) => (
        <Popover.Panel width="68rem" padding="0" minHeight="29rem">
          <Panel.Header
            title={label}
            closeSettings={{
              onClick: () => setOpened?.(false),
              tooltip: 'Close this panel',
            }}
            size="sm"
            bordered
            hasBoxShadow={false}
          />
          <Panel.Body size="sm" removeSpace>
            <HFlex spacing="0" alignItems="stretch" padding="cmp-sm 0">
              <HFlex.Item width="60%" padding="0 cmp-md 0 cmp-sm">
                <VFlex spacing="0" flex="0 0 auto" marginBottom="cmp-md">
                  <Flex flex="1" marginBottom="cmp-sm">
                    <InputControl
                      aria-label="Search help articles"
                      autoFocus
                      type="search"
                      placeholder="Search help articles"
                    />
                  </Flex>
                  <Typography.Paragraph size="lg" colorScheme="strong">
                    Because you are in{' '}
                    <Typography.Strong>Finder</Typography.Strong>
                  </Typography.Paragraph>
                </VFlex>
                <VFlex
                  overflow="auto"
                  spacing="0"
                  flex="1 1 100%"
                  maxHeight="48rem"
                >
                  <Typography.Heading gutterBottom="cmp-xxs" size="overline-sm">
                    <HFlex spacing="cmp-xs">
                      <Icon size="sm">
                        <GIDocumentFilePaperText />
                      </Icon>
                      Related articles
                    </HFlex>
                  </Typography.Heading>
                  <Menu cmpRole="nav">
                    {helpCenterData
                      .slice(0, 5)
                      .filter((helpItem) => helpItem.type === 'article')
                      .map((helpItem, idx) => {
                        return (
                          <HelpItem
                            key={idx}
                            label={helpItem.label}
                            description={helpItem.description}
                            type={helpItem.type}
                          />
                        );
                      })}
                    {showMore &&
                      helpCenterData
                        .slice(5, helpCenterData.length)
                        .filter((helpItem) => helpItem.type === 'article')
                        .map((helpItem, idx) => {
                          return (
                            <HelpItem
                              key={idx}
                              label={helpItem.label}
                              description={helpItem.description}
                              type={helpItem.type}
                            />
                          );
                        })}
                  </Menu>
                  <HFlex justifyContent="center" marginTop="cmp-xs">
                    <Button
                      size="xs"
                      colorScheme="quiet"
                      hasDropdown
                      state={showMore ? 'expanded' : 'enabled'}
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? 'Show less' : 'Show 2 more articles'}
                    </Button>
                  </HFlex>
                  <VFlex spacing="cmp-xxs" marginTop="cmp-lg">
                    <Typography.Heading
                      gutterBottom="cmp-xxs"
                      size="overline-sm"
                    >
                      <HFlex spacing="cmp-xs">
                        <Icon size="xxs">
                          <GIWalkthrough />
                        </Icon>
                        Related walkthroughs
                      </HFlex>
                    </Typography.Heading>
                    <Menu cmpRole="nav">
                      {helpCenterData
                        .filter((helpItem) => helpItem.type === 'walkthrough')
                        .map((helpItem, idx) => {
                          return (
                            <HelpItem
                              key={idx}
                              label={helpItem.label}
                              description={helpItem.description}
                              type={helpItem.type}
                            />
                          );
                        })}
                    </Menu>
                  </VFlex>
                </VFlex>
              </HFlex.Item>
              <HFlex.Item
                padding="0 cmp-sm 0 cmp-md"
                style={{
                  borderLeft: `solid 0.1rem ${theme.alias.color.border.separator.base.base}`,
                }}
                width="40%"
                display="flex"
              >
                <VFlex justifyContent="space-between" flex="1 1 100%">
                  <Menu>
                    <Menu.Item
                      icon={<GIIdea />}
                      label="First steps with Devo"
                      quiet
                    />
                    <Menu.Item
                      icon={<GIChatMessageCommentBubbleTyping />}
                      label="Contact support"
                      quiet
                    />
                    <Menu.Item
                      icon={<GIVoiceLaudAnnouncementNews />}
                      label="Give Feedback"
                      quiet
                    />
                    <Menu.Item
                      icon={<GIErrorWarningAlertAttention />}
                      label="Report a bug"
                      quiet
                    />
                    <Menu.Item
                      icon={
                        <GIWindowNewExternFullScreenMaximize
                          size={theme.alias.menus.itemIcon.size.square.sm}
                          color={linkColor}
                        />
                      }
                      label="Visit Documentation website"
                      linkStyled
                      quiet
                    />
                  </Menu>
                  <VFlex
                    flex="1"
                    justifyContent="flex-end"
                    spacing="cmp-xs"
                    paddingLeft="cmp-xs"
                  >
                    <Typography.Paragraph size="sm" colorScheme="weak">
                      Platform version: 7.1.56
                    </Typography.Paragraph>
                    <HFlex spacing="cmp-xs">
                      <Link
                        size="sm"
                        key="help-center-btn-1"
                        onClick={() => setOpened?.(false)}
                      >
                        Privacy policy
                      </Link>
                      <Link
                        size="sm"
                        key="help-center-btn-2"
                        onClick={() => setOpened?.(false)}
                      >
                        Terms of service
                      </Link>
                    </HFlex>
                  </VFlex>
                </VFlex>
              </HFlex.Item>
            </HFlex>
          </Panel.Body>
        </Popover.Panel>
      )}
    </Popover>
  );
};

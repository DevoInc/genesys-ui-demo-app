import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GIAboutQuestionFaqHelp,
  GIChatMessageCommentBubbleTyping,
  GIDocumentFilePaperText,
  GIErrorWarningAlertAttention,
  GIIdea,
  GIVoiceLaudAnnouncementNews,
  GIWindowNewExternFullScreenMaximize,
} from '@devoinc/genesys-icons';

import {
  USER_OPTIONS_POPOVER_OFFSET,
  USER_OPTIONS_POPOVER_OFFSET_COMPACT,
} from '../constants';

import {
  Button,
  Flex,
  HFlex,
  IconButton,
  InputControl,
  Menu,
  Panel,
  Popover,
  Typography,
} from '@devoinc/genesys-ui';

import { AppBarUserOptionsProps } from '../AppBarUserOptions';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HelpCenterProps extends AppBarUserOptionsProps {}

export const HelpCenter: React.FC<HelpCenterProps> = ({ compact }) => {
  const theme = useTheme();
  const linkColor = theme.cmp.link.color.text.base;
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
          ref={ref}
          size={compact ? 'sm' : 'lg'}
          state={isOpened ? 'expanded' : undefined}
        >
          <GIAboutQuestionFaqHelp
            size={compact ? '2.2rem' : '2.4rem'}
            style={{ position: 'relative' }}
          />
        </IconButton>
      )}
      {({ setOpened }) => (
        <Popover.Panel width="48rem">
          <Panel.Header
            title="Help center"
            closeSettings={{
              onClick: () => setOpened(false),
              tooltip: 'Close this panel',
            }}
            size="sm"
            bordered
          />
          <Panel.Header as="div" size="sm">
            <Flex flex="1">
              <InputControl
                aria-label="Search help articles"
                type="search"
                placeholder="Search help articles"
              />
            </Flex>
          </Panel.Header>
          <Panel.Body size="sm">
            <Typography.Paragraph
              size="lg"
              colorScheme="strong"
              gutterBottom="cmp-xs"
            >
              Related articles with{' '}
              <Typography.Italic>
                <Typography.Strong>Finder</Typography.Strong>
              </Typography.Italic>
            </Typography.Paragraph>
            <Menu cmpRole="nav">
              <Menu.Item
                unlimitedHeight
                href="#"
                icon={<GIDocumentFilePaperText />}
                label={
                  <Typography.Heading size="h6" as="span">
                    Edit a custom finder
                  </Typography.Heading>
                }
                bottomContent={
                  <Typography.Paragraph
                    as="span"
                    colorScheme="weak"
                    truncateLine={1}
                  >
                    Users with permission to manage finders can edit existing
                    custom...
                  </Typography.Paragraph>
                }
              />
              <Menu.Item
                unlimitedHeight
                href="#"
                icon={<GIDocumentFilePaperText />}
                label={
                  <Typography.Heading size="h6" as="span">
                    Create a custom finder
                  </Typography.Heading>
                }
                bottomContent={
                  <Typography.Paragraph
                    as="span"
                    colorScheme="weak"
                    truncateLine={1}
                  >
                    Users who have permission to manage finders, like those with
                    the pepe asdsad as dasd erer ddadsa...
                  </Typography.Paragraph>
                }
              />
            </Menu>
          </Panel.Body>
          <Panel.Footer as="div" size="sm" bordered>
            <Flex.Item flex="1">
              <Menu>
                <Menu.Item icon={<GIIdea />} label="First steps with Devo" />
                <Menu.Item
                  icon={<GIChatMessageCommentBubbleTyping />}
                  label="Contact support"
                />
                <Menu.Item
                  icon={<GIVoiceLaudAnnouncementNews />}
                  label="Give Feedback"
                />
                <Menu.Item
                  icon={<GIErrorWarningAlertAttention />}
                  label="Report a bug"
                />
                <Menu.Item
                  icon={
                    <GIWindowNewExternFullScreenMaximize
                      size={theme.alias.menus.itemIcon.size.square.sm}
                      color={linkColor}
                    />
                  }
                  label={
                    <Typography.Paragraph
                      as="span"
                      style={`color: ${linkColor}`}
                    >
                      <Typography.Strong>
                        Visit Documentation website
                      </Typography.Strong>
                    </Typography.Paragraph>
                  }
                />
              </Menu>
            </Flex.Item>
          </Panel.Footer>
          <Panel.Footer size="sm" bordered>
            <HFlex justifyContent="space-between" flex="1" alignItems="center">
              <Typography.Paragraph
                size="sm"
                gutterBottom="0"
                colorScheme="weak"
              >
                Platform version: 7.1.56
              </Typography.Paragraph>
              <HFlex justifyContent="flex-end" spacing="cmp-xxs">
                <Button
                  size="sm"
                  key="help-center-btn-1"
                  colorScheme="quiet"
                  onClick={() => setOpened(false)}
                >
                  Privacy policy
                </Button>
                <Button
                  size="sm"
                  key="help-center-btn-2"
                  colorScheme="quiet"
                  onClick={() => setOpened(false)}
                >
                  Terms of service
                </Button>
              </HFlex>
            </HFlex>
          </Panel.Footer>
        </Popover.Panel>
      )}
    </Popover>
  );
};

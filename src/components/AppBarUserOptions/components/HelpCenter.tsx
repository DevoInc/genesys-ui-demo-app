import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GIAboutQuestionFaqHelp,
  GIWindowNewExternFullScreenMaximize,
} from '@devoinc/genesys-icons';

import {
  Button,
  Flex,
  HFlex,
  IconButton,
  InputControl,
  Menu,
  Panel,
  Popper,
  Typography,
} from '@devoinc/genesys-ui';

export const HelpCenter = () => {
  const theme = useTheme();
  const linkColor = theme.cmp.link.color.text.base;
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <Popper
      placement="bottom-end"
      offset={[0, 0]}
      visible={isVisible}
      setIsVisible={setIsVisible}
      trigger={
        <IconButton
          size="lg"
          colorScheme="quiet"
          circular
          aria-controls="appbar-help-center-dropdown"
          aria-haspopup="true"
          aria-expanded={isVisible}
        >
          <GIAboutQuestionFaqHelp
            size="2.4rem"
            style={{ position: 'relative' }}
          />
        </IconButton>
      }
    >
      <Panel.Container
        elevation="activated"
        width="48rem"
        id="appbar-help-center-dropdown"
      >
        <Panel.Header
          title="Help center"
          closeSettings={{
            onClick: () => setIsVisible(false),
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
              icon="gi-document_file_paper_text"
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
              icon="gi-document_file_paper_text"
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
              <Menu.Item icon="gi-idea" label="First steps with Devo" />
              <Menu.Item
                icon="gi-chat_message_comment_bubble_typing"
                label="Contact support"
              />
              <Menu.Item
                icon="gi-voice_laud_announcement_news"
                label="Give Feedback"
              />
              <Menu.Item
                icon="gi-error_warning_alert_attention"
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
                    styles={`color: ${linkColor}`}
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
            <Typography.Paragraph size="sm" gutterBottom="0" colorScheme="weak">
              Platform version: 7.1.56
            </Typography.Paragraph>
            <HFlex justifyContent="flex-end" spacing="cmp-xxs">
              <Button
                size="sm"
                key="help-center-btn-1"
                colorScheme="quiet"
                onClick={() => setIsVisible(false)}
              >
                Privacy policy
              </Button>
              <Button
                size="sm"
                key="help-center-btn-2"
                colorScheme="quiet"
                onClick={() => setIsVisible(false)}
              >
                Terms of service
              </Button>
            </HFlex>
          </HFlex>
        </Panel.Footer>
      </Panel.Container>
    </Popper>
  );
};

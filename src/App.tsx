import * as React from 'react';
import {
  AppBar,
  AppLayout,
  Divider,
  PanelSection,
  Button,
  HFlex,
  IconButton,
  InputControl,
} from '@devoinc/genesys-ui';
import { Switch } from '@devoinc/genesys-ui-form';

import { useAppBarData } from './hooks';
import { Playground } from './components';

export const App = () => {
  const { actions, tabItems, selectedTab, compactMode, customContent } =
    useAppBarData();
  return (
    <AppLayout.Container>
      <AppLayout.Bar>
        <AppBar
          compact={compactMode}
          customContent={customContent}
          heading="Genesys UI Consumer"
          actions={compactMode ? undefined : actions}
          tabItems={tabItems}
        />
        {compactMode && (
          <>
            <Divider colorScheme="weak" margin="0" />
            <AppBar>
              <HFlex width="58rem" spacing="cmp-sm">
                <HFlex.Item flex="1 1 auto">
                  <InputControl
                    aria-label="Filter widgets"
                    placeholder="Filter widgets..."
                    type="search"
                  />
                </HFlex.Item>
                <Button colorScheme="accent">Add new widget</Button>
                <IconButton icon="gi-menu_alt_vertical" />
                <Divider vertical margin="0 cmp-xs" />
                <Switch label="Edit mode" id="edit-mode-control" />
              </HFlex>
              {actions}
            </AppBar>
            <Divider colorScheme="weak" margin="0" />
          </>
        )}
      </AppLayout.Bar>
      <AppLayout.Content>
        {compactMode ? (
          <Playground selectedTab={selectedTab} />
        ) : (
          <PanelSection
            title={selectedTab}
            subtitle={`Sample of components from ${selectedTab}`}
          >
            <Playground selectedTab={selectedTab} />
          </PanelSection>
        )}
      </AppLayout.Content>
    </AppLayout.Container>
  );
};

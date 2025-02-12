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
import { Switch } from '@devoinc/genesys-ui';

import { useAppBarData } from './hooks';
import { Playground } from './components';
import { GIMenuAltVertical } from '@devoinc/genesys-icons';

export const App = () => {
  const { actions, tabs, activeTab, compactMode, customContent } =
    useAppBarData();
  return (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar compact={compactMode} heading="Genesys UI Consumer" tabs={tabs}>
          <HFlex marginLeft="auto">
            {actions}
            {customContent}
          </HFlex>
        </AppBar>
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
                <IconButton icon={<GIMenuAltVertical />} />
                <Divider vertical margin="0 cmp-xs" />
                <Switch label="Edit mode" id="edit-mode-control" />
              </HFlex>
            </AppBar>
            <Divider colorScheme="weak" margin="0" />
          </>
        )}
      </AppLayout.Bar>
      <AppLayout.Content>
        {compactMode ? (
          <Playground selectedTab={activeTab?.id} />
        ) : (
          <PanelSection
            title={activeTab?.label}
            subtitle={`Sample of components from ${activeTab?.label}`}
          >
            <Playground selectedTab={activeTab?.id} />
          </PanelSection>
        )}
      </AppLayout.Content>
    </AppLayout>
  );
};

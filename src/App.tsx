import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  AppBar,
  AppLayout,
  Divider,
  PanelSection,
  Button,
  HFlex,
  IconButton,
  InputControl,
  Grid,
  Switch,
} from '@devoinc/genesys-ui';
import { GIMenuAltVertical } from '@devoinc/genesys-icons';

import { useAppBarData } from './hooks';
import { Playground } from './components';
import { MainMenu } from './components/Playground/components';

export const App = () => {
  const { actions, tabs, activeTab, compactMode, customContent } =
    useAppBarData();
  const [collapsed, setCollapsed] = React.useState(true);
  const theme = useTheme();
  return (
    <Grid
      gridTemplateAreas='"sidebar" "main"'
      gridTemplateColumns={`
        ${theme.cmp.appMenu.size.width[collapsed ? 'collapsed' : 'base']} 1fr`}
      gridTemplateRows="0 100vh"
      style={{ transition: 'all ease-out 0.4s' }}
    >
      <Grid.Item
        as="aside"
        gridArea="sidebar"
        gridColumn="1 / 2"
        gridRow="1 / 3"
      >
        <MainMenu
          collapsed={collapsed}
          onCollapseClick={() => setCollapsed(!collapsed)}
        />
      </Grid.Item>
      <Grid.Item as="main" gridArea="main" gridColumn="2 / 3" gridRow="2 / 3">
        <AppLayout>
          <AppLayout.Bar>
            <AppBar
              compact={compactMode}
              heading="Genesys UI Consumer"
              tabs={tabs}
            >
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
      </Grid.Item>
    </Grid>
  );
};

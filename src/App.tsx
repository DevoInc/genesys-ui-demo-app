import { AppBar, PanelSection } from '@devoinc/genesys-ui';

import { StyledAppLayoutContainer } from './styledComponents';

import { AppLayout } from './components/AppLayout';
import { Playground } from './components/Playground';
import { useAppBarData } from './hooks';
import { MainMenuContent } from './components/MainMenuContent';

export const App = () => {
  const { mainActions, tabs, selectedTab } = useAppBarData();
  return (
    <StyledAppLayoutContainer>
      <AppLayout.Global>
        <AppLayout.GlobalNav>
          <MainMenuContent />
        </AppLayout.GlobalNav>
        <AppLayout.GlobalContent>
          <AppLayout.App>
            <AppLayout.AppBar>
              <AppBar
                title='Genesys UI Consumer'
                mainActions={mainActions}
                tabs={tabs}
              />
            </AppLayout.AppBar>
            <AppLayout.AppMain>
              <PanelSection
                title={selectedTab}
                subtitle={`Sample of components from ${selectedTab}`}
              >
                <Playground selectedTab={selectedTab} />
              </PanelSection>
            </AppLayout.AppMain>
          </AppLayout.App>
        </AppLayout.GlobalContent>
      </AppLayout.Global>
    </StyledAppLayoutContainer>
  );
};

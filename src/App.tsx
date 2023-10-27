import { AppBar, AppLayout, PanelSection } from '@devoinc/genesys-ui';

import { useAppBarData } from './hooks';
import { Playground } from './components';

export const App = () => {
  const { actions, tabItems, selectedTab } = useAppBarData();
  return (
    <AppLayout.Container>
      <AppLayout.Bar>
        <AppBar
          heading='Genesys UI Consumer'
          actions={actions}
          tabItems={tabItems}
        />
      </AppLayout.Bar>
      <AppLayout.Content>
        <PanelSection
          title={selectedTab}
          subtitle={`Sample of components from ${selectedTab}`}
        >
          <Playground selectedTab={selectedTab} />
        </PanelSection>
      </AppLayout.Content>
    </AppLayout.Container>
  );
};

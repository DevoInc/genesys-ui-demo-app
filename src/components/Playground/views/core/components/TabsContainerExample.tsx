import { Tabs } from '@devoinc/genesys-ui';
import * as React from 'react';

export const TabsContainerExample = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Tabs contained={true} aria-label='DemoTabs'>
      <Tabs.Item
        icon='gi-check_thick'
        label='Tiny'
        onTabClick={() => setActiveTab(0)}
        state={activeTab === 0 ? 'selected' : undefined}
      />
      <Tabs.Item
        icon='gi-check_thick'
        label='Tab with a very very long title'
        onTabClick={() => setActiveTab(1)}
        state={activeTab === 1 ? 'selected' : undefined}
      />
      <Tabs.Item
        label='Normal tab'
        onTabClick={() => setActiveTab(2)}
        state={activeTab === 2 ? 'selected' : undefined}
      />
      <Tabs.Item
        label='Disabled tab'
        onTabClick={() => setActiveTab(3)}
        state='disabled'
      />
    </Tabs>
  );
};

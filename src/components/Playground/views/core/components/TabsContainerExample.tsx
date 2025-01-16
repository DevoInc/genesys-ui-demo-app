import { Tabs, useTabsAccessibility } from '@devoinc/genesys-ui';
import * as React from 'react';
import { GICheckThick } from '@devoinc/genesys-icons';

export const TabsContainerExample = () => {
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  useTabsAccessibility({ activeTab, tabsRef });
  return (
    <Tabs contained aria-label="DemoTabs">
      <Tabs.Item
        icon={<GICheckThick />}
        label="Tiny"
        onClick={() => setActiveTab(0)}
        state={activeTab === 0 ? 'selected' : undefined}
      />
      <Tabs.Item
        icon={<GICheckThick />}
        label="Tab with a very very long title"
        onClick={() => setActiveTab(1)}
        state={activeTab === 1 ? 'selected' : undefined}
      />
      <Tabs.Item
        label="Normal tab"
        onClick={() => setActiveTab(2)}
        state={activeTab === 2 ? 'selected' : undefined}
      />
      <Tabs.Item
        label="Disabled tab"
        onClick={() => setActiveTab(3)}
        state="disabled"
      />
    </Tabs>
  );
};

import * as React from 'react';
import { VFlex, AppBar, useTabsAccessibility, Tabs } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

const TabsCmp = () => {
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState(0);
  useTabsAccessibility({ activeTab, tabsRef });
  return (
    <Tabs colorScheme="primary">
      <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
        <Tabs.Item
          key="1"
          label="Item 1"
          onClick={() => setActiveTab(0)}
          size="lg"
          state={activeTab === 0 ? 'selected' : undefined}
        />
        <Tabs.Item
          key="2"
          onClick={() => setActiveTab(1)}
          state={activeTab === 1 ? 'selected' : undefined}
          size="lg"
          label="Item 2"
        />
        <Tabs.Item
          key="3"
          onClick={() => setActiveTab(2)}
          state={activeTab === 2 ? 'selected' : undefined}
          size="lg"
          label="Item 3"
        />
      </Tabs.List>
    </Tabs>
  );
};

export const AppBarExample = () => (
  <VFlex>
    <DefaultHeading>App Bar</DefaultHeading>
    <AppBar tabs={<TabsCmp />} sticky heading="AppBar heading" />
  </VFlex>
);

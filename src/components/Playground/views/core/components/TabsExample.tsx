import * as React from 'react';
import { Tabs, useTabsAccessibility, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const TabsExample = () => {
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  useTabsAccessibility({
    activeTab,
    tabsRef: tabsRef as React.MutableRefObject<HTMLDivElement>,
  });
  return (
    <VFlex>
      <DefaultHeading>Tabs</DefaultHeading>
      <Tabs contained aria-label="DemoTabs">
        <Tabs.List
          activeTabIndex={activeTab}
          ref={tabsRef as React.Ref<HTMLDivElement>}
        >
          <Tabs.Item
            label="First tab"
            onClick={() => setActiveTab(0)}
            state={activeTab === 0 ? 'selected' : undefined}
          />
          <Tabs.Item
            label="Tab with a very very long label"
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
        </Tabs.List>
      </Tabs>
    </VFlex>
  );
};

import * as React from 'react';
import { Button, HFlex, Tabs, useTabsAccessibility } from '@devoinc/genesys-ui';
import { useSchema } from '../providers/ThemeProvider';
import { AppBarUserOptions } from '../components/AppBarUserOptions';
import { GIArrowLeft } from '@devoinc/genesys-icons';

type UseAppBarData = () => {
  compactMode: boolean;
  tabs: React.ReactNode;
  activeTab: { id: number; label: string };
  actions: AppBarProps['actions'];
  customContent: AppBarProps['customContent'];
};

export const useAppBarData: UseAppBarData = () => {
  const data = [
    { id: 0, label: 'Core' },
    { id: 1, label: 'Form' },
    { id: 2, label: 'DateTime' },
    { id: 3, label: 'Code' },
    { id: 4, label: 'Compact AppBar' },
  ];
  const isEqualObj = (obj1: object, obj2: object) =>
    JSON.stringify(obj1) === JSON.stringify(obj2);
  const { schema, toggleSchema } = useSchema();
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState(data[0]);
  useTabsAccessibility({ activeTab: activeTab?.id, tabsRef });
  const compactMode = isEqualObj(activeTab, data[4]);

  const tabs = React.useMemo(
    () =>
      compactMode ? undefined : (
        <Tabs colorScheme="primary">
          <Tabs.List activeTabIndex={activeTab.id} ref={tabsRef}>
            <Tabs.Item
              key="core"
              label="Core"
              onClick={() => setActiveTab(data[0])}
              state={isEqualObj(activeTab, data[0]) ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="form"
              label="Form"
              onClick={() => setActiveTab(data[1])}
              state={isEqualObj(activeTab, data[1]) ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="datetime"
              label="Datetime"
              onClick={() => setActiveTab(data[2])}
              state={isEqualObj(activeTab, data[2]) ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="code"
              label="Code"
              onClick={() => setActiveTab(data[3])}
              state={isEqualObj(activeTab, data[3]) ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="compact"
              label="Compact AppBar"
              onClick={() => setActiveTab(data[4])}
              state={isEqualObj(activeTab, data[4]) ? 'selected' : 'enabled'}
              size="lg"
            />
          </Tabs.List>
        </Tabs>
      ),
    [compactMode, activeTab],
  );

  const actions = React.useMemo(() => {
    return [
      /**
       * TODO:
       * react-dom.development.js:86 Warning: styled.input contains an input of
       * type checkbox with both checked and defaultChecked props. Input elements
       * must be either controlled or uncontrolled (specify either the checked prop,
       * or the defaultChecked prop, but not both).
       */
      <HFlex spacing={`cmp-${compactMode ? 'xs' : 'sm'}`} key="one">
        {compactMode && (
          <Button
            size="sm"
            colorScheme="quiet"
            icon={<GIArrowLeft />}
            onClick={() => setActiveTab(data[0])}
          >
            Back to Core
          </Button>
        )}
        <Button
          size={compactMode ? 'sm' : undefined}
          key="1"
          selectionScheme="multiple"
          onChange={toggleSchema}
        >
          {schema === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        </Button>
      </HFlex>,
    ];
  }, [compactMode, schema, activeTab, toggleSchema]);

  const customContent = React.useMemo(() => {
    return <AppBarUserOptions compact={compactMode} />;
  }, [compactMode]);

  return { activeTab, tabs, actions, compactMode, customContent };
};

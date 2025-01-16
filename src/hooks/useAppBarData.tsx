import * as React from 'react';
import {
  Button,
  HFlex,
  Tabs,
  AppBarProps,
  useTabsAccessibility,
} from '@devoinc/genesys-ui';
import { useSchema } from '../providers/ThemeProvider';
import { AppBarUserOptions } from '../components/AppBarUserOptions';
import { GIArrowLeft } from '@devoinc/genesys-icons';

type UseAppBarData = () => {
  compactMode: boolean;
  tabs: React.ReactNode;
  activeTab: number;
  actions: AppBarProps['actions'];
  customContent: AppBarProps['customContent'];
};

export const useAppBarData: UseAppBarData = () => {
  const { schema, toggleSchema } = useSchema();
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  useTabsAccessibility({ activeTab, tabsRef });
  const compactMode = activeTab === 4;

  const tabs = React.useMemo(
    () =>
      compactMode ? undefined : (
        <Tabs>
          <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
            <Tabs.Item
              key="core"
              label="Core"
              onClick={() => setActiveTab(0)}
              state={activeTab === 0 ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="form"
              label="Form"
              onClick={() => setActiveTab(1)}
              state={activeTab === 1 ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="datetime"
              label="Datetime"
              onClick={() => setActiveTab(2)}
              state={activeTab === 2 ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="code"
              label="Code"
              onClick={() => setActiveTab(3)}
              state={activeTab === 3 ? 'selected' : 'enabled'}
              size="lg"
            />
            <Tabs.Item
              key="compact"
              label="Compact AppBar"
              onClick={() => setActiveTab(4)}
              state={activeTab === 4 ? 'selected' : 'enabled'}
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
            colorScheme="quiet"
            icon={<GIArrowLeft />}
            onClick={() => setActiveTab(0)}
          >
            Back to Core
          </Button>
        )}
        <Button
          size="md"
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

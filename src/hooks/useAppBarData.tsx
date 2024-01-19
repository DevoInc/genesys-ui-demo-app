import * as React from 'react';
import { Button, HFlex, Tabs, AppBarProps } from '@devoinc/genesys-ui';
import { useSchema } from '../providers/ThemeProvider';
import { AppBarUserOptions } from '../components/AppBarUserOptions';

type UseAppBarData = () => {
  compactMode: boolean;
  tabItems: AppBarProps['tabItems'];
  selectedTab: string;
  actions: AppBarProps['actions'];
  customContent: AppBarProps['customContent'];
};

export const useAppBarData: UseAppBarData = () => {
  const { schema, toggleSchema } = useSchema();
  const [selectedTab, setSelectedTab] = React.useState('Core');
  const compactMode = selectedTab === 'Compact AppBar';

  const tabItems = React.useMemo(
    () =>
      compactMode
        ? undefined
        : [
            <Tabs.Item
              key="core"
              label="Core"
              onClick={() => setSelectedTab('Core')}
              state={selectedTab === 'Core' ? 'selected' : 'enabled'}
              size="lg"
            />,
            <Tabs.Item
              key="form"
              label="Form"
              onClick={() => setSelectedTab('Form')}
              state={selectedTab === 'Form' ? 'selected' : 'enabled'}
              size="lg"
            />,
            <Tabs.Item
              key="datetime"
              label="Datetime"
              onClick={() => setSelectedTab('Datetime')}
              state={selectedTab === 'Datetime' ? 'selected' : 'enabled'}
              size="lg"
            />,
            <Tabs.Item
              key="code"
              label="Code"
              onClick={() => setSelectedTab('Code')}
              state={selectedTab === 'Code' ? 'selected' : 'enabled'}
              size="lg"
            />,
            <Tabs.Item
              key="compact"
              label="Compact AppBar"
              onClick={() => setSelectedTab('Compact AppBar')}
              state={selectedTab === 'Compact AppBar' ? 'selected' : 'enabled'}
              size="lg"
            />,
          ],
    [compactMode, selectedTab],
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
      <HFlex
        marginLeft="auto"
        spacing={`cmp-${compactMode ? 'xs' : 'sm'}`}
        key="one"
      >
        {compactMode && (
          <Button
            colorScheme="quiet"
            icon="gi-arrow_left"
            size="md"
            onClick={() => setSelectedTab('Core')}
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
  }, [compactMode, schema, selectedTab, toggleSchema]);

  const customContent = React.useMemo(() => {
    return <AppBarUserOptions compact={compactMode} />;
  }, [compactMode]);

  return { selectedTab, tabItems, actions, compactMode, customContent };
};

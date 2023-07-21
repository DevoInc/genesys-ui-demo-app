import * as React from 'react';
import { Button, Tabs, TabsItemProps } from '@devoinc/genesys-ui';
import { useSchema } from '../providers/ThemeProvider';

type UseAppBarData = () => {
  tabItems: React.ReactElement<TabsItemProps>[];
  selectedTab: string;
  actions: React.ReactElement[];
};

export const useAppBarData: UseAppBarData = () => {
  const { schema, toggleSchema } = useSchema();

  const [selectedTab, setSelectedTab] = React.useState('Core');

  const tabItems = React.useMemo(
    () => [
      <Tabs.Item
        key='core'
        label='Some components from Core'
        onTabClick={() => setSelectedTab('Core')}
        state={selectedTab === 'Core' ? 'selected' : 'enabled'}
      />,
      <Tabs.Item
        key='form'
        label='A few from Form'
        onTabClick={() => setSelectedTab('Form')}
        state={selectedTab === 'Form' ? 'selected' : 'enabled'}
      />,
      <Tabs.Item
        key='datetime'
        label='Some others from Datetime'
        onTabClick={() => setSelectedTab('Datetime')}
        state={selectedTab === 'Datetime' ? 'selected' : 'enabled'}
      />,
    ],
    [selectedTab]
  );

  const actions = React.useMemo(
    () => [
      /**
       * TODO:
       * react-dom.development.js:86 Warning: styled.input contains an input of
       * type checkbox with both checked and defaultChecked props. Input elements
       * must be either controlled or uncontrolled (specify either the checked prop,
       * or the defaultChecked prop, but not both).
       */
      <Button key='1' selectionScheme='multiple' onChange={toggleSchema}>
        {schema === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </Button>,
    ],
    [schema, toggleSchema]
  );

  return { selectedTab, tabItems, actions };
};

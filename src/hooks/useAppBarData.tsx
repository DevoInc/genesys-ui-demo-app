import * as React from 'react';
import { Button } from '@devoinc/genesys-ui';
import { useSchema } from '../providers/ThemeProvider';
import {
  // TODO: export types correctly
  AppBarActionsType,
  AppBarTabsType,
} from '@devoinc/genesys-ui/dist/components/AppBar/declarations';

type UseAppBarData = () => {
  tabs: AppBarTabsType;
  selectedTab: string;
  mainActions: AppBarActionsType;
};

export const useAppBarData: UseAppBarData = () => {
  const { schema, toggleSchema } = useSchema();

  const [selectedTab, setSelectedTab] = React.useState('Core');

  const tabs: AppBarTabsType = React.useMemo(
    () => [
      {
        label: 'Some components from Core',
        onTabClick: () => setSelectedTab('Core'),
      },
      { label: 'A few from Form', onTabClick: () => setSelectedTab('Form') },
      {
        label: 'Some others from Datetime',
        onTabClick: () => setSelectedTab('Datetime'),
      },
    ],
    []
  );

  const mainActions: AppBarActionsType = React.useMemo(
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

  return { selectedTab, tabs, mainActions };
};

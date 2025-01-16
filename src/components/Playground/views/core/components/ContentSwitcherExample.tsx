import { ContentSwitcher } from '@devoinc/genesys-ui';
import * as React from 'react';
import {
  GIActivity,
  GIFingerprintScanSecurityAccess,
  GIGaugeDashboardFullFuel,
  GIHeartFull,
} from '@devoinc/genesys-icons';

export const options = [
  {
    icon: <GIActivity />,
    id: 'first',
    label: 'First content',
  },
  {
    icon: <GIGaugeDashboardFullFuel />,
    id: 'second',
    label: 'Second content',
  },
  {
    icon: <GIFingerprintScanSecurityAccess />,
    id: 'third',
    label: 'Third content',
  },
  {
    icon: <GIHeartFull />,
    id: 'fourth',
    label: 'Fourth content',
  },
];

export const ContentSwitcherExample = () => {
  const [selection, setSelection] = React.useState('second');
  console.info(selection);
  return (
    <ContentSwitcher size="md">
      {options.map((option) => (
        <ContentSwitcher.Item
          id={option.id}
          icon={option.icon}
          key={option.id}
          state={option.id === selection ? 'selected' : 'enabled'}
          onChange={() => {
            setSelection(option.id);
          }}
        >
          {option.label}
        </ContentSwitcher.Item>
      ))}
    </ContentSwitcher>
  );
};

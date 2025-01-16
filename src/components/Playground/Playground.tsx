/* eslint-disable indent */
import * as React from 'react';
import { CoreView } from './views/core/CoreView';
import { DatetimeView } from './views/datetime/DatetimeView';
import { FormView } from './views/form/FormView';
import { CodeView } from './views/code/CodeView';
import { CompactView } from './views/compact/CompactView';

export interface PlaygroundProps {
  selectedTab: number;
}

export const Playground: React.FC<PlaygroundProps> = ({ selectedTab }) => {
  switch (selectedTab) {
    case 0:
      return <CoreView />;
    case 1:
      return <FormView />;
    case 2:
      return <DatetimeView />;
    case 3:
      return <CodeView />;
    case 4:
      return <CompactView />;
    default:
      return <CoreView />;
  }
};

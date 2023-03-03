/* eslint-disable indent */
import * as React from 'react';
import { CoreView } from './views/core/CoreView';
import { DatetimeView } from './views/datetime/DatetimeView';
import { FormView } from './views/form/FormView';

export interface PlaygroundProps {
  selectedTab: string;
}

export const Playground: React.FC<PlaygroundProps> = ({ selectedTab }) => {
  switch (selectedTab) {
    case 'Core':
      return <CoreView />;
    case 'Form':
      return <FormView />;
    case 'Datetime':
      return <DatetimeView />;
    default:
      return <CoreView />;
  }
};

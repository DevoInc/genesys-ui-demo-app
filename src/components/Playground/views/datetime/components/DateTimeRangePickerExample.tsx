import * as React from 'react';
import { subMonths } from 'date-fns';
import {
  DateTimeRangeFloatingPicker,
  getDefaultPresets,
} from '@devoinc/genesys-ui-datetime';

export const DateTimeRangePickerExample = () => {
  const now = new Date().getTime();
  const defaultValue = [
    subMonths(new Date(), 1).getTime(),
    new Date().getTime(),
  ];
  const [value, setValue] = React.useState(defaultValue);
  return (
    <DateTimeRangeFloatingPicker
      id="datetime-range-picker"
      weekDays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      presets={getDefaultPresets(now)}
      realTime={'activated'}
      onCancel={() => ({})}
      disableApplyButton={false}
    />
  );
};

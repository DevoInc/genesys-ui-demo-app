import * as React from 'react';
import { DateTimeRangePicker } from '@devoinc/genesys-ui-datetime';

export const DateTimeRangePickerExample = () => {
  const [date, setDate] = React.useState({
    from: new Date().getTime() - 1000 * 60 * 60 * 24 * 7,
    to: new Date().getTime(),
  });

  const presetValues = ['now()', 'now() - 5m', 'now() - 1d', 'now() - 15d'];

  const presets = [
    {
      label: 'Custom',
      options: [
        {
          type: 'relative',
          value: {
            from: presetValues[1],
            to: 'now()',
          },
          label: 'Last 5 minutes',
        },
        {
          type: 'relative',
          value: {
            from: presetValues[2],
            to: 'now()',
          },
          label: 'Last 1 day',
        },
        {
          type: 'relative',
          value: {
            from: presetValues[3],
            to: 'now()',
          },
          label: 'Last 15 days',
        },
      ],
    },
  ];

  const expressionValuesMap = {
    [presetValues[0]]: () => new Date().getTime(),
    [presetValues[1]]: () => new Date().getTime() - 1000 * 60 * 5,
    [presetValues[2]]: () => new Date().getTime() - 1000 * 60 * 60 * 24,
    [presetValues[3]]: () => new Date().getTime() - 1000 * 60 * 60 * 24 * 15,
  };

  const expresionToTimeCallback = (preset: string): number => {
    return expressionValuesMap[preset]();
  };

  return (
    <DateTimeRangePicker
      dateForMonth={new Date().getTime()}
      weekDays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
      value={date}
      onChange={(d) => setDate(d)}
      expresionToTime={expresionToTimeCallback}
      presets={presets}
      realTimeState={'inactive'}
      onApply={() => ({})}
      onCancel={() => ({})}
      onBlur={() => ({})}
      disableApplyButton={false}
    />
  );
};

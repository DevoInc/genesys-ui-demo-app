import * as React from 'react';
import { Select, SelectControlProps, TSelectOption } from '@devoinc/genesys-ui';

export const SelectExample = () => {
  const [value, setValue] = React.useState<SelectControlProps['value']>();
  return (
    <Select
      id="select-example"
      label="Select label"
      helper="This is the helper for the select."
      options={[
        { value: 1, label: 'Option one' },
        { value: 2, label: 'Option two' },
        { value: 3, label: 'Option three' },
      ]}
      onChange={(opt: TSelectOption) => setValue(opt.value)}
      value={value}
    />
  );
};

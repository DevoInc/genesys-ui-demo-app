import * as React from 'react';
import { Checkbox, CheckboxGroup } from '@devoinc/genesys-ui-form';

export const CheckBoxGroupExample = () => (
  <CheckboxGroup
    direction='column'
    hasLegendLabelFormat={true}
    legend='Checkbox group legend'
    legendPosition='top'
    status='base'
  >
    <>
      <Checkbox id='' label='Checkbox one' />
      <Checkbox id='' label='Checkbox two' />
      <Checkbox id='' label='Checkbox three' />
    </>
  </CheckboxGroup>
);

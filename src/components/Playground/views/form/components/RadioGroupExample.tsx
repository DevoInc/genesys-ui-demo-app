import { Radio, RadioGroup } from '@devoinc/genesys-ui-form';

export const RadioGroupExample = () => (
  <RadioGroup
    direction='column'
    hasLegendLabelFormat={true}
    legend='Radio group legend'
    legendPosition='top'
    status='base'
  >
    <>
      <Radio
        id='radio-one-id'
        name='Name for radio'
        label='Radio one'
        defaultChecked
      />
      <Radio id='radio-two-id' name='Name for radio' label='Radio two' />
      <Radio id='radio-three-id' name='Name for radio' label='Radio three' />
    </>
  </RadioGroup>
);

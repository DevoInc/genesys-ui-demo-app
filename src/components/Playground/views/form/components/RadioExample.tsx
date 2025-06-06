import * as React from 'react';
import { Radio, RadioControl, RadioGroup, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const RadioExample = () => (
  <VFlex spacing="cmp-lg">
    <VFlex spacing="cmp-xs">
      <DefaultHeading>Radio Control</DefaultHeading>
      <RadioControl aria-label="radio-example" />
    </VFlex>
    <VFlex spacing="cmp-xs">
      <DefaultHeading>Radio</DefaultHeading>
      <Radio id="radio-example" label="Radio example label" />
    </VFlex>
    <VFlex spacing="0">
      <DefaultHeading>Radio Group</DefaultHeading>
      <RadioGroup legend="Radio group legend">
        <>
          <Radio name="radio-example" id="radio-example-1" label="Radio one" />
          <Radio name="radio-example" id="radio-example-2" label="Radio two" />
          <Radio
            name="radio-example"
            id="radio-example-3"
            label="Radio three"
          />
        </>
      </RadioGroup>
    </VFlex>
  </VFlex>
);

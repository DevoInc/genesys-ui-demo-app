import * as React from 'react';
import {
  Checkbox,
  CheckboxControl,
  CheckboxGroup,
  VFlex,
} from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const CheckboxExample = () => (
  <VFlex spacing="cmp-lg">
    <VFlex spacing="cmp-xs">
      <DefaultHeading>Checkbox Control</DefaultHeading>
      <CheckboxControl aria-label="example" />
    </VFlex>
    <VFlex spacing="cmp-xs">
      <DefaultHeading>Checkbox</DefaultHeading>
      <Checkbox id="checkbox-example" label="Checkbox example label" />
    </VFlex>
    <VFlex spacing="0">
      <DefaultHeading>Checkbox Group</DefaultHeading>
      <CheckboxGroup
        direction="column"
        hasLegendLabelFormat={true}
        legend="Checkbox group legend"
        legendPosition="top"
        status="base"
      >
        <>
          <Checkbox id="checkbox-example-1" label="Checkbox one" />
          <Checkbox id="checkbox-example-2" label="Checkbox two" />
          <Checkbox id="checkbox-example-3" label="Checkbox three" />
        </>
      </CheckboxGroup>
    </VFlex>
  </VFlex>
);

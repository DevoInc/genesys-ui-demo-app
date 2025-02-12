import * as React from 'react';
import { HFlex, Typography, VFlex } from '@devoinc/genesys-ui';
import {
  CheckboxExample,
  ChipExample,
  ChoiceGroupExample,
  ColorPickerExample,
  FieldsCombinerExample,
  FormExample,
  InputExample,
  RadioExample,
  SelectExample,
  SwitchExample,
  TextareaExample,
  UploadFilesExample,
} from './components';

export const FormView: React.FC = () => {
  return (
    <VFlex spacing="cmp-xxl">
      <HFlex spacing="layout-xl" alignItems="flex-start">
        <VFlex flex="1 1 50%" spacing="layout-sm">
          <VFlex>
            <Typography.Heading size="h4">Input</Typography.Heading>
            <InputExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Textarea</Typography.Heading>
            <TextareaExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Textarea</Typography.Heading>
            <SelectExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Switch</Typography.Heading>
            <SwitchExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Checkbox</Typography.Heading>
            <VFlex spacing="layout-sm">
              <CheckboxExample />
            </VFlex>
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Radio</Typography.Heading>
            <VFlex spacing="layout-sm">
              <RadioExample />
            </VFlex>
          </VFlex>
        </VFlex>
        <VFlex flex="1 1 50%" spacing="layout-md">
          <VFlex>
            <Typography.Heading size="h4">Chip</Typography.Heading>
            <ChipExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Choice Group</Typography.Heading>
            <ChoiceGroupExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Fields Combiner</Typography.Heading>
            <FieldsCombinerExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Upload Files</Typography.Heading>
            <UploadFilesExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Color Picker</Typography.Heading>
            <ColorPickerExample />
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Form Group</Typography.Heading>
            <FormExample />
          </VFlex>
        </VFlex>
      </HFlex>
    </VFlex>
  );
};

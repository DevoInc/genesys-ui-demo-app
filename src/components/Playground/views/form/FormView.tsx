import * as React from 'react';
import { Flex } from '@devoinc/genesys-ui';
import {
  CheckBoxGroupExample,
  ColorPickerExample,
  RadioGroupExample,
  SwitchExample,
  UploadFilesExample,
} from './components';

export const FormView: React.FC = () => {
  return (
    <Flex flexDirection='column' gap='cmp-xxl'>
      <Flex justifyContent='space-around'>
        <CheckBoxGroupExample />
        <ColorPickerExample />
        <SwitchExample />
        <RadioGroupExample />
      </Flex>
      <UploadFilesExample />
    </Flex>
  );
};

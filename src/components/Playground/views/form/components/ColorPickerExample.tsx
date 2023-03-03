import { ColorPicker } from '@devoinc/genesys-ui-form';
import React from 'react';

export const ColorPickerExample = () => {
  const [state, setState] = React.useState({ color: '#234567' });
  return (
    <ColorPicker
      colorIndicatorType='circle'
      defaultValue='#000'
      id='color-picker-id'
      label='Label for story'
      labelPosition='top'
      liveUpdate={false}
      size='md'
      status='base'
      value={state.color}
      presetColors={['rgba(143,36,36,1)', 'rgba(143,36,36,0.5)']}
      onChange={(color) => {
        setState({ color });
        window.console.debug('Change color to:', color);
      }}
    />
  );
};

import { Select2Control } from '@devoinc/genesys-ui';

export const Select2ControlExample = () => {
  return (
    <Select2Control
      aria-label='select-control'
      id={'select-control'}
      size={'lg'}
      selectWidth='xl'
      options={[
        { value: 1, label: 'Option one' },
        { value: 2, label: 'Option two' },
      ]}
    />
  );
};

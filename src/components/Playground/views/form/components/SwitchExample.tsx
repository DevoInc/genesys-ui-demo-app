import { Switch } from '@devoinc/genesys-ui-form';
import { useSchema } from '../../../../../providers/ThemeProvider';

export const SwitchExample = () => {
  const { toggleSchema, schema } = useSchema();

  return (
    <Switch
      id='switch'
      label='How about a bit of darkness?'
      onChange={toggleSchema}
      checked={schema === 'dark'}
    />
  );
};

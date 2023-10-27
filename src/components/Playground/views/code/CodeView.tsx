import { Flex } from '@devoinc/genesys-ui';
import { DiffEditorExample, EditorExample } from './components';

export const CodeView: React.FC = () => {
  return (
    <Flex flexDirection='column' gap='cmp-xl'>
      <EditorExample />
      <DiffEditorExample />
    </Flex>
  );
};

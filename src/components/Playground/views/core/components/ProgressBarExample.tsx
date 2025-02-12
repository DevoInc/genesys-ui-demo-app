import * as React from 'react';
import { ProgressBar, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const ProgressBarExample = () => (
  <VFlex>
    <DefaultHeading>Progress Bar</DefaultHeading>
    <ProgressBar
      colorScheme="dark"
      customInfo={{
        startInfo: 'Progressing status',
      }}
      percent={48}
      showStatus
      size="md"
      status="progressing"
      type="standard"
    />
  </VFlex>
);

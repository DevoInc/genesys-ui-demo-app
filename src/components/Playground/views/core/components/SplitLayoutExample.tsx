import * as React from 'react';
import {
  VFlex,
  Box,
  SplitLayout,
  useSyncSplitResize,
  Typography,
} from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const SplitLayoutExample = () => {
  type TSizes = (string | number)[];
  const [sizes, setSizes] = React.useState<TSizes>(['30%', '70%']);
  const { onChange } = useSyncSplitResize({ setSizes });
  return (
    <VFlex>
      <DefaultHeading>Split Layout</DefaultHeading>
      <Box height="20rem" flex="1 1 auto">
        <SplitLayout showDragGhost={false} sizes={sizes} onChange={onChange}>
          <Box
            overflow="hidden"
            style={{ backgroundColor: 'rgba(63, 187, 226, 0.2)' }}
          >
            <Box padding="cmp-md">
              <Typography.Paragraph>Left</Typography.Paragraph>
            </Box>
          </Box>
          <Box
            padding="cmp-md"
            overflow="hidden"
            style={{ backgroundColor: 'rgba(51, 255, 159, 0.2)' }}
          >
            <Typography.Paragraph>Right</Typography.Paragraph>
          </Box>
        </SplitLayout>
      </Box>
    </VFlex>
  );
};

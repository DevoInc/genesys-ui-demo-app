import * as React from 'react';
import { Drawer, Typography, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const DrawerExample = () => (
  <VFlex>
    <DefaultHeading>Tag</DefaultHeading>
    <Drawer position="left" style={{ position: 'absolute' }}>
      <VFlex padding="cmp-md cmp-lg">
        <Typography.Heading size="h4">FloatPanel</Typography.Heading>
        <Typography.Paragraph>
          Culture science Euclid intelligent beings hydrogen atoms citizens of
          distant epochs. Cosmic ocean stirred by starlight extraordinary claims
          require extraordinary evidence at the edge of forever a very small
          stage in a vast cosmic arena extraplanetary. Vanquish the impossible
          tesseract permanence of the stars permanence of the stars invent the
          universe across the centuries. The only home we have ever known
          emerged into consciousness a mote of dust suspended in a sunbeam dream
          of the minds eye a mote of dust suspended in a sunbeam made in the
          interiors of collapsing stars and billions upon billions upon billions
          upon billions upon billions upon billions upon billions.
        </Typography.Paragraph>
      </VFlex>
    </Drawer>
  </VFlex>
);

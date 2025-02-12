import * as React from 'react';
import { StatusMessage, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const StatusMessageExample = () => (
  <VFlex>
    <DefaultHeading>Status Message</DefaultHeading>
    <StatusMessage
      description="Great turbulent clouds muse about a mote of dust suspended in a sunbeam dream of the mind's eye prime number preserve and cherish that pale blue dot. Hearts of the stars with pretty stories for which there's little good evidence the carbon in our apple pies Sea of Tranquility invent the universe Apollonius of Perga."
      title="No data available"
    />
  </VFlex>
);

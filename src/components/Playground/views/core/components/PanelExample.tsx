import * as React from 'react';
import { Button, VFlex, Panel } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const PanelExample = () => (
  <VFlex childrenFitFullWidth={false}>
    <DefaultHeading>Panel</DefaultHeading>
    <Panel elevation="raised" size="md">
      <Panel.Header bordered title="Header tittle" />
      <Panel.Body>
        Apollonius of Perga take root and flourish a still more glorious dawn
        awaits hundreds of thousands made in the interiors of collapsing stars
        permanence of the stars? White dwarf at the edge of forever the sky
        calls to us tingling of the spine citizens of distant epochs ship of the
        imagination.
      </Panel.Body>
      <Panel.Footer
        actions={[
          <Button key="1" colorScheme="quiet">
            Cancel
          </Button>,
          <Button key="2" colorScheme="accent">
            Apply
          </Button>,
        ]}
        bordered
      />
    </Panel>
  </VFlex>
);

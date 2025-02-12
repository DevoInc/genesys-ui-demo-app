import * as React from 'react';
import { HFlex, Loader, Panel, Typography, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';
import { lorem } from '../../../../../helpers';

export const LoaderExample = () => (
  <VFlex>
    <DefaultHeading>Loader</DefaultHeading>
    <HFlex>
      <Panel>
        <Panel.Body>
          <Typography.Paragraph gutterBottom="cmp-md">
            {lorem}
          </Typography.Paragraph>
          <Loader>
            <Loader.Spinner />
          </Loader>
        </Panel.Body>
      </Panel>
      <Panel>
        <Panel.Body>
          <Typography.Paragraph gutterBottom="cmp-md">
            {lorem}
          </Typography.Paragraph>
          <Loader>
            <Loader.ProgressBar percent={32} />
          </Loader>
        </Panel.Body>
      </Panel>
      <Panel>
        <Panel.Body>
          <Typography.Paragraph gutterBottom="cmp-md">
            {lorem}
          </Typography.Paragraph>
          <Loader>
            <Loader.GradientContainer>
              <Loader.Spinner />
            </Loader.GradientContainer>
          </Loader>
        </Panel.Body>
      </Panel>
    </HFlex>
    <Panel>
      <Panel.Body>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Loader colorScheme="dark">
          <Loader.DevoLogoSpinner />
        </Loader>
      </Panel.Body>
    </Panel>
  </VFlex>
);

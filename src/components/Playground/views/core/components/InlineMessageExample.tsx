import * as React from 'react';
import { InlineMessage, Typography, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const InlineMessageExample = () => (
  <VFlex>
    <DefaultHeading>Inline Message</DefaultHeading>
    <InlineMessage
      id="inline-message"
      placement="right"
      state="enabled"
      status="help"
    >
      <InlineMessage.Panel>
        <Typography.Paragraph>This is an inline message</Typography.Paragraph>
      </InlineMessage.Panel>
    </InlineMessage>
  </VFlex>
);

import * as React from 'react';
import { VFlex, Collapse, Box, Typography } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';
import { lorem } from '../../../../../helpers';

export const CollapseExample = () => {
  const [expanded, setExpanded] = React.useState(false);
  const contentId = 'accessibility';
  return (
    <VFlex>
      <DefaultHeading>Collapse</DefaultHeading>
      <VFlex spacing="0">
        <Collapse
          heading="Collapse heading"
          aria-controls={contentId}
          expanded={expanded}
          onClick={() => {
            setExpanded(!expanded);
          }}
        />
        {expanded && (
          <Box
            id={contentId}
            maxHeight={'190px'}
            overflow={'auto'}
            padding={'cmp-sm cmp-md'}
          >
            <Typography.Paragraph>{lorem}</Typography.Paragraph>
          </Box>
        )}
      </VFlex>
    </VFlex>
  );
};

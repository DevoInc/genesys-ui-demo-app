import * as React from 'react';
import { VFlex, Thumbnail } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const ThumbnailExample = () => (
  <VFlex childrenFitFullWidth={false}>
    <DefaultHeading>Thumbnail</DefaultHeading>
    <Thumbnail
      borderRadius="0.6rem"
      width="18rem"
      alt="Profile image"
      src="https://picsum.photos/480/320"
    />
  </VFlex>
);

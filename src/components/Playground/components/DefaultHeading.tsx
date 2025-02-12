import * as React from 'react';

import { Typography } from '@devoinc/genesys-ui';

export const DefaultHeading = ({ children }: { children: React.ReactNode }) => {
  return <Typography.Heading size="overline-md">{children}</Typography.Heading>;
};

import * as React from 'react';
import { Typography, VFlex } from '@devoinc/genesys-ui';
import { loremShort } from '../../../../../helpers';

export const TypographyExample = () => (
  <VFlex maxWidth="60%">
    <Typography.Heading size="hero-lg">Heading Hero lg</Typography.Heading>
    <Typography.Heading size="hero-md">Heading Hero md</Typography.Heading>
    <Typography.Heading size="hero-sm">Heading Hero sm</Typography.Heading>
    <Typography.Heading size="h1">Heading H1</Typography.Heading>
    <Typography.Heading size="h2">Heading H2</Typography.Heading>
    <Typography.Heading size="h3">Heading H3</Typography.Heading>
    <Typography.Heading size="h4">Heading H4</Typography.Heading>
    <Typography.Heading size="h5">Heading H5</Typography.Heading>
    <Typography.Heading size="h6">Heading H6</Typography.Heading>
    <Typography.Heading size="overline-lg">
      Heading Overline lg
    </Typography.Heading>
    <Typography.Heading size="overline-md">
      Heading Overline md
    </Typography.Heading>
    <Typography.Heading size="overline-sm">
      Heading Overline sm
    </Typography.Heading>
    <Typography.Lead size="lg">{loremShort}</Typography.Lead>
    <Typography.Lead size="md">{loremShort}</Typography.Lead>
    <Typography.Lead size="sm">{loremShort}</Typography.Lead>
    <Typography.Paragraph size="lg">{loremShort}</Typography.Paragraph>
    <Typography.Paragraph size="md">{loremShort}</Typography.Paragraph>
    <Typography.Paragraph size="sm">{loremShort}</Typography.Paragraph>
    <Typography.Paragraph size="xs">{loremShort}</Typography.Paragraph>
    <Typography.Paragraph size="xxs">{loremShort}</Typography.Paragraph>
  </VFlex>
);

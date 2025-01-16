import * as React from 'react';
import { HFlex, Icon, Typography, VFlex } from '@devoinc/genesys-ui';
import { GIAtomNuclearLearningPhysics } from '@devoinc/genesys-icons';

export const IconExample = () => (
  <HFlex spacing="layout-sm" alignItems="flex-end">
    {[
      'xxxxs',
      'xxxs',
      'xxs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'xxl',
      'xxxl',
      'xxxxl',
    ].map((size) => (
      <VFlex key={size} alignItems="center">
        <Icon size={size} colorScheme="base">
          <GIAtomNuclearLearningPhysics />
        </Icon>
        <Typography.Caption textAlign="center" size="xxs">
          {size.toUpperCase()}
        </Typography.Caption>
      </VFlex>
    ))}
  </HFlex>
);

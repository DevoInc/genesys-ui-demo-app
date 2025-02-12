import * as React from 'react';
import { Chip, ChipGroup, HFlex, VFlex } from '@devoinc/genesys-ui';
import { GILikeHeartFavoriteRatingLove } from '@devoinc/genesys-icons';
import { DefaultHeading } from '../../../components';

export const ChipExample = () => (
  <VFlex spacing="cmp-lg">
    <VFlex spacing="cmp-xs">
      <DefaultHeading>Chip</DefaultHeading>
      <HFlex>
        <Chip>Chip</Chip>
        <Chip icon={<GILikeHeartFavoriteRatingLove />}>Chip with icon</Chip>
        <Chip removable>Chip removable</Chip>
      </HFlex>
    </VFlex>
    <VFlex spacing="cmp-xs">
      <DefaultHeading>Chip Group</DefaultHeading>
      <ChipGroup legend="Chip group">
        <ChipGroup.Chip>Chip one</ChipGroup.Chip>
        <ChipGroup.Chip>Chip two</ChipGroup.Chip>
      </ChipGroup>
    </VFlex>
  </VFlex>
);

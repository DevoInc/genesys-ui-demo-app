import * as React from 'react';
import { ChoiceGroup } from '@devoinc/genesys-ui';
import {
  GIArrowsPlayRepeat,
  GIArrowsPlayShuffle,
  GIPause,
  GIPlay,
} from '@devoinc/genesys-icons';

export const ChoiceGroupExample = () => (
  <ChoiceGroup>
    <ChoiceGroup.IconButton icon={<GIPlay />} tooltip="Play" />
    <ChoiceGroup.IconButton tooltip="Pause" icon={<GIPause />} />
    <ChoiceGroup.IconButton icon={<GIArrowsPlayShuffle />} tooltip="Shuffle" />
    <ChoiceGroup.IconButton icon={<GIArrowsPlayRepeat />} tooltip="Repeat" />
  </ChoiceGroup>
);

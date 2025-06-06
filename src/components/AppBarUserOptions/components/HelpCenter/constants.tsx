import * as React from 'react';
import type { THelpType } from './declarations';
import { GIDocumentFilePaperText, GIWalkthrough } from '@devoinc/genesys-icons';

export const HELP_TYPES_ICON_MAP: {
  [key in THelpType]: React.ReactNode;
} = {
  article: <GIDocumentFilePaperText />,
  walkthrough: <GIWalkthrough />,
};

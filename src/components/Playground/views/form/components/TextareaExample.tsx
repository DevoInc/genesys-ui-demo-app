import * as React from 'react';
import { Textarea } from '@devoinc/genesys-ui';

export const TextareaExample = () => (
  <Textarea
    id="textarea-example"
    label="Textarea label"
    helper="This is the helper for the textarea."
    placeholder="Enter text..."
  />
);

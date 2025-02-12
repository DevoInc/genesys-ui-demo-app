import * as React from 'react';
import { Button, toast, ToastContainer, VFlex } from '@devoinc/genesys-ui';
import { lorem } from '../../../../../helpers';
import { DefaultHeading } from '../../../components';

export const ToastExample = () => {
  return (
    <VFlex childrenFitFullWidth={false}>
      <DefaultHeading>Toast</DefaultHeading>
      <Button
        aria-controls="base-toast"
        colorScheme={'info'}
        onClick={() => {
          toast({
            id: 'base-toast',
            content: lorem,
            subtitle: 'Toasts notifications are useful',
            title: 'Notification title',
            status: 'info',
          });
        }}
      >
        Open notification
      </Button>
      <ToastContainer />
    </VFlex>
  );
};

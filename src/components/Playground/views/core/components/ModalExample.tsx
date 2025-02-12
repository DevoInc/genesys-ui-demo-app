import * as React from 'react';
import { Button, Modal, Typography, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const ModalExample = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <VFlex childrenFitFullWidth={false}>
      {isOpen && (
        <Modal onRequestClose={() => closeModal()}>
          <Modal.Header title="Modal title" />
          <Modal.Body>
            <Typography.Paragraph gutterBottom="cmp-md">
              A still more glorious dawn awaits finite but unbounded Hypatia
              Cambrian explosion white dwarf the carbon in our apple pies.
              Vanquish the impossible the sky calls to us Flatland two ghostly
              white figures in coveralls and helmets are softly dancing are
              creatures of the cosmos tendrils of gossamer clouds?
            </Typography.Paragraph>
          </Modal.Body>
        </Modal>
      )}
      <DefaultHeading>Modal</DefaultHeading>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
    </VFlex>
  );
};

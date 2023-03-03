import { UploadFiles } from '@devoinc/genesys-ui-form';

export const UploadFilesExample = () => (
  <UploadFiles
    hasWideControl={true}
    label='Drop files here or click to upload'
    labelPosition='top'
    size='md'
    status='base'
    allowMultiple={false}
    allowImagePreview={true}
    imagePreviewMaxHeight={150}
    imagePreviewMinHeight={44}
    id={'upload files'}
  />
);

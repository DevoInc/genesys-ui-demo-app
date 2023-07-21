import { BoxMessage, Typography } from '@devoinc/genesys-ui';

export const BoxMessageExample = () => (
  <BoxMessage
    actions={[]}
    title={<Typography.Heading>This is a Box Message</Typography.Heading>}
    content='Is this really a Box Message? I would say so...'
  />
);

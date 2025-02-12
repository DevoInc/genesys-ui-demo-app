import * as React from 'react';
import { UserInfo, VFlex } from '@devoinc/genesys-ui';
import { DefaultHeading } from '../../../components';

export const UserInfoExample = () => (
  <VFlex>
    <DefaultHeading>User Info</DefaultHeading>
    <UserInfo>
      <UserInfo.Avatar
        format="heading"
        name="Angela Channing"
        avatar="https://i.pravatar.cc/150?img=28"
        subtitle="UX-UI designer"
      />
      <UserInfo.Details
        email="angela.channing@devo.com"
        job="UX-UI designer"
        role="Admin"
      />
    </UserInfo>
  </VFlex>
);

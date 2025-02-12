import * as React from 'react';
import { Typography, VFlex, HFlex } from '@devoinc/genesys-ui';
import {
  ContentSwitcherExample,
  PopoverExample,
  StepperExample,
  TabsExample,
  IconExample,
  ToastExample,
  InlineMessageExample,
  FloatingMessageExample,
  BannerExample,
  BadgeExample,
  KeyValueExample,
  LoaderExample,
  ButtonExample,
  IconButtonExample,
  PartitionsExample,
  ProgressBarExample,
  StatusMessageExample,
  TagExample,
  UserInfoExample,
  ModalExample,
  PanelExample,
  AvatarExample,
  ThumbnailExample,
  AppBarExample,
  CollapseExample,
  LinkExample,
  MenuExample,
  PaginationExample,
  TypographyExample,
  SplitLayoutExample,
} from './components';

export const CoreView: React.FC = () => {
  return (
    <VFlex spacing="cmp-xxl">
      <HFlex spacing="layout-xl" alignItems="flex-start">
        <VFlex flex="1 1 50%" spacing="layout-md">
          <VFlex>
            <Typography.Heading size="h4">Actions</Typography.Heading>
            <VFlex spacing="layout-sm">
              <ButtonExample />
              <IconButtonExample />
            </VFlex>
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Feedback</Typography.Heading>
            <VFlex spacing="layout-sm">
              <BadgeExample />
              <BannerExample />
              <FloatingMessageExample />
              <IconExample />
              <InlineMessageExample />
              <KeyValueExample />
              <LoaderExample />
              <PartitionsExample />
              <ProgressBarExample />
              <StatusMessageExample />
              <TagExample />
              <ToastExample />
              <UserInfoExample />
              <TypographyExample />
            </VFlex>
          </VFlex>
        </VFlex>
        <VFlex flex="1 1 50%" spacing="layout-md">
          <VFlex>
            <Typography.Heading size="h4">Layout</Typography.Heading>
            <VFlex spacing="layout-sm">
              <ModalExample />
              <PanelExample />
              <SplitLayoutExample />
              <PopoverExample />
            </VFlex>
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Media</Typography.Heading>
            <VFlex spacing="layout-sm">
              <AvatarExample />
              <ThumbnailExample />
            </VFlex>
          </VFlex>
          <VFlex>
            <Typography.Heading size="h4">Navigation</Typography.Heading>
            <VFlex spacing="layout-sm">
              <AppBarExample />
              <CollapseExample />
              <ContentSwitcherExample />
              <LinkExample />
              <MenuExample />
              <PaginationExample />
              <StepperExample />
              <TabsExample />
            </VFlex>
          </VFlex>
        </VFlex>
      </HFlex>
    </VFlex>
  );
};

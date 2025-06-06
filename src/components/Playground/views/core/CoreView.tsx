import * as React from 'react';
import { Typography, VFlex } from '@devoinc/genesys-ui';
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
    <VFlex spacing="cmp-xxl" maxWidth="80rem">
      <VFlex flex="1 1 50%" spacing="layout-md">
        <VFlex>
          <Typography.Heading size="h4" id="actions">
            Actions
          </Typography.Heading>
          <VFlex spacing="layout-sm">
            <ButtonExample />
            <IconButtonExample />
          </VFlex>
        </VFlex>
        <VFlex>
          <Typography.Heading size="h4" id="feedback">
            Feedback
          </Typography.Heading>
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
      <VFlex>
        <Typography.Heading size="h4" id="typography">
          Typography
        </Typography.Heading>
        <TypographyExample />
      </VFlex>
      <VFlex spacing="layout-md">
        <VFlex>
          <Typography.Heading size="h4" id="layout">
            Layout
          </Typography.Heading>
          <VFlex spacing="layout-sm">
            <ModalExample />
            <PanelExample />
            <SplitLayoutExample />
            <PopoverExample />
          </VFlex>
        </VFlex>
        <VFlex>
          <Typography.Heading size="h4" id="media">
            Media
          </Typography.Heading>
          <VFlex spacing="layout-sm">
            <AvatarExample />
            <ThumbnailExample />
          </VFlex>
        </VFlex>
        <VFlex>
          <Typography.Heading size="h4" id="navigation">
            Navigation
          </Typography.Heading>
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
    </VFlex>
  );
};

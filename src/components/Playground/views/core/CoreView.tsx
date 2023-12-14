import * as React from 'react';
import {
  Button,
  ButtonGroup,
  DevoLogoLoader,
  Flex,
  Typography,
  TagGroup,
  Tag,
} from '@devoinc/genesys-ui';
import {
  AvatarExample,
  ContentSwitcherExample,
  DropdownMenuExample,
  StepperExample,
  TabsContainerExample,
  IconExample,
  ToastExample,
  Select2ControlExample,
  SwitchControlExample,
  ButtonGroupExample,
} from './components';

export const CoreView: React.FC = () => {
  return (
    <Flex flexDirection='column' gap='cmp-xxl'>
      <Flex justifyContent='space-between'>
        <ContentSwitcherExample />
        <ButtonGroup>
          <Button colorScheme='accent-high'>Ding</Button>
          <Button colorScheme='accent-high'>Dong</Button>
        </ButtonGroup>
        <AvatarExample />
        <DevoLogoLoader />
      </Flex>
      <Flex>
        <DropdownMenuExample />
      </Flex>
      <Typography.Heading size='h1'>
        Sample of components from{' '}
        <Typography.CodeInline>genesys-ui</Typography.CodeInline> package
      </Typography.Heading>
      <Typography.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at purus
        lacinia, sollicitudin eros sit amet, tempor nulla. Nullam felis odio,
        tincidunt et nulla ut, pharetra vulputate velit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nullam at purus lacinia, sollicitudin
        eros sit amet, tempor nulla. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam at purus lacinia, sollicitudin eros sit amet,
        tempor nulla. Nullam felis odio, tincidunt et nulla ut, pharetra
        vulputate velit. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam at purus lacinia, sollicitudin eros sit amet, tempor nulla.
      </Typography.Paragraph>
      <Flex justifyContent='space-around'>
        <Flex>
          <StepperExample />
        </Flex>
        <TagGroup labelPosition='left'>
          <Tag text='Category one' />
          <Tag colorScheme='secondary' text='Category two' />
          <Tag colorScheme='primary' text='Category three' />
          <Tag colorScheme='secondary' text='Category four' />
        </TagGroup>
      </Flex>
      <TabsContainerExample />
      <Flex justifyContent='flex-end'>
        <IconExample />
      </Flex>
      <ToastExample />
      <ButtonGroupExample />
      <Flex justifyContent='space-between'>
        <Select2ControlExample />
        <SwitchControlExample />
      </Flex>
    </Flex>
  );
};

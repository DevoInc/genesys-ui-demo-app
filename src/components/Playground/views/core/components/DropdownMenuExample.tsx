import * as React from 'react';
import { Button, DropdownMenu, DropdownMenuProps } from '@devoinc/genesys-ui';

export const data: DropdownMenuProps['items'] = [
  {
    key: '1',
    type: 'itemCheckbox',
    label: 'Pixel grid',
    shortcut: "⌘ '",
    tooltip: {
      label: 'Text tooltip!!!',
      config: {
        effect: 'solid',
      },
    },
    highlighted: true,
    appendTag: { label: 'NEW', colorScheme: 'success' },

    onChange: () => {
      window.console.log('checkbox has changed');
    },
    checked: false,
  },
  {
    key: '2',
    type: 'item',
    label: 'Layout Grids',
    tooltip: {
      label: 'Text tooltip!!!',
      config: {
        effect: 'solid',
      },
    },
    shortcut: '^ G',
    appendTag: { label: 'NEW', colorScheme: 'success' },
    action: () => {
      window.console.log('Clicked in Layout Grids!');
    },
  },
  {
    key: '3',
    type: 'item',
    label: 'Delete Layout',
    icon: 'gi-bin_trash_recycle_delete_garbage_empty',
    shortcut: '⌘ E',
    action: () => {
      window.console.log('Clicked in Delete');
    },
  },
  {
    key: '4',
    type: 'item',
    label: 'Mask Outlines',
    disabled: true,
    highlighted: true,
    action: () => {
      window.console.log('Clicked in Mask Outlines');
    },
  },
  {
    key: '5',
    type: 'item',
    label: 'Frame Outlines',
    highlighted: true,
    hidden: true,
    action: () => {
      window.console.log('Clicked in Frames');
    },
  },
  {
    key: '6',
    type: 'item',
    label: 'Resource Use',
    disabled: true,
    action: () => {
      window.console.log('Clicked in Resource');
    },
  },
  {
    key: '7',
    type: 'item',
    label: 'Rulers',
    shortcut: '⇧ R',
    action: () => {
      window.console.log('Clicked in Rulers');
    },
  },
  {
    key: '8',
    type: 'item',
    label: 'Outlines',
    shortcut: '⌘ Y',
    action: () => {
      window.console.log('Clicked in Outlines');
    },
  },
  {
    key: '9',
    type: 'itemSubMenu',
    label: 'Copy as',
    subMenuDirection: 'right',
    subMenu: [
      {
        type: 'itemSubMenu',
        label: 'Template 1',
        shortcut: '⌘ + s',
        subMenu: [
          {
            key: '9.1',
            type: 'item',
            label: 'Template 2',
            shortcut: '⌘ + s',
            action: () => {
              window.console.log('Clicked in Template2');
            },
          },
          {
            key: '9.2',
            type: 'item',
            label: 'Outlines 2.1',
            shortcut: '⌘ Y',
            action: () => {
              window.console.log('Clicked in 2.1');
            },
          },
        ],
      },
      {
        key: '9.3',
        type: 'item',
        label: 'Outlines 1',
        shortcut: '⌘ Y',
        action: () => {
          window.console.log('Clicked outlines1');
        },
      },
      {
        key: '9.4',
        type: 'item',
        label: 'Outlines 1.1',
        shortcut: '⌘ Y',
        action: () => {
          window.console.log('Clicked in 1.1');
        },
      },
    ],
  },
  {
    key: '10',
    type: 'itemCheckbox',
    label: 'Show/Hide UI 1',
    shortcut: '⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    key: '11',
    type: 'itemCheckbox',
    label: 'Show/Hide UI 2',
    shortcut: '⇧ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    key: '12',
    type: 'itemCheckbox',
    label: 'Show/Hide UI 3',
    shortcut: '⌥ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    key: '13',
    type: 'item',
    label: 'Zoom In',
    shortcut: '+',
    action: () => {
      window.console.log('Clicked in Zoom IN');
    },
  },
  {
    key: '14',
    type: 'item',
    label: 'Zoom out',
    shortcut: '-',
    action: () => {
      window.console.log('Clicked in ZOom out');
    },
  },
  {
    key: '15',
    type: 'itemLink',
    label: 'Help',
    href: '/help',
    tooltip: {
      label: 'Text tooltip!!!',
      config: {
        effect: 'solid',
      },
    },
    target: '_blank',
    shortcut: '^ G',
    highlighted: true,
    appendTag: { label: 'NEW', colorScheme: 'success' },
  },
];

export const DropdownMenuExample = () => {
  return (
    <DropdownMenu
      triggerComponent={Button}
      label='DropdownA11yMenu'
      items={data}
    />
  );
};

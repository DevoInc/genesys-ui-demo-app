import { Button, DropdownA11yMenu } from '@devoinc/genesys-ui';

// TODO: export types correctly
import { DropdownItem } from '@devoinc/genesys-ui/dist/components/DropdownA11yMenu/declarations';

export const data: DropdownItem[] = [
  {
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
    type: 'item',
    label: 'Delete Layout',
    icon: 'bin_trash_recycle_delete_garbage_empty',
    shortcut: '⌘ E',
    action: () => {
      window.console.log('Clicked in Delete');
    },
  },
  {
    type: 'item',
    label: 'Mask Outlines',
    disabled: true,
    highlighted: true,
    action: () => {
      window.console.log('Clicked in Mask Outlines');
    },
  },
  {
    type: 'item',
    label: 'Frame Outlines',
    highlighted: true,
    hidden: true,
    action: () => {
      window.console.log('Clicked in Frames');
    },
  },
  {
    type: 'item',
    label: 'Resource Use',
    disabled: true,
    action: () => {
      window.console.log('Clicked in Resource');
    },
  },
  {
    type: 'item',
    label: 'Rulers',
    shortcut: '⇧ R',
    action: () => {
      window.console.log('Clicked in Rulers');
    },
  },
  {
    type: 'item',
    label: 'Outlines',
    shortcut: '⌘ Y',
    action: () => {
      window.console.log('Clicked in Outlines');
    },
  },
  {
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
            type: 'item',
            label: 'Template 2',
            shortcut: '⌘ + s',
            action: () => {
              window.console.log('Clicked in Template2');
            },
          },
          {
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
        type: 'item',
        label: 'Outlines 1',
        shortcut: '⌘ Y',
        action: () => {
          window.console.log('Clicked outlines1');
        },
      },
      {
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
    type: 'itemCheckbox',
    label: 'Show/Hide UI 1',
    shortcut: '⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    type: 'itemCheckbox',
    label: 'Show/Hide UI 2',
    shortcut: '⇧ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    type: 'itemCheckbox',
    label: 'Show/Hide UI 3',
    shortcut: '⌥ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    type: 'item',
    label: 'Zoom In',
    shortcut: '+',
    action: () => {
      window.console.log('Clicked in Zoom IN');
    },
  },
  {
    type: 'item',
    label: 'Zoom out',
    shortcut: '-',
    action: () => {
      window.console.log('Clicked in ZOom out');
    },
  },
  {
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

export const DropdownA11yMenuExample = () => {
  return (
    <DropdownA11yMenu
      triggerComponent={Button}
      label='DropdownA11yMenu'
      items={data}
      customStyled={{ maxWidth: '30rem' }}
    />
  );
};

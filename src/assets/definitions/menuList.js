import ROUTE from './constants/routeName.json';

const redire = (path) => {
  return `/react/v2/#${path}`;
};

const menuList = [
  {
    id: 'ABOUT',
    title: 'About',
    langIndex: 'menu.about',
    href: redire(ROUTE.ABOUT),
  },
  {
    id: 'OVERVIEW',
    title: 'Overview',
    langIndex: 'menu.overview',
    href: redire(ROUTE.OVERVIEW),
  },
  {
    id: 'PACKAGES',
    title: 'Packages',
    langIndex: 'menu.packages.root',
    defaultCollapsed: false,
    children: [
      {
        id: 'PACKAGES_LIST',
        title: 'List',
        langIndex: 'menu.packages.list.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_LIST_BASIC',
            title: 'Basic',
            langIndex: 'menu.packages.basic',
            href: redire(ROUTE.PACKAGES_LIST_BASIC),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_LIST',
            title: 'Example: List',
            langIndex: 'menu.packages.list.example.list',
            href: redire(ROUTE.PACKAGES_LIST_EXAMPLE_LIST),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_MENU',
            title: 'Example: Menu',
            langIndex: 'menu.packages.list.example.menu',
            href: redire(ROUTE.PACKAGES_LIST_EXAMPLE_MENU),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_STYLE',
            title: 'Example: Style',
            langIndex: 'menu.packages.list.example.style',
            href: redire(ROUTE.PACKAGES_LIST_EXAMPLE_STYLE),
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_SLOT',
            title: 'Example: Slot',
            langIndex: 'menu.packages.list.example.slot',
            href: redire(ROUTE.PACKAGES_LIST_EXAMPLE_SLOT),
          },
        ],
      },
      {
        id: 'PACKAGES_TABLE',
        title: 'Table',
        langIndex: 'menu.packages.table.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_TABLE_BASIC',
            title: 'Basic',
            langIndex: 'menu.packages.basic',
            href: redire(ROUTE.PACKAGES_TABLE_BASIC),
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_LIST',
            title: 'Example: List',
            langIndex: 'menu.packages.table.example.list',
            href: redire(ROUTE.PACKAGES_TABLE_EXAMPLE_LIST),
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_INFO',
            title: 'Example: Info',
            langIndex: 'menu.packages.table.example.info',
            href: redire(ROUTE.PACKAGES_TABLE_EXAMPLE_INFO),
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_COMPARE',
            title: 'Example: Compare',
            langIndex: 'menu.packages.table.example.compare',
            href: redire(ROUTE.PACKAGES_TABLE_EXAMPLE_COMPARE),
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_STYLE',
            title: 'Example: Style',
            langIndex: 'menu.packages.table.example.style',
            href: redire(ROUTE.PACKAGES_TABLE_EXAMPLE_STYLE),
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_SLOT',
            title: 'Example: Slot',
            langIndex: 'menu.packages.table.example.slot',
            href: redire(ROUTE.PACKAGES_TABLE_EXAMPLE_SLOT),
          },
        ],
      },
      {
        id: 'PACKAGES_FORM',
        title: 'Form',
        langIndex: 'menu.packages.form.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_FORM_BASIC_INPUT',
            title: 'Basic: Input',
            langIndex: 'menu.packages.form.basic.input',
            href: redire(ROUTE.PACKAGES_FORM_BASIC_INPUT),
          },
          {
            id: 'PACKAGES_FORM_BASIC_SELECT',
            title: 'Basic: Select',
            langIndex: 'menu.packages.form.basic.select',
            href: redire(ROUTE.PACKAGES_FORM_BASIC_SELECT),
          },
          {
            id: 'PACKAGES_FORM_BASIC_RADIO',
            title: 'Basic: Radio',
            langIndex: 'menu.packages.form.basic.radio',
            href: redire(ROUTE.PACKAGES_FORM_BASIC_RADIO),
          },
          {
            id: 'PACKAGES_FORM_BASIC_CHECKBOX',
            title: 'Basic: Checkbox',
            langIndex: 'menu.packages.form.basic.checkbox',
            href: redire(ROUTE.PACKAGES_FORM_BASIC_CHECKBOX),
          },
          {
            id: 'PACKAGES_FORM_BASIC_TEXTAREA',
            title: 'Basic: Textarea',
            langIndex: 'menu.packages.form.basic.textarea',
            href: redire(ROUTE.PACKAGES_FORM_BASIC_TEXTAREA),
          },
          {
            id: 'PACKAGES_FORM_EXAMPLE_INPUT',
            title: 'Example: Input',
            langIndex: 'menu.packages.form.example.input',
            href: redire(ROUTE.PACKAGES_FORM_EXAMPLE_INPUT),
          },
          {
            id: 'PACKAGES_FORM_EXAMPLE_SELECT',
            title: 'Example: Select',
            langIndex: 'menu.packages.form.example.select',
            href: redire(ROUTE.PACKAGES_FORM_EXAMPLE_SELECT),
          },
          {
            id: 'PACKAGES_FORM_EXAMPLE_RADIO',
            title: 'Example: Radio',
            langIndex: 'menu.packages.form.example.radio',
            href: redire(ROUTE.PACKAGES_FORM_EXAMPLE_RADIO),
          },
          {
            id: 'PACKAGES_FORM_EXAMPLE_CHECKBOX',
            title: 'Example: Checkbox',
            langIndex: 'menu.packages.form.example.checkbox',
            href: redire(ROUTE.PACKAGES_FORM_EXAMPLE_CHECKBOX),
          },
          {
            id: 'PACKAGES_FORM_EXAMPLE_TEXTAREA',
            title: 'Example: Textarea',
            langIndex: 'menu.packages.form.example.textarea',
            href: redire(ROUTE.PACKAGES_FORM_EXAMPLE_TEXTAREA),
          },
        ],
      },
      {
        id: 'PACKAGES_POPOVER',
        title: 'Popover',
        langIndex: 'menu.packages.popover.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_POPOVER_BASIC',
            title: 'Basic',
            langIndex: 'menu.packages.basic',
            href: redire(ROUTE.PACKAGES_POPOVER_BASIC),
          },
          {
            id: 'PACKAGES_POPOVER_EXAMPLE_POSITION',
            title: 'Example: Position',
            langIndex: 'menu.packages.popover.example.position',
            href: redire(ROUTE.PACKAGES_POPOVER_EXAMPLE_POSITION),
          },
          {
            id: 'PACKAGES_POPOVER_EXAMPLE_ALIGN',
            title: 'Example: Align',
            langIndex: 'menu.packages.popover.example.align',
            href: redire(ROUTE.PACKAGES_POPOVER_EXAMPLE_ALIGN),
          },
        ],
      },
      {
        id: 'PACKAGES_BUTTON',
        title: 'Button',
        langIndex: 'menu.packages.button.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_BUTTON_BASIC_BUTTON',
            title: 'Basic: Button',
            langIndex: 'menu.packages.button.basic.button',
            href: redire(ROUTE.PACKAGES_BUTTON_BASIC_BUTTON),
          },
          {
            id: 'PACKAGES_BUTTON_BASIC_GROUP',
            title: 'Basic: Group',
            langIndex: 'menu.packages.button.basic.group',
            href: redire(ROUTE.PACKAGES_BUTTON_BASIC_GROUP),
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_BUTTON',
            title: 'Example: Button',
            langIndex: 'menu.packages.button.example.button',
            href: redire(ROUTE.PACKAGES_BUTTON_EXAMPLE_BUTTON),
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_GROUP',
            title: 'Example: Group',
            langIndex: 'menu.packages.button.example.group',
            href: redire(ROUTE.PACKAGES_BUTTON_EXAMPLE_GROUP),
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_PAGINATION',
            title: 'Example: Pagination',
            langIndex: 'menu.packages.button.example.pagination',
            href: redire(ROUTE.PACKAGES_BUTTON_EXAMPLE_PAGINATION),
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_STYLE',
            title: 'Example: Style',
            langIndex: 'menu.packages.button.example.style',
            href: redire(ROUTE.PACKAGES_BUTTON_EXAMPLE_STYLE),
          },
        ],
      },
      {
        id: 'PACKAGES_MESSAGE',
        title: 'Message',
        langIndex: 'menu.packages.message.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_MESSAGE_BASIC_MESSAGE',
            title: 'Basic: Message',
            langIndex: 'menu.packages.message.basic.message',
            href: redire(ROUTE.PACKAGES_MESSAGE_BASIC_MESSAGE),
          },
          {
            id: 'PACKAGES_MESSAGE_BASIC_NOTICE',
            title: 'Basic: Notice',
            langIndex: 'menu.packages.message.basic.notice',
            href: redire(ROUTE.PACKAGES_MESSAGE_BASIC_NOTICE),
          },
          {
            id: 'PACKAGES_MESSAGE_EXAMPLE_MESSAGE',
            title: 'Basic: Message',
            langIndex: 'menu.packages.message.example.message',
            href: redire(ROUTE.PACKAGES_MESSAGE_EXAMPLE_MESSAGE),
          },
          {
            id: 'PACKAGES_MESSAGE_EXAMPLE_NOTICE',
            title: 'Basic: Notice',
            langIndex: 'menu.packages.message.example.notice',
            href: redire(ROUTE.PACKAGES_MESSAGE_EXAMPLE_NOTICE),
          },
        ],
      },
      {
        id: 'PACKAGES_POPUP',
        title: 'Popup',
        langIndex: 'menu.packages.popup.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_POPUP_BASIC',
            title: 'Basic',
            langIndex: 'menu.packages.basic',
            href: redire(ROUTE.PACKAGES_POPUP_BASIC),
          },
          {
            id: 'PACKAGES_POPUP_EXAMPLE',
            title: 'Example',
            langIndex: 'menu.packages.popup.example',
            href: redire(ROUTE.PACKAGES_POPUP_EXAMPLE),
          },
        ],
      },
      {
        id: 'PACKAGES_TIMELINE',
        title: 'Timeline',
        langIndex: 'menu.packages.timeline.root',
        defaultCollapsed: true,
        children: [
          {
            id: 'PACKAGES_TIMELINE_BASIC',
            title: 'Basic',
            langIndex: 'menu.packages.basic',
            href: redire(ROUTE.PACKAGES_TIMELINE_BASIC),
          },
          {
            id: 'PACKAGES_TIMELINE_EXAMPLE_POSITION',
            title: 'Example: Position',
            langIndex: 'menu.packages.timeline.example.position',
            href: redire(ROUTE.PACKAGES_TIMELINE_EXAMPLE_POSITION),
          },
          {
            id: 'PACKAGES_TIMELINE_EXAMPLE_ALIGN',
            title: 'Example: Align',
            langIndex: 'menu.packages.timeline.example.align',
            href: redire(ROUTE.PACKAGES_TIMELINE_EXAMPLE_ALIGN),
          },
        ],
      },
      {
        id: 'PACKAGES_LOCALSTORAGE',
        title: 'Localstorage',
        langIndex: 'menu.packages.localstorage',
        href: redire(ROUTE.PACKAGES_LOCALSTORAGE),
      },
      {
        id: 'PACKAGES_FOLDER',
        title: 'Folder',
        langIndex: 'menu.packages.folder',
        href: redire(ROUTE.PACKAGES_FOLDER),
      },
    ],
  },
  {
    id: 'APPLICATIONS',
    title: 'Applications',
    defaultCollapsed: false,
    langIndex: 'menu.application.root',
    children: [
      {
        id: 'APPLICATIONS_FACEBOOK_SDK',
        title: 'FackBook SDK',
        defaultCollapsed: true,
        langIndex: 'menu.application.fbsdk.root',
        children: [
          {
            id: 'APPLICATIONS_FACEBOOK_SDK_BASIC',
            title: 'Basic',
            langIndex: 'menu.application.fbsdk.basic',
            href: redire(ROUTE.APPLICATIONS_FACEBOOK_SDK_BASIC),
          },
          {
            id: 'APPLICATIONS_FACEBOOK_SDK_API',
            title: 'APIs',
            langIndex: 'menu.application.fbsdk.apis',
            href: redire(ROUTE.APPLICATIONS_FACEBOOK_SDK_API),
          },
          {
            id: 'APPLICATIONS_FACEBOOK_SDK_COMPONENTS',
            title: 'Components',
            langIndex: 'menu.application.fbsdk.components',
            href: redire(ROUTE.APPLICATIONS_FACEBOOK_SDK_COMPONENTS),
          },
        ],
      },
      {
        id: 'APPLICATIONS_LANGUAGES',
        title: 'Languages',
        langIndex: 'menu.application.languages',
        href: redire(ROUTE.APPLICATIONS_LANGUAGES),
      },
      {
        id: 'APPLICATIONS_VALIDATOR',
        title: 'Validator',
        langIndex: 'menu.application.validator',
        href: redire(ROUTE.APPLICATIONS_VALIDATOR),
      },
    ],
  },
  {
    id: 'VERSION_1',
    title: 'Version 1',
    langIndex: 'menu.version_1',
  },
];

export default menuList;

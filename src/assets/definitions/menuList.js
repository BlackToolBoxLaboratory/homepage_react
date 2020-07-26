const menuList = [
  {
    id: 'ABOUT',
    title: 'About',
    langIndex: 'menu.about',
  },
  {
    id: 'OVERVIEW',
    title: 'Overview',
    langIndex: 'menu.overview',
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
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_LIST',
            title: 'Example: List',
            langIndex: 'menu.packages.list.example.list',
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_MENU',
            title: 'Example: Menu',
            langIndex: 'menu.packages.list.example.menu',
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_STYLE',
            title: 'Example: Style',
            langIndex: 'menu.packages.list.example.style',
          },
          {
            id: 'PACKAGES_LIST_EXAMPLE_SLOT',
            title: 'Example: Slot',
            langIndex: 'menu.packages.list.example.slot',
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
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_LIST',
            title: 'Example: List',
            langIndex: 'menu.packages.table.example.list',
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_INFO',
            title: 'Example: Info',
            langIndex: 'menu.packages.table.example.info',
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_COMPARE',
            title: 'Example: Compare',
            langIndex: 'menu.packages.table.example.compare',
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_STYLE',
            title: 'Example: Style',
            langIndex: 'menu.packages.table.example.style',
          },
          {
            id: 'PACKAGES_TABLE_EXAMPLE_SLOT',
            title: 'Example: Slot',
            langIndex: 'menu.packages.table.example.slot',
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
          },
          {
            id: 'PACKAGES_POPOVER_EXAMPLE_POSITION',
            title: 'Example: Position',
            langIndex: 'menu.packages.popover.example.position',
          },
          {
            id: 'PACKAGES_POPOVER_EXAMPLE_ALIGN',
            title: 'Example: Align',
            langIndex: 'menu.packages.popover.example.align',
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
          },
          {
            id: 'PACKAGES_BUTTON_BASIC_GROUP',
            title: 'Basic: Group',
            langIndex: 'menu.packages.button.basic.group',
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_BUTTON',
            title: 'Example: Button',
            langIndex: 'menu.packages.button.example.button',
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_GROUP',
            title: 'Example: Group',
            langIndex: 'menu.packages.button.example.group',
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_PAGINATION',
            title: 'Example: Pagination',
            langIndex: 'menu.packages.button.example.pagination',
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_STYLE',
            title: 'Example: Style',
            langIndex: 'menu.packages.button.example.style',
          },
          {
            id: 'PACKAGES_BUTTON_EXAMPLE_SLOT',
            title: 'Example: Slot',
            langIndex: 'menu.packages.button.example.slot',
          },
        ],
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
        id: 'APPLICATIONS_LANGUAGES',
        title: 'Languages',
        langIndex: 'menu.application.languages',
      },
      {
        id: 'APPLICATIONS_VALIDATOR',
        title: 'Validator',
        langIndex: 'menu.application.validator',
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

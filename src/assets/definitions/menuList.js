const menuList = [
  { 
    id    : 'ABOUT',
    title : 'About',
  },
  {
    id               : 'PACKAGES',
    title            : 'Packages',
    defaultCollapsed : false,
    children         : [
      {
        id               : 'PACKAGES_LIST',
        title            : 'List',
        defaultCollapsed : true,
        children         : [
          {
            id    : 'PACKAGES_LIST_BASIC',
            title : 'Basic'
          },
          {
            id    : 'PACKAGES_LIST_EXAMPLE_LIST',
            title : 'Example-List'
          },
          {
            id    : 'PACKAGES_LIST_EXAMPLE_MENU',
            title : 'Example-Menu'
          },
          {
            id    : 'PACKAGES_LIST_EXAMPLE_STYLE',
            title : 'Example-Style'
          },
          {
            id    : 'PACKAGES_LIST_EXAMPLE_SLOT',
            title : 'Example-Slot'
          }
        ]
      },
      {
        id               : 'PACKAGES_TABLE',
        title            : 'Table',
        defaultCollapsed : true,
        children         : [
          {
            id    : 'PACKAGES_TABLE_BASIC',
            title : 'Basic'
          },
          {
            id    : 'PACKAGES_TABLE_EXAMPLE_LIST',
            title : 'Example-List'
          },
          {
            id    : 'PACKAGES_TABLE_EXAMPLE_INFO',
            title : 'Example-Info'
          },
          {
            id    : 'PACKAGES_TABLE_EXAMPLE_COMPARE',
            title : 'Example-Compare'
          },
          {
            id    : 'PACKAGES_TABLE_EXAMPLE_STYLE',
            title : 'Example-Style'
          },
          {
            id    : 'PACKAGES_TABLE_EXAMPLE_SLOT',
            title : 'Example-Slot'
          }
        ]
      }
    ]
  },
  {
    id               : 'APPLICATIONS',
    title            : 'Applications',
    defaultCollapsed : false,
    children         : [
      {
        id    : 'APPLICATIONS_LANGUAGES',
        title : 'Languages'
      },
      {
        id    : 'APPLICATIONS_VALIDATOR',
        title : 'Validator'
      }
    ]
  },
  {
    id    : 'VERSION_1',
    title : 'Version 1',
  }
];

export default menuList;
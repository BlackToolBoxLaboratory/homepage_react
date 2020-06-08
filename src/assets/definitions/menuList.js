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
const menuList = new Array(
  { 
    'index':  'ABOUT',
    'name':   'About'
  },
  {
    'index':  'BTB_ATCS',
    'name':   'Articles'
  },
  {
    'index':  'BTB_DEMO',
    'name':   'Demonstration'
  },
  {
    'index':  'BTB',
    'name':   'Libraries',
    'children':[
      {
        'index':  'BTB_LIST',
        'name':   'List',
        'children':[
          {
            'index':  'BTB_LIST_BASIC',
            'name':   'Basic'
          },
          {
            'index':  'BTB_LIST_EXAMPLE',
            'name':   'Example'
          }
        ]
      },
      {
        'index':  'BTB_TABLE',
        'name':   'Table',
        'children':[
          {
            'index':  'BTB_TABLE_BASIC',
            'name':   'Basic'
          }
        ]
      },
      {
        'index':  'BTB_MENU',
        'name':   'Menu',
        'children':[
          {
            'index':  'BTB_MENU_BASIC',
            'name':   'Basic'
          },
          {
            'index':  'BTB_MENU_ADV',
            'name':   'Advanced'
          }
        ]
      }
    ]
  }
);

export default menuList;

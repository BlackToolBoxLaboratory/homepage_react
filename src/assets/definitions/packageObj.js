import ROUTE from './routeMap';

const packageObj = {
  list : {
    name        : 'List',
    routename   : ROUTE.PACKAGES_LIST_BASIC,
    description : 'This module of list creator made with React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.',
    version     : '2.1.6',
    updated     : 'Jun, 14, 2020',
    link        : {
      github : 'https://github.com/BlackToolBoxLaboratory/react-list',
      npm    : 'https://www.npmjs.com/package/@blacktoolbox/react-list'
    }
  },
  table : {
    name        : 'Table',
    routename   : ROUTE.PACKAGES_TABLE_BASIC,
    description : 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.',
    version     : '1.1.0',
    updated     : 'Jun, 16, 2020',
    link        : {
      github : 'https://github.com/BlackToolBoxLaboratory/react-table',
      npm    : 'https://www.npmjs.com/package/@blacktoolbox/react-table'
    }
  }
};

export default packageObj;

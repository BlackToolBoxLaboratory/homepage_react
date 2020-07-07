import ROUTE from './routeMap';

const packageObj = {
  list : {
    name        : 'package.list.name',
    routename   : ROUTE.PACKAGES_LIST_BASIC,
    description : 'package.list.description.basic',
    version     : '2.2.0',
    updated     : '2020-06-21',
    link        : {
      github : 'https://github.com/BlackToolBoxLaboratory/react-list',
      npm    : 'https://www.npmjs.com/package/@blacktoolbox/react-list'
    }
  },
  table : {
    name        : 'package.table.name',
    routename   : ROUTE.PACKAGES_TABLE_BASIC,
    description : 'package.table.description.basic',
    version     : '1.4.0',
    updated     : '2020-06-21',
    link        : {
      github : 'https://github.com/BlackToolBoxLaboratory/react-table',
      npm    : 'https://www.npmjs.com/package/@blacktoolbox/react-table'
    }
  },
  popover : {
    name        : 'package.popover.name',
    routename   : ROUTE.PACKAGES_POPOVER_BASIC,
    description : 'package.popover.description.basic',
    version     : '1.2.1',
    updated     : '2020-07-07',
    link        : {
      github : 'https://github.com/BlackToolBoxLaboratory/react-popover',
      npm    : 'https://www.npmjs.com/package/@blacktoolbox/react-popover'
    }
  }
};

export default packageObj;

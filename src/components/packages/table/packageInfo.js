import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.table.version,
  updated: packageObj.table.updated,
  description: packageObj.table.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.table.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.table.link.npm,
    },
  ],
};

export default packageInfo;

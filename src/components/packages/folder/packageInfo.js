import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.folder.version,
  updated: packageObj.folder.updated,
  description: packageObj.folder.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.folder.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.folder.link.npm,
    },
  ],
};

export default packageInfo;

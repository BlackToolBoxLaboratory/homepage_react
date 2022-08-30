import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.localstorage.version,
  updated: packageObj.localstorage.updated,
  description: packageObj.localstorage.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.localstorage.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.localstorage.link.npm,
    },
  ],
};

export default packageInfo;

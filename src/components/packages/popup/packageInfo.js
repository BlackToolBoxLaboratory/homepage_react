import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.popup.version,
  updated: packageObj.popup.updated,
  description: packageObj.popup.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.popup.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.popup.link.npm,
    },
  ],
};

export default packageInfo;

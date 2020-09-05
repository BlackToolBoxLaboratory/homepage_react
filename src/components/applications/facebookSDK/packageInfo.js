import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.facebookSDK.version,
  updated: packageObj.facebookSDK.updated,
  description: packageObj.facebookSDK.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.facebookSDK.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.facebookSDK.link.npm,
    },
  ],
};

export default packageInfo;

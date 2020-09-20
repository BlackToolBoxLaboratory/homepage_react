import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.message.version,
  updated: packageObj.message.updated,
  description: packageObj.message.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.message.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.message.link.npm,
    },
  ],
};

export default packageInfo;

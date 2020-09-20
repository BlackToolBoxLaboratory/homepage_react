import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.message.version,
  updated: packageObj.message.updated,
  descriptionMessage: packageObj.message.description_message,
  descriptionNotice: packageObj.message.description_notice,
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

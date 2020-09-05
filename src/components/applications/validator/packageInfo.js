import applicationObj from '@src/assets/definitions/applicationObj';

const packageInfo = {
  version: applicationObj.validator.version,
  updated: applicationObj.validator.updated,
  description: applicationObj.validator.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: applicationObj.validator.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: applicationObj.validator.link.npm,
    },
  ],
};

export default packageInfo;

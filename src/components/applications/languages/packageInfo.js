import applicationObj from '@src/assets/definitions/applicationObj';

const packageInfo = {
  version: applicationObj.languages.version,
  updated: applicationObj.languages.updated,
  description: applicationObj.languages.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: applicationObj.languages.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: applicationObj.languages.link.npm,
    },
  ],
};

export default packageInfo;

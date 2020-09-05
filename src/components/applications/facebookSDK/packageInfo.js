import applicationObj from '@src/assets/definitions/applicationObj';

const packageInfo = {
  version: applicationObj['fb-sdk'].version,
  updated: applicationObj['fb-sdk'].updated,
  description: applicationObj['fb-sdk'].description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: applicationObj['fb-sdk'].github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: applicationObj['fb-sdk'].npm,
    },
  ],
};

export default packageInfo;

import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.timeline.version,
  updated: packageObj.timeline.updated,
  description: packageObj.timeline.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.timeline.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.timeline.link.npm,
    },
  ],
};

export default packageInfo;

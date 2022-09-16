import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  version: packageObj.form.version,
  updated: packageObj.form.updated,
  description: packageObj.form.description,
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: packageObj.form.link.github,
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: packageObj.form.link.npm,
    },
  ],
};

export default packageInfo;

import { ROUTE } from './constants';

const applicationObj = {
  languages: {
    name: 'application.languages.name',
    routename: ROUTE.APPLICATIONS_LANGUAGES,
    description: 'application.languages.description',
    version: '1.1.1',
    updated: '2020-06-20',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/prototype-languages',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/prototype-languages',
    },
  },
  validator: {
    name: 'application.validator.name',
    routename: ROUTE.APPLICATIONS_VALIDATOR,
    description: 'application.validator.description',
    version: '1.0.0',
    updated: '2020-01-20',
    link: {
      github: 'https://github.com/BlackToolBoxLaboratory/prototype-validator',
      npm: 'https://www.npmjs.com/package/@blacktoolbox/prototype-validator',
    },
  },
};

export default applicationObj;

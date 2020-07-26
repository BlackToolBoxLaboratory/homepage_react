import React from 'react';

import { openLink } from '@src/utils/functions.js';
import { Page, PageHead } from '@src/modules/pageLayout';

const packageInfo = {
  version: '1.0.0',
  updated: 'Jan. 20, 2020',
  description:
    "Most form UI packages have their own validator to use for convenience. But sometimes we don't use only one UI packages to develop every single project. So we try to create the validator generally to adapt to every kind of form UI packages to allow us using just one type of validator coding patteren to develop with every UI packages.",
  btnList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: 'https://github.com/BlackToolBoxLaboratory/prototype-validator',
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: 'https://www.npmjs.com/package/@blacktoolbox/prototype-validator',
    },
  ],
};

const Validator = () => {
  return (
    <Page className="btb-app-validator">
      <PageHead title={'Validator Application'} clickBtn={openLink} btnList={packageInfo.btnList} />
    </Page>
  );
};

export default Validator;

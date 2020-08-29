import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section } from '@src/modules/pageLayout';

const enhance = compose(
  connect((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  })
);

const packageInfo = {
  version: '1.0.0',
  updated: '2020-01-20',
  description: 'application.validator.description',
  linkList: [
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

const Validator = enhance(() => {
  return (
    <Page className="btb-app-validator">
      <PageHead title={'Validator Application'} clickBtn={openLink} btnList={packageInfo.btnList} />
      <Section
        head={
          <>
            {`${lang.translate('package.version_colon')}${packageInfo.version}`}
            <br />
            {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
          </>
        }
      >
        <p>{lang.translate(packageInfo.description)}</p>
      </Section>
    </Page>
  );
});

export default Validator;

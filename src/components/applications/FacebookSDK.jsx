import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

// import { components } from '@blacktoolbox/react-facebook-sdk';
// const { Login, Like, Save, Share } = components;

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
  version: '8.0.0',
  updated: '2020-08-29',
  description: 'application.fb-sdk.description',
  linkList: [
    {
      id: 'github',
      fa: ['fab', 'github'],
      url: 'https://github.com/BlackToolBoxLaboratory/react-facebook-sdk',
    },
    {
      id: 'npm',
      fa: ['fab', 'npm'],
      url: 'https://www.npmjs.com/package/@blacktoolbox/react-facebook-sdk',
    },
  ],
};

const FacebookSDK = enhance(() => {
  return (
    <Page className="btb-app-fb-sdk">
      <PageHead title={lang.translate('application.fb-sdk.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
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

export default FacebookSDK;

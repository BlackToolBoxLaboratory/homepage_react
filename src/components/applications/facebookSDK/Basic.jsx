import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apis, components } from '@blacktoolbox/react-facebook-sdk';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const { Page: FBPage } = components;

const preInstall = `$ npm install --save @blacktoolbox/react-facebook-sdk

import { apis, components } from '@blacktoolbox/react-facebook-sdk';`;

const preRender = `apis.init({
  status     : true,
  xfbml      : true,
});

const { Page : FBPage } = components;

<FBPage href="https://www.facebook.com/blacktoolboxlaboratory"/>`;

const FacebookSDK = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  useEffect(() => {
    apis.XFBML.parse();
  }, []);
  return (
    <Page id="btb-app-fb-sdk-basic">
      <PageHead
        title={lang.translate('application.facebookSDK.name')}
        clickBtn={openLink}
        linkList={packageInfo.linkList}
      />
      <Section
        head={
          <>
            {`${lang.translate('application.version_colon')}${packageInfo.version}`}
            <br />
            {`${lang.translate('application.release_colon')}${packageInfo.updated}`}
          </>
        }
      >
        <p>{lang.translate(packageInfo.description)}</p>
      </Section>
      <Section head={lang.translate('package.section.installation')}>
        <pre className="page_pre">{preInstall}</pre>
      </Section>
      <Section head={lang.translate('package.section.render')}>
        <FBPage href="https://www.facebook.com/blacktoolboxlaboratory" />
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
    </Page>
  );
};

export default FacebookSDK;

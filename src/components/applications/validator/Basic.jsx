import React from 'react';
import { useSelector } from 'react-redux';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section } from '@src/modules/pageLayout';

import packageInfo from './packageInfo.js';

const Validator = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-app-validator">
      <PageHead
        title={lang.translate('application.validator.name')}
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
    </Page>
  );
};

export default Validator;

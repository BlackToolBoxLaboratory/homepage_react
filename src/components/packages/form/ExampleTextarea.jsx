import React from 'react';
import { useSelector } from 'react-redux';
import { Textarea as BTBTextarea } from '@blacktoolbox/react-form';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBTextarea showCounter defaultValue={'showCounter'} />
<BTBTextarea showCounter readOnly defaultValue={'showCounter'} />
<BTBTextarea showCounter disabled defaultValue={'showCounter'} />

<BTBTextarea maxLength="12" showCounter defaultValue={'with maximum'} />
<BTBTextarea maxLength="12" showCounter readOnly defaultValue={'with maximum'} />
<BTBTextarea maxLength="12" showCounter disabled defaultValue={'with maximum'} />`;

const Basic = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  return (
    <Page id="btb-pkg-form-example">
      <PageHead
        title={lang.translate('package.form.example.textarea.title')}
        clickBtn={openLink}
        linkList={packageInfo.linkList}
      />
      <Section
        head={
          <>
            {`${lang.translate('package.version_colon')}${packageInfo.version}`}
            <br />
            {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
          </>
        }
      >
        <p>{lang.translate('package.form.example.textarea.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBTextarea className="form_example" showCounter defaultValue={'Show Counter'} />
        <BTBTextarea className="form_example" showCounter readOnly defaultValue={'Show Counter'} />
        <BTBTextarea className="form_example" showCounter disabled defaultValue={'Show Counter'} />

        <BTBTextarea className="form_example" maxLength="12" showCounter defaultValue={'With Maximum'} />
        <BTBTextarea className="form_example" maxLength="12" showCounter readOnly defaultValue={'With Maximum'} />
        <BTBTextarea className="form_example" maxLength="12" showCounter disabled defaultValue={'With Maximum'} />
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
    </Page>
  );
};

export default Basic;

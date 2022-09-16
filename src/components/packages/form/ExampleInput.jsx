import React from 'react';
import { useSelector } from 'react-redux';
import { Input as BTBInput } from '@blacktoolbox/react-form';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBInput
        prependNode="prepend" 
        appendNode="append" 
        beforeNode="before" 
        afterNode="after" 
        defaultValue={'normal'} 
/>

<BTBInput
        beforeNode="before" 
        afterNode="after" 
        readOnly 
        defaultValue={'readonly'} 
/>

<BTBInput
        prependNode="prepend" 
        appendNode="append" 
        disabled 
        defaultValue={'disabled'} 
/>`;

const Basic = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  return (
    <Page id="btb-pkg-form-example">
      <PageHead
        title={lang.translate('package.form.example.input.title')}
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
        <p>{lang.translate('package.form.example.input.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBInput className="form_example" prependNode="prepend" appendNode="append" beforeNode="before" afterNode="after" defaultValue={'normal'} />
        <BTBInput className="form_example" beforeNode="before" afterNode="after" readOnly defaultValue={'readonly'} />
        <BTBInput className="form_example" prependNode="prepend" appendNode="append" disabled defaultValue={'disabled'} />
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
    </Page>
  );
};

export default Basic;

import React from 'react';
import { useSelector } from 'react-redux';
import { Select as BTBSelect } from '@blacktoolbox/react-form';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBSelect 
        prependNode="prepend" 
        appendNode="append" 
        beforeNode="before"
>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
</BTBSelect>

<BTBSelect 
        prependNode="prepend" 
        appendNode="append" 
        disabled
>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
</BTBSelect>

<BTBSelect 
        beforeNode="before" 
        disabled
>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
</BTBSelect>`;

const Basic = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  return (
    <Page id="btb-pkg-form-example">
      <PageHead
        title={lang.translate('package.form.example.select.title')}
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
        <p>{lang.translate('package.form.example.select.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
      <BTBSelect className="form_example" prependNode="prepend" appendNode="append" beforeNode="before">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </BTBSelect>
        <BTBSelect className="form_example" prependNode="prepend" appendNode="append" disabled>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </BTBSelect>
        <BTBSelect className="form_example" beforeNode="before" disabled>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </BTBSelect>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
    </Page>
  );
};

export default Basic;

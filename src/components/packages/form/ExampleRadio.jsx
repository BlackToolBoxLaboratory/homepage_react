import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Radio as BTBRadio } from '@blacktoolbox/react-form';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBRadio value="inline_1">block 1</BTBRadio>
<BTBRadio value="inline_2">block 2</BTBRadio>
<BTBRadio value="inline_3">block 3</BTBRadio>

<BTBRadio value="inline_4" inline>inline 1</BTBRadio>
<BTBRadio value="inline_5" inline>inline 2</BTBRadio>
<BTBRadio value="inline_6" inline>inline 3</BTBRadio>

<BTBRadio value="inline_7" color="red" inline checked>Red</BTBRadio>
<BTBRadio value="inline_8" color="blue" inline>Blue</BTBRadio>

<BTBRadio value="inline_9" inline disabled>Disabled</BTBRadio>
<BTBRadio value="inline_10" inline disabled checked>Disabled</BTBRadio>
<BTBRadio value="inline_11" inline disabled color="green" checked>Disabled Green</BTBRadio>

<BTBRadio value="inline_12" size="0.5rem" inline>0.5rem</BTBRadio>
<BTBRadio value="inline_13" size="1rem" inline>1rem</BTBRadio>
<BTBRadio value="inline_14" size="1.5rem" inline>1.5rem</BTBRadio>

<BTBRadio name="example" value="name_1" inline>1</BTBRadio>
<BTBRadio name="example" value="name_2" inline>2</BTBRadio>
<BTBRadio name="example" value="name_3" inline>3</BTBRadio>
<BTBRadio name="example" value="name_4" inline>4</BTBRadio>

<BTBRadio value="state_1" inline formValue={radioValue} onClick={_clickRadio}>1</BTBRadio>
<BTBRadio value="state_2" inline formValue={radioValue} onClick={_clickRadio}>2</BTBRadio>
<BTBRadio value="state_3" inline formValue={radioValue} onClick={_clickRadio}>3</BTBRadio>
<BTBRadio value="state_4" inline formValue={radioValue} onClick={_clickRadio}>4</BTBRadio>
`;

const preEvent = `const [radioValue, updateRadioValue] = useState();

const _clickRadio = (value) => {
        updateRadioValue(value)
}`;

const Basic = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  const [radioValue, updateRadioValue] = useState();

  const _clickRadio = (value) => {
    updateRadioValue(value)
  }

  return (
    <Page id="btb-pkg-form-example">
      <PageHead
        title={lang.translate('package.form.example.radio.title')}
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
        <p>{lang.translate('package.form.example.radio.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title="props">
          <div className="form_example">
            <BTBRadio value="inline_1">block 1</BTBRadio>
            <BTBRadio value="inline_2">block 2</BTBRadio>
            <BTBRadio value="inline_3">block 3</BTBRadio>
          </div>
          <div className="form_example">
            <BTBRadio value="inline_4" inline>inline 1</BTBRadio>
            <BTBRadio value="inline_5" inline>inline 2</BTBRadio>
            <BTBRadio value="inline_6" inline>inline 3</BTBRadio>
          </div>
          <div className="form_example">
            <BTBRadio value="inline_7" color="red" inline checked>Red</BTBRadio>
            <BTBRadio value="inline_8" color="blue" inline>Blue</BTBRadio>
          </div>
          <div className="form_example">
            <BTBRadio value="inline_9" inline disabled>Disabled</BTBRadio>
            <BTBRadio value="inline_10" inline disabled checked>Disabled</BTBRadio>
            <BTBRadio value="inline_11" inline disabled color="green" checked>Disabled Green</BTBRadio>
          </div>
          <div className="form_example">
            <BTBRadio value="inline_12" size="0.5rem" inline>0.5rem</BTBRadio>
            <BTBRadio value="inline_13" size="1rem" inline>1rem</BTBRadio>
            <BTBRadio value="inline_14" size="1.5rem" inline>1.5rem</BTBRadio>
          </div>
        </Block>

        <Block title="name">
          <BTBRadio className="form_example" name="example" value="name_1" inline>1</BTBRadio>
          <BTBRadio className="form_example" name="example" value="name_2" inline>2</BTBRadio>
          <BTBRadio className="form_example" name="example" value="name_3" inline>3</BTBRadio>
          <BTBRadio className="form_example" name="example" value="name_4" inline>4</BTBRadio>
        </Block>

        <Block title="useState">
          <BTBRadio className="form_example" value="state_1" inline formValue={radioValue} onClick={_clickRadio}>1</BTBRadio>
          <BTBRadio className="form_example" value="state_2" inline formValue={radioValue} onClick={_clickRadio}>2</BTBRadio>
          <BTBRadio className="form_example" value="state_3" inline formValue={radioValue} onClick={_clickRadio}>3</BTBRadio>
          <BTBRadio className="form_example" value="state_4" inline formValue={radioValue} onClick={_clickRadio}>4</BTBRadio>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="useState">
          <pre className="page_pre">{preEvent}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default Basic;

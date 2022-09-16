import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Checkbox as BTBCheckbox } from '@blacktoolbox/react-form';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBCheckbox value="inline_1">block 1</BTBCheckbox>
<BTBCheckbox value="inline_2">block 2</BTBCheckbox>
<BTBCheckbox value="inline_3">block 3</BTBCheckbox>

<BTBCheckbox value="inline_4" inline>inline 1</BTBCheckbox>
<BTBCheckbox value="inline_5" inline>inline 2</BTBCheckbox>
<BTBCheckbox value="inline_6" inline>inline 3</BTBCheckbox>

<BTBCheckbox value="inline_7" color="red" inline checked>Red</BTBCheckbox>
<BTBCheckbox value="inline_8" color="blue" inline>Blue</BTBCheckbox>

<BTBCheckbox value="inline_9" inline disabled>Disabled</BTBCheckbox>
<BTBCheckbox value="inline_10" inline disabled checked>Disabled</BTBCheckbox>
<BTBCheckbox value="inline_11" inline disabled color="green" checked>Disabled Green</BTBCheckbox>

<BTBCheckbox value="inline_12" size="0.5rem" inline>0.5rem</BTBCheckbox>
<BTBCheckbox value="inline_13" size="1rem" inline>1rem</BTBCheckbox>
<BTBCheckbox value="inline_14" size="1.5rem" inline>1.5rem</BTBCheckbox>

<BTBCheckbox name="example" value="name_1" inline>1</BTBCheckbox>
<BTBCheckbox name="example" value="name_2" inline>2</BTBCheckbox>
<BTBCheckbox name="example" value="name_3" inline>3</BTBCheckbox>
<BTBCheckbox name="example" value="name_4" inline>4</BTBCheckbox>

<BTBCheckbox value="state_1" inline formValue={radioValue} onClick={_clickRadio}>1</BTBCheckbox>
<BTBCheckbox value="state_2" inline formValue={radioValue} onClick={_clickRadio}>2</BTBCheckbox>
<BTBCheckbox value="state_3" inline formValue={radioValue} onClick={_clickRadio}>3</BTBCheckbox>
<BTBCheckbox value="state_4" inline formValue={radioValue} onClick={_clickRadio}>4</BTBCheckbox>
`;

const preEvent = `const [checkboxValue, updateCheckboxValue] = useState([]);

const _clickCheckbox = (value, clickedValue) => {
        updateCheckboxValue(value)
}`;

const Basic = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  const [checkboxValue, updateCheckboxValue] = useState([]);

  const _clickCheckbox = (value, clickedValue) => {
    updateCheckboxValue(value)
    /* eslint-disable no-console */
    console.log('value',value)
    console.log('clickedValue',clickedValue)
    /* eslint-enable no-console */
  }

  return (
    <Page id="btb-pkg-form-example">
      <PageHead
        title={lang.translate('package.form.example.checkbox.title')}
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
        <p>{lang.translate('package.form.example.checkbox.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title="props">
          <div className="form_example">
            <BTBCheckbox value="inline_1">block 1</BTBCheckbox>
            <BTBCheckbox value="inline_2">block 2</BTBCheckbox>
            <BTBCheckbox value="inline_3">block 3</BTBCheckbox>
          </div>
          <div className="form_example">
            <BTBCheckbox value="inline_4" inline>inline 1</BTBCheckbox>
            <BTBCheckbox value="inline_5" inline>inline 2</BTBCheckbox>
            <BTBCheckbox value="inline_6" inline>inline 3</BTBCheckbox>
          </div>
          <div className="form_example">
            <BTBCheckbox value="inline_7" color="red" inline checked>Red</BTBCheckbox>
            <BTBCheckbox value="inline_8" color="blue" inline>Blue</BTBCheckbox>
          </div>
          <div className="form_example">
            <BTBCheckbox value="inline_9" inline disabled>Disabled</BTBCheckbox>
            <BTBCheckbox value="inline_10" inline disabled checked>Disabled</BTBCheckbox>
            <BTBCheckbox value="inline_11" inline disabled color="green" checked>Disabled Green</BTBCheckbox>
          </div>
          <div className="form_example">
            <BTBCheckbox value="inline_12" size="0.5rem" inline>0.5rem</BTBCheckbox>
            <BTBCheckbox value="inline_13" size="1rem" inline>1rem</BTBCheckbox>
            <BTBCheckbox value="inline_14" size="1.5rem" inline>1.5rem</BTBCheckbox>
          </div>
        </Block>

        <Block title="useState">
          <BTBCheckbox className="form_example" value="state_1" inline formValue={checkboxValue} onClick={_clickCheckbox}>1</BTBCheckbox>
          <BTBCheckbox className="form_example" value="state_2" inline formValue={checkboxValue} onClick={_clickCheckbox}>2</BTBCheckbox>
          <BTBCheckbox className="form_example" value="state_3" inline formValue={checkboxValue} onClick={_clickCheckbox}>3</BTBCheckbox>
          <BTBCheckbox className="form_example" value="state_4" inline formValue={checkboxValue} onClick={_clickCheckbox}>4</BTBCheckbox>
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

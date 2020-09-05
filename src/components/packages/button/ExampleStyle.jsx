import React from 'react';
import { useSelector } from 'react-redux';
import { Button as BTBButton, ButtonGroup as BTBButtonGroup } from '@blacktoolbox/react-button';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const buttonList = ['1', '2', '3'];

const styleObj_button = {
  button_item: {
    color: 'blue',
  },
  'itme-core': {
    color: 'red',
  },
};

const styleObj_group = {
  'button-list_1': {
    color: 'red',
  },
  'button-children_2': {
    color: 'blue',
  },
};

const preRender = `<BTBButton 
        prependNode="<<" 
        appendNode=">>" 
        styleObj={styleObj_button}
>
        Click
</BTBButton>

<BTBButtonGroup buttonList={buttonList} styleObj={styleObj_group}>
        <span>4</span>
        <span>5</span>
        <span>6</span>
</BTBButtonGroup>`;

const preButtonList = `const buttonList = ['1', '2', '3'];`;

const preSlotObj = `const styleObj_button = {
        button_item: {
                color: 'blue',
        },
        'itme-core': {
                color: 'red',
        },
};

const styleObj_group = {
        'button-list_1': {
                color: 'red',
        },
        'button-children_2': {
                color: 'red',
        },
};`;

const ExampleSlot = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-button-example-style">
      <PageHead
        title={lang.translate('package.button.example.style.title')}
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
        <p>{lang.translate('package.button.example.style.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title={lang.translate('package.button.name.button')}>
          <BTBButton prependNode="<<" appendNode=">>" styleObj={styleObj_button}>
            Click
          </BTBButton>
        </Block>
        <Block title={lang.translate('package.button.name.group')}>
          <BTBButtonGroup buttonList={buttonList} styleObj={styleObj_group}>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </BTBButtonGroup>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="buttonList">
          <pre className="page_pre">{preButtonList}</pre>
        </Block>
        <Block title="styleObj">
          <pre className="page_pre">{preSlotObj}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleSlot;

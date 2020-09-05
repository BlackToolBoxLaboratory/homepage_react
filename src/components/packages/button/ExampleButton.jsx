import React from 'react';
import { useSelector } from 'react-redux';
import { Button as BTBButton } from '@blacktoolbox/react-button';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBButton 
        prependNode="<<" 
        appendNode={<span>{'>>'}</span>} 
        onClick={onClick} 
        onPrependClick={onPrependClick} 
        onCoreClick={onCoreClick} 
        onAppendClick={onAppendClick}>
        {'Click Me!'}
</BTBButton>`;

const preClick = `function onClick () {
        console.log('onClick');
};

function onPrependClick () {
        console.log('onPrependClick');
};

function onCoreClick () {
        console.log('onCoreClick');
};

function onAppendClick () {
        console.log('onAppendClick');
};`;

const ExampleButton = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  function _onClick() {
    /* eslint-disable no-console */
    console.log('onClick');
    /* eslint-rnable no-console */
  }
  function _onPrependClick() {
    /* eslint-disable no-console */
    console.log('onPrependClick');
    /* eslint-rnable no-console */
  }
  function _onCoreClick() {
    /* eslint-disable no-console */
    console.log('onCoreClick');
    /* eslint-rnable no-console */
  }
  function _onAppendClick() {
    /* eslint-disable no-console */
    console.log('onAppendClick');
    /* eslint-rnable no-console */
  }

  return (
    <Page id="btb-pkg-button-example-button">
      <PageHead
        title={lang.translate('package.button.example.button.title')}
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
        <p>{lang.translate('package.button.example.button.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBButton
          prependNode="<<"
          appendNode={<span>{'>>'}</span>}
          onClick={_onClick}
          onPrependClick={_onPrependClick}
          onCoreClick={_onCoreClick}
          onAppendClick={_onAppendClick}
        >
          {'Click Me!'}
        </BTBButton>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="Click">
          <pre className="page_pre">{preClick}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleButton;

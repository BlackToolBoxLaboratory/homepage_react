import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Button as BTBButton } from '@blacktoolbox/react-button';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';
import packageInfo from './packageInfo.js';

const enhance = compose(
  connect(
    (state) => {
      return {
        'languageSetting'  : state.language.languageSetting
      };
    }
  )
);

const preRender = 
`<BTBButton 
        prependNode="<<" 
        appendNode={<span>{'>>'}</span>} 
        onClick={_onClick} 
        onPrependClick={_onPrependClick} 
        onCoreClick={_onCoreClick} 
        onAppendClick={_onAppendClick}>
        {'Click Me!'}
</BTBButton>`;

const preClick =
`function _onClick () {
        console.log('onClick');
};

function _onPrependClick () {
        console.log('onPrependClick');
};

function _onCoreClick () {
        console.log('onCoreClick');
};

function _onAppendClick () {
        console.log('onAppendClick');
};`;

const ExampleButton = enhance(() => {
  function _onClick () {
    console.log('onClick');
  }
  function _onPrependClick () {
    console.log('onPrependClick');
  }
  function _onCoreClick () {
    console.log('onCoreClick');
  }
  function _onAppendClick () {
    console.log('onAppendClick');
  }

  return (
    <Page className="btb-pkg-button-example-button">
      <PageHead title={lang.translate('package.button.example.button.title')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {lang.translate('package.button.example.button.description')}
        </p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBButton prependNode="<<" appendNode={<span>{'>>'}</span>} onClick={_onClick} onPrependClick={_onPrependClick} onCoreClick={_onCoreClick} onAppendClick={_onAppendClick}>
          {'Click Me!'}
        </BTBButton>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">
          {preRender}
        </pre>
        <Block title="Click">
          <pre className="page_pre">
            {preClick}}
          </pre>
        </Block>
      </Section>
    </Page>
  );
});

export default ExampleButton;

{/* 
<BTBButtonGroup onClick={_onGroupClick}>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</BTBButtonGroup>
<BTBButtonGroup onClick={_onGroupClick} direction="horizontal" styleObj={{'member-2' : {color : 'red'}}}>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</BTBButtonGroup>
<BTBButtonGroup onClick={_onGroupClick}>
</BTBButtonGroup>
<BTBButtonGroup onClick={_onGroupClick} direction="vertical">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</BTBButtonGroup> */}
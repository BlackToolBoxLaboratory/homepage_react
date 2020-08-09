import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { ButtonGroup  as BTBButtonGroup } from '@blacktoolbox/react-button';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const enhance = compose(
  connect((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  })
);

const preRender = `<BTBButtonGroup direction="horizontal" buttonList={buttonList} onEntryClick={onEntryClick} activeID="list_1">
        Children 1
        <div>Children 2</div>
</BTBButtonGroup>

<BTBButtonGroup direction="vertical" buttonList={buttonList} onEntryClick={onEntryClick} defaultActiveID="children_1">
        Children 1
        <div>Children 2</div>
</BTBButtonGroup>`;

const preButtonList = `const buttonList = [
        'List 1',
        (<div key="list_2">List 2</div>)
]`;

const preOnEntryClick = `const onEntryClick = (id, content) => {
        console.log( id, content)
}`;

const buttonList = [
  'List 1',
  (<div key="list_2">List 2</div>)
]

const ExampleGroup = enhance(() => {
  const _onEntryClick = (id, content) => {
    console.log( id, content)
  }
  return (
    <Page className="btb-pkg-button-example-group">
      <PageHead
        title={lang.translate('package.button.example.group.title')}
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
        <p>{lang.translate('package.button.example.group.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title="Horizontal">
          <BTBButtonGroup direction="horizontal" buttonList={buttonList} onEntryClick={_onEntryClick} activeID="list_1">
            Children 1
            <div id="text2">Children 2</div>
          </BTBButtonGroup>
        </Block>
        <Block title="Vertical">
          <BTBButtonGroup direction="vertical" buttonList={buttonList} onEntryClick={_onEntryClick} defaultActiveID="children_1">
            Children 1
            <div>Children 2</div>
          </BTBButtonGroup>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="buttonList">
          <pre className="page_pre">{preButtonList}</pre>
        </Block>
        <Block title="onEntryClick">
          <pre className="page_pre">{preOnEntryClick}</pre>
        </Block>
      </Section>
    </Page>
  );
});

export default ExampleGroup;

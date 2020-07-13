import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBList from '@blacktoolbox/react-list';

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

const ExampleSlot = enhance(() => {
  return (
    <Page className="btb-pkg-button-example-slot">
      <PageHead title={lang.translate('package.button.example.slot.title')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {/* {lang.translate('package.list.example.slot.description')} */}
          Slot
        </p>
      </Section>
      {/* <Section head={lang.translate('package.section.example')}>
        <BTBList dataList={_listData} slotObj={_slotObj}/>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">
          {preRender}
        </pre>
        <Block title="listData">
          <pre className="page_pre">
            {preListData}
          </pre>
        </Block>
        <Block title="styleObj">
          <pre className="page_pre">
            {preSlotObj}
          </pre>
        </Block>
      </Section> */}
    </Page>
  );
});

export default ExampleSlot;
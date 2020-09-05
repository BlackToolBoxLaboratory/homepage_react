import React from 'react';
import { useSelector } from 'react-redux';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const ExampleSlot = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-button-example-slot">
      <PageHead
        title={lang.translate('package.button.example.slot.title')}
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
};

export default ExampleSlot;

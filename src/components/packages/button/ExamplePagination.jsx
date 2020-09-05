import React from 'react';
import { useSelector } from 'react-redux';
import { Button as BTBButton, ButtonGroup as BTBButtonGroup } from '@blacktoolbox/react-button';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const ExamplePagination = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  const buttonList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return (
    <Page id="btb-pkg-button-example-pagination">
      <PageHead
        title={lang.translate('package.button.example.pagination.title')}
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
          Pagination
        </p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBButton className="pagination_tool" prependNode="<< Prev" appendNode="Next >>">
          <BTBButtonGroup className="pagination_page" buttonList={buttonList} activeID="list_1" />
        </BTBButton>
      </Section>
      {/* <Section head={lang.translate('package.section.sourceCode')}>
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

export default ExamplePagination;

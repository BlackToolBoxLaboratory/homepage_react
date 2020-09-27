import React from 'react';
import { useSelector } from 'react-redux';
import { Notice } from '@blacktoolbox/react-message';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<Notice type="normal"> Normal </Notice>

<Notice type="blue"> Blue </Notice>
<Notice type="grey"> Grey </Notice>
<Notice type="green"> Green </Notice>
<Notice type="red"> Red </Notice>
<Notice type="yellow"> Yellow </Notice>
<Notice type="light"> Light </Notice>
<Notice type="dark"> Dark </Notice>`;

const ExampleNotice = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-message-example-notice">
      <PageHead
        title={lang.translate('package.message.example.notice.title')}
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
        <p>{lang.translate('package.popover.example.align.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Notice type="normal">Normal</Notice>
        <Block title={lang.translate('package.message.example.notice.style')}>
          <Notice className="notice_example" type="blue">
            Blue
          </Notice>
          <Notice className="notice_example" type="grey">
            Grey
          </Notice>
          <Notice className="notice_example" type="green">
            Green
          </Notice>
          <Notice className="notice_example" type="red">
            Red
          </Notice>
          <Notice className="notice_example" type="yellow">
            Yellow
          </Notice>
          <Notice className="notice_example" type="light">
            Light
          </Notice>
          <Notice className="notice_example" type="dark">
            Dark
          </Notice>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
    </Page>
  );
};

export default ExampleNotice;

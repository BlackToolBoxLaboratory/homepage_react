import React from 'react';
// import { Notice, useMessage } from '@blacktoolbox/react-message';
// import { ButtonGroup as BTBButtonGroup } from '@blacktoolbox/react-button';
// import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section } from '@src/modules/pageLayout';
// import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

// const buttonList = ['blue', 'grey', 'green', 'red', 'yellow', 'light', 'dark'];

const BasicMessage = () => {
  // const message = useMessage();

  // const _onEntryClick = (id, content) => {
  //   message.send({
  //     type: content,
  //     context:
  //       'njophj ob opjbo boboip bpbhjk bfgkngfgsy chljvg fu odct dg kfv gj hgo ff utd  ctdo o vg kv hi uof cug cvt ov cdfo tu fi gjkg dj df dxyc gkh cg otu dc c ukdc utd t kfc gbv j123',
  //     closerNode: 'V',
  //   });
  // };
  return (
    <Page id="btb-pkg-message-basic">
      <PageHead title={lang.translate('package.message.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
      <Section
        head={
          <>
            {`${lang.translate('package.version_colon')}${packageInfo.version}`}
            <br />
            {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
          </>
        }
      >
        <p>{lang.translate(packageInfo.description)}</p>
      </Section>
      {/* <BTBButtonGroup buttonList={buttonList} onEntryClick={_onEntryClick} />
      <Notice type="red">123456748974915646531536</Notice>
      <Notice type="blue" context="nrsjsymgfjrsrt" /> */}
    </Page>
  );
};

export default BasicMessage;

import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@blacktoolbox/react-button';
// import BTBList from '@blacktoolbox/react-list';
// import BTBTable from '@blacktoolbox/react-table';
import { usePopup } from '@blacktoolbox/react-popup';

// import { lang } from '@src/plugins/btblab-prototype-languages.js';
// import { openLink } from '@src/utils/functions.js';

// import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
// import packageInfo from './packageInfo.js';

import { Page } from '@src/modules/pageLayout';

const Basic = () => {
  const popup = usePopup();
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  const _clickTest = () => {
    popup.show({
      content: (
        <div>
          <Button onClick={_clickTest2}>Click to Close</Button>
        </div>
      ),
    });
  };
  const _clickTest2 = () => {
    popup.hide();
  };
  return (
    <Page id="btb-pkg-popover-basic">
      <Button onClick={_clickTest}>Click to open</Button>
      {/* <PageHead title={lang.translate('package.popover.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
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
      <Section head={lang.translate('package.section.installation')}>
        <pre className="page_pre">{preInstall}</pre>
      </Section>
      <Section head={lang.translate('package.section.render')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
      <Section head={lang.translate('package.section.parameters')}>
        <BTBTable
          className="page_table"
          mode="list"
          headData={tableHeadArr_property}
          bodyData={tableBodyArr_basic}
          slotObj={tableSlotObj}
        />
        <Block title="styleObj">
          <p>{lang.translate('package.popover.parameters.styleObj')}</p>
          <pre className="page_pre">{preStyleObj}</pre>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <BTBList className="page_node_tree" dataList={nodeTree} />
      </Section> */}
    </Page>
  );
};

export default Basic;

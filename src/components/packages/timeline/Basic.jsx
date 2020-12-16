import React from 'react';
import { useSelector } from 'react-redux';
// import { Button } from '@blacktoolbox/react-button';
// import BTBList from '@blacktoolbox/react-list';
// import BTBTable from '@blacktoolbox/react-table';
import Timeline from '@blacktoolbox/react-timeline';

// import { lang } from '@src/plugins/btblab-prototype-languages.js';
// import { openLink } from '@src/utils/functions.js';

// import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
// import packageInfo from './packageInfo.js';

import { Page } from '@src/modules/pageLayout';

const Basic = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  const timebox = [
    '1',
    '2',
    {
      type: 'test',
      content: '3333333'
    },
    '4',
    {
      type: 'test',
      content: '555555555'
    },
    {
      type: 'test',
      content: '6666666'
    },
    {
      type: 'test',
      content: '77777777'
    },
    '888888',
    '99999',
    '00000',
    'aaaaaa',
    'bbbbbbbb',
    'cccccc',
    'dddddd'
  ]
  const typeObj = {
    'test': (data)=>{
    return (<div>{data.content}<br/>123<br/>4564</div>)
    }
  }

  return (
    <Page id="btb-pkg-popover-basic">
      <Timeline nodeList={timebox} typeObj={typeObj} align="start" position="left"/>
      <Timeline nodeList={timebox} typeObj={typeObj} align="center" position="x"/>
      <Timeline nodeList={timebox} typeObj={typeObj} align="end" position="right"/>

      <Timeline nodeList={timebox} typeObj={typeObj} align="start" position="top"/>
      <Timeline nodeList={timebox} typeObj={typeObj} align="center" position="y"/>
      <Timeline nodeList={timebox} typeObj={typeObj} align="end" position="bottom"/>


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

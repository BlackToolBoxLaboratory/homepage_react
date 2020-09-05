import React from 'react';
import { useSelector } from 'react-redux';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBTable 
        mode="compare" 
        headData={headData} 
        bodyData={bodyData}/>`;

const preHeadData = `const headDate = [
        {name : 'Name', id : 'name' },
        {name : 'Type', id : 'devType' },
        {name : 'OS', id : 'osType' },
        {name : 'IP', id : 'ipAddr' },
        {name : 'MAC', id : 'macAddr' },
        {name : 'Traffic(tx / rx)', id : 'traffic' },
        {name : 'Statue', id : 'statusDesc'}
];`;

const preBodyData = `const bodyData = [
        {
                name : 'Device 1',  
                devType : 'phone',   
                osType : 'ios',      
                ipAddr : '192.168.0.50',   
                macAddr : 'B4:A2:07:44:55:2A', 
                traffic : '1.7 MB / 45 KB', 
                status : 0, 
                statusDesc : 'Disconnected'
        }, {
                name : 'Device 2',  
                devType : 'notebook',   
                osType : 'windows',      
                ipAddr : '192.168.0.52',   
                macAddr : 'B4:A2:07:44:DD:FF', 
                traffic : '4.8 MB / 27 KB', 
                status : 0, 
                statusDesc : 'Disconnected'
        }
];`;

const tableHeadArr_property = [
  { name: 'Name', id: 'name' },
  { name: 'Type', id: 'devType' },
  { name: 'OS', id: 'osType' },
  { name: 'IP', id: 'ipAddr' },
  { name: 'MAC', id: 'macAddr' },
  { name: 'Traffic(tx / rx)', id: 'traffic' },
  { name: 'Statue', id: 'statusDesc' },
];

const tableBodyArr_data = [
  {
    name: 'Device 1',
    devType: 'phone',
    osType: 'ios',
    ipAddr: '192.168.0.50',
    macAddr: 'B4:A2:07:44:55:2A',
    traffic: '1.7 MB / 45 KB',
    status: 0,
    statusDesc: 'Disconnected',
  },
  {
    name: 'Device 2',
    devType: 'notebook',
    osType: 'windows',
    ipAddr: '192.168.0.52',
    macAddr: 'B4:A2:07:44:DD:FF',
    traffic: '4.8 MB / 27 KB',
    status: 0,
    statusDesc: 'Disconnected',
  },
];

const ExampleCompare = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-table-example-compare">
      <PageHead
        title={lang.translate('package.table.example.compare.title')}
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
        <p>{lang.translate('package.table.example.compare.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBTable
          className="table_sample"
          mode="compare"
          headData={tableHeadArr_property}
          bodyData={tableBodyArr_data}
        />
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="headData">
          <pre className="page_pre">{preHeadData}</pre>
        </Block>
        <Block title="bodyData">
          <pre className="page_pre">{preBodyData}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleCompare;

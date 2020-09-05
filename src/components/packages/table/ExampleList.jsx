import React from 'react';
import { useSelector } from 'react-redux';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBTable
        mode="list" 
        headData={headData} 
        bodyData={bodyData}/>`;

const preHeadData = `const headData = [
        {name : 'Name', id : 'name'},
        {name : 'Type', id : 'devType'},
        {name : 'OS', id : 'osType'},
        {name : 'IP', id : 'ipAddr'},
        {name : 'MAC', id : 'macAddr'},
        {name : 'Traffic(tx / rx)', id : 'traffic'},
        {name : 'Statue', id : 'statusDesc'}
];`;

const preBodyData = `const bodyData = [
        {name : 'Device 1', devType : 'phone', osType : 'ios', ipAddr : '192.168.0.50', macAddr : 'B4:A2:07:44:55:2A', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'},
        {name : 'Device 2', devType : 'switch', osType : 'linux', ipAddr : '192.168.0.37', macAddr : '7E:EF:02:44:AE:25', traffic : '2.7 MB / 263 KB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 3', devType : 'ap', osType : 'linux', ipAddr : '192.168.0.121', macAddr : 'EF:2B:15:44:32:B4', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},
        {name : 'Device 4', devType : 'phone', osType : 'android',  ipAddr : '192.168.0.9', macAddr : 'F5:22:33:44:55:35', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'},
        {name : 'Device 5', devType : 'ap', osType : 'linux', ipAddr : '192.168.0.27', macAddr : '7E:EF:B2:44:28:3B', traffic : '1.3 MB / 725 KB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 6', devType : 'pc', osType : 'windows', ipAddr : '192.168.0.11', macAddr : '11:22:24:44:5E:90', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},
        {name : 'Device 7', devType : 'phone', osType : 'ios', ipAddr : '192.168.0.6', macAddr : '11:FF:33:44:55:A3', traffic : '1.2 MB / 45 KB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 8', devType : 'pc', osType : 'linux', ipAddr : '192.168.0.3', macAddr : 'B2:FE:B8:44:55:6D', traffic : '4.8 MB / 3.7 MB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 9', devType : 'pc', osType : 'windows',  ipAddr : '192.168.0.18', macAddr : 'E4:AA:74:44:38:E1', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},
        {name : 'Device 10', devType : 'switch', osType : 'linux', ipAddr : '192.168.0.245', macAddr : 'E2:BA:33:44:48:AB', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'}
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
    traffic: '0 MB / 0 KB',
    status: 0,
    statusDesc: 'Disconnected',
  },
  {
    name: 'Device 2',
    devType: 'switch',
    osType: 'linux',
    ipAddr: '192.168.0.37',
    macAddr: '7E:EF:02:44:AE:25',
    traffic: '2.7 MB / 263 KB',
    status: 1,
    statusDesc: 'Connected',
  },
  {
    name: 'Device 3',
    devType: 'ap',
    osType: 'linux',
    ipAddr: '192.168.0.121',
    macAddr: 'EF:2B:15:44:32:B4',
    traffic: '0 MB / 0 KB',
    status: 2,
    statusDesc: 'Locked',
  },
  {
    name: 'Device 4',
    devType: 'phone',
    osType: 'android',
    ipAddr: '192.168.0.9',
    macAddr: 'F5:22:33:44:55:35',
    traffic: '0 MB / 0 KB',
    status: 0,
    statusDesc: 'Disconnected',
  },
  {
    name: 'Device 5',
    devType: 'ap',
    osType: 'linux',
    ipAddr: '192.168.0.27',
    macAddr: '7E:EF:B2:44:28:3B',
    traffic: '1.3 MB / 725 KB',
    status: 1,
    statusDesc: 'Connected',
  },
  {
    name: 'Device 6',
    devType: 'pc',
    osType: 'windows',
    ipAddr: '192.168.0.11',
    macAddr: '11:22:24:44:5E:90',
    traffic: '0 MB / 0 KB',
    status: 2,
    statusDesc: 'Locked',
  },
  {
    name: 'Device 7',
    devType: 'phone',
    osType: 'ios',
    ipAddr: '192.168.0.6',
    macAddr: '11:FF:33:44:55:A3',
    traffic: '1.2 MB / 45 KB',
    status: 1,
    statusDesc: 'Connected',
  },
  {
    name: 'Device 8',
    devType: 'pc',
    osType: 'linux',
    ipAddr: '192.168.0.3',
    macAddr: 'B2:FE:B8:44:55:6D',
    traffic: '4.8 MB / 3.7 MB',
    status: 1,
    statusDesc: 'Connected',
  },
  {
    name: 'Device 9',
    devType: 'pc',
    osType: 'windows',
    ipAddr: '192.168.0.18',
    macAddr: 'E4:AA:74:44:38:E1',
    traffic: '0 MB / 0 KB',
    status: 2,
    statusDesc: 'Locked',
  },
  {
    name: 'Device 10',
    devType: 'switch',
    osType: 'linux',
    ipAddr: '192.168.0.245',
    macAddr: 'E2:BA:33:44:48:AB',
    traffic: '0 MB / 0 KB',
    status: 0,
    statusDesc: 'Disconnected',
  },
];

const ExampleList = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-table-example-list">
      <PageHead
        title={lang.translate('package.table.example.list.title')}
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
        <p>{lang.translate('package.table.example.list.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBTable className="table_sample" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr_data} />
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

export default ExampleList;

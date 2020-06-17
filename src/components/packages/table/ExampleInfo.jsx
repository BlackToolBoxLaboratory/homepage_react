import React from 'react';
import BTBTable from '@blacktoolbox/react-table';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

const pageInfo = {
  ...packageInfo,
  'title'       : 'Example - Info',
  'description' : 'Here has very simple example to show how to use the info mode.'
};

const preRender =
`<BTBTable 
        mode="info" 
        headData={headData} 
        bodyData={bodyData}/>`;

const preHeadData =
`const headData = [
  {name : 'Name', id : 'name'},
  {name : 'Type', id : 'devType'},
  {name : 'OS', id : 'osType'},
  {name : 'IP', id : 'ipAddr'},
  {name : 'MAC', id : 'macAddr'},
  {name : 'Traffic(tx / rx)', id : 'traffic'},
  {name : 'Statue', id : 'statusDesc'}
];`;

const preBodyData = 
`const bodyData = [
  {
    name : 'Device 1',  
    devType : 'phone',   
    osType : 'ios',      
    ipAddr : '192.168.0.50',   
    macAddr : 'B4:A2:07:44:55:2A', 
    traffic : '1.7 MB / 45 KB', 
    status : 0, 
    statusDesc : 'Disconnected'
  },
  {
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
  {name : 'Name',              id : 'name'},
  {name : 'Type',              id : 'devType'},
  {name : 'OS',                id : 'osType'},
  {name : 'IP',                id : 'ipAddr'},
  {name : 'MAC',               id : 'macAddr'},
  {name : 'Traffic(tx / rx)',  id : 'traffic'},
  {name : 'Statue',            id : 'statusDesc'}
];

const tableBodyArr_data = [
  {
    name       : 'Device 1',  
    devType    : 'phone',   
    osType     : 'ios',      
    ipAddr     : '192.168.0.50',   
    macAddr    : 'B4:A2:07:44:55:2A', 
    traffic    : '1.7 MB / 45 KB', 
    status     : 0, 
    statusDesc : 'Disconnected'
  },
  {
    name       : 'Device 2',  
    devType    : 'notebook',   
    osType     : 'windows',      
    ipAddr     : '192.168.0.52',   
    macAddr    : 'B4:A2:07:44:DD:FF', 
    traffic    : '4.8 MB / 27 KB', 
    status     : 0, 
    statusDesc : 'Disconnected'
  }
];

const ExampleMode = () => {
  return (
    <Page className="btb-pkg-table-example-info">
      <PageHead title={pageInfo.title} clickBtn={openLink} btnList={pageInfo.linkList} />
      <Section head={(
        <>
          {`Version: ${pageInfo.version}`}<br/>
          {`Release Date: ${pageInfo.updated}`}
        </>
      )}>
        <p>
          {pageInfo.description}
        </p>
      </Section>
      <Section head="EXAMPLE">
        <BTBTable className="table_sample" mode="info" headData={tableHeadArr_property} bodyData={tableBodyArr_data}/>
      </Section>
      <Section head="SOURCECODE">
        <Block title="render">
          <pre className="page_pre">
            {preRender}
          </pre>
        </Block>
        <Block title="headData">
          <pre className="page_pre">
            {preHeadData}
          </pre>
        </Block>
        <Block title="bodyData">
          <pre className="page_pre">
            {preBodyData}
          </pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleMode;
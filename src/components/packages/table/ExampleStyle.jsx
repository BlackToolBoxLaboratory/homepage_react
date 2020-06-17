import React from 'react';
import BTBTable from '@blacktoolbox/react-table';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

const pageInfo = {
  ...packageInfo,
  'title'       : 'Example - Style',
  'description' : 'Here is going to show you about how to use the styleObj for inline style. Then we can use with the class name of node directly.'
};

const preRender =
`<BTBTable 
        mode="compare" 
        headData={headData} 
        bodyData={bodyData}
        styleObj={styleObj}/>`;

const preHeadData = 
`const headDate = [
  {name : 'Name', id : 'name' },
  {name : 'Type', id : 'devType' },
  {name : 'OS', id : 'osType' },
  {name : 'IP', id : 'ipAddr' },
  {name : 'MAC', id : 'macAddr' },
  {name : 'Traffic(tx / rx)', id : 'traffic' },
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

const preStyleObj =
`const styleObj = {
  'table_compare' : {
    'box-shadow' : '0 15px 30px -10px rgba(92, 101, 107, 0.15)',
    'background-color' : '#ffffff'
  },
  'tr_th' : {
    'padding' : '0.25rem 0.5rem',
    'width' : '100px',
    'background-color' : '#BAE0E7'
  },
  'tr_td' : {
    'padding' : '0.25rem 0.5rem',
    'width' : '100px',
    'text-align' : 'center',
    'border-left' : '2px solid #BAE0E7'
  }
};`;

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

const styleObj = {
  'table_compare' : {
    'box-shadow'       : '0 15px 30px -10px rgba(92, 101, 107, 0.15)',
    'background-color' : '#ffffff'
  },
  'tr_th' : {
    'padding'          : '0.25rem 0.5rem',
    'width'            : '100px',
    'background-color' : '#BAE0E7'
  },
  'tr_td' : {
    'padding'     : '0.25rem 0.5rem',
    'width'       : '100px',
    'text-align'  : 'center',
    'border-left' : '2px solid #BAE0E7'
  }
};

const ExampleStyle = () => {
  return (
    <Page className="btb-pkg-table-example-style">
      <PageHead title={pageInfo.title} clickBtn={openLink} linkList={pageInfo.linkList} />
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
        <BTBTable className="table_sample" mode="compare" headData={tableHeadArr_property} bodyData={tableBodyArr_data} styleObj={styleObj}/>
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
        <Block title="styleObj">
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleStyle;
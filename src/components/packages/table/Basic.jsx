import React from 'react';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

const pageInfo = {
  ...packageInfo,
  'title' : 'Table - Basic'
};

const preInstall = 
`$ npm install --save @blacktoolbox/reat-table

import BTBTable from '@blacktoolbox/reat-table'
import '@blacktoolbox/react-table/lib/index.css'`;

const preRender =
`<BTBTable
        headData=" Array of headObj" 
        bodyData=" Array of bodyObj "
        mode=" String "
        styleObj=" Object "
        slotObj=" Object "
        onDataClick=" function(bodyObj){} "/>`;

const preHeadObj =
`headObj = {
        id: '',
        name: ''
}`;

const preBodyObj = 
`bodyObj = {
        [ headObj.index ] : ''
}`;

const preStyleObj =
`styleObj = {
        [ className ]: { inline CSS }
}`;

const preSlotObj = 
`slotObj = {
        [ \`th_\${ headObj.id }\` ] : '',
        [ \`td_\${ headObj.id }\` ] : ''
}`;

const nodeTree_list = [
  {
    id       : 'list',
    title    : '<dib> .btb-react-table',
    children : [
      {
        id       : 'table',
        title    : '<table> .table_list]',
        children : [
          {
            id       : 'thead',
            title    : '<thead> .list_head',
            children : [
              {
                id       : 'thead_tr',
                title    : '<tr> .head_tr',
                children : [
                  {
                    id    : 'tr_th',
                    title : '<th> .tr_th .th_[headObj.id]'
                  }
                ]
              }
            ]
          },
          {
            id       : 'tbody',
            title    : '<tbody> .list_body',
            children : [
              {
                id       : 'body_tr',
                title    : '<tr> .body_tr .tr_[data order]',
                children : [
                  {
                    id    : 'tr_td',
                    title : '<th> .tr_td .td_[headObj.id]'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const nodeTree_info = [
  {
    id       : 'table',
    title    : '<div> .btb-react-table',
    children : [
      {
        id       : 'info',
        title    : '<table> .table_info .info-[data order]',
        children : [
          {
            id       : 'tbody',
            title    : '<tbody> .info_body',
            children : [
              {
                id       : 'tr',
                title    : '<tr> .tbody_tr .tr-[headObj.id]',
                children : [
                  {
                    id    : 'th',
                    title : '<th> .tr_th .th-[headObj.id]'
                  },
                  {
                    id    : 'td',
                    title : '<td> .tr_td .td-[headObj.id]',
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const tableHeadArr_property = [
  { name : 'Property Name', id : 'title' },
  { name : 'Type', id : 'type' },
  { name : 'Default', id : 'default' },
  { name : 'Notice', id : 'notice' }
];
const tableHeadArr_headObj = [
  { name : 'Name', id : 'title' },
  { name : 'Type', id : 'type' },
  { name : 'Notice', id : 'notice' }
];
const tableHeadArr_slot = [
  { name : 'Name', id : 'title' },
  { name : 'Type', id : 'type' },
  { name : 'Notice', id : 'notice' }
];
const tableBodyArr_basic = [
  { title : 'headData', type : 'Array', default : '[]', notice : 'List of headObj.' },
  { title : 'bodyData', type : 'Array', default : '[]', notice : 'List of bodyObj.' },
  { title : 'mode', type : 'String', default : 'list', notice : 'Value in \'list\', \'info\' or \'compare\'' },
  { title : 'styleObj', type : 'Object', default : '{}', notice : 'Object of customized style.' },
  { title : 'slotObj', type : 'Object', default : '{}', notice : 'Object of customized entry of head or body.' },
  { title : 'onDataClick', type : 'Function', default : 'undefined', notice : 'Function for data clicked.' }
];
const tableBodyArr_headObj = [
  { title : 'id', type : 'Array', default : '[]', notice : 'Identity of column.' },
  { title : 'name', type : 'Array', default : '[]', notice : 'Name of column.' }
];
const tableBodyArr_slot = [
  { title  : '[ th_${ headObj.id } ]', type   : 'String || Node || Function', notice : (
    <>
      Slot for customized th of data. Here is the example for function if used. The porps will be entry corresponding the id.
      <pre className="page_pre">
        {`(headObj) => {}`}
      </pre>
    </>)
  },
  { title  : '[ td_${ headObj.id } ]', type   : 'String || Node || Function', notice : (
    <>
      Slot for customized td of data. Here is the example for function if used. The porps will be entry corresponding the id.
      <pre className="page_pre">
        {`(bodyObj, headObj) => {}`}
      </pre>
    </>)
  }
];

const Basic = () => {
  return (
    <Page className="btb-pkg-table-basic">
      <PageHead title={pageInfo.title} clickBtn={openLink} btnList={pageInfo.btnList}/>
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
      <Section head="INSTALLATION">
        <pre className="page_pre">
          {preInstall}
        </pre>
      </Section>
      <Section head="RENDER">
        <pre className="page_pre">
          {preRender}
        </pre>
      </Section>
      <Section head="PARAMETERS">
        <Block title="Basic">
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr_basic}/>
        </Block>
        <Block title="headObj">
          <pre className="page_pre">
            {preHeadObj}
          </pre>
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_headObj} bodyData={tableBodyArr_headObj}/>
        </Block>
        <Block title="bodyObj">
          <pre className="page_pre">
            {preBodyObj}
          </pre>
        </Block>
        <Block title="styleObj">
          <p>Any className in this module could add inline CSS by styleObj.</p>
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
        <Block title="slotObj">
          <p>We could replace the default node with bodyObj.id by slotObj. However we need the prefix to specify which node we want to customized th or td. </p>
          <pre className="page_pre">
            {preSlotObj}
          </pre>
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_slot} bodyData={tableBodyArr_slot}/>
        </Block>
      </Section>
      <Section head="NODE TREE">
        <Block title="List Mode">
          <BTBList className="page_node_tree" dataList={nodeTree_list}/>
          <p>{'Note: The data order is counted base on 0.'}</p>
        </Block>
        <Block title="Info Mode">
          <BTBList className="page_node_tree" dataList={nodeTree_info}/>
          <p>{'Note: The data order is counted base on 0.'}</p>
        </Block>
      </Section>
    </Page>
  );
};

export default Basic;
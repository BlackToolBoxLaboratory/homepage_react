import React from 'react';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import packageObj from '@src/assets/definitions/packageObj';
import { openLink } from '@src/utils/functions.js';

const packageInfo = {
  'version'     : packageObj.list.version,
  'updated'     : packageObj.list.updated,
  'description' : packageObj.list.description,
  'btnList'     : [
    { 
      'id'  : 'github', 
      'fa'  : ['fab', 'github'], 
      'url' : 'https://github.com/BlackToolBoxLaboratory/react-list' 
    }, { 
      'id'  : 'npm', 
      'fa'  : ['fab', 'npm'], 
      'url' : 'https://www.npmjs.com/package/@blacktoolbox/react-list'
    }
  ]
};

const preInstall = 
`$ npm install --save @blacktoolbox/reat-list

import BTBList from '@blacktoolbox/reat-list'
import '@blacktoolbox/react-list/lib/index.css'`;

const preRender =
`<BTBList dataList={ Array } 
        dataList=" Array of entryObj" 
        defaultActiveID=" String "
        activeID=" String "
        collapseEnable=" Boolean "
        onEntryClick=" function(entryObj){} "
        onToggle=" function(entryObj){} "/>`;

const preEntryObj = 
`entryObj = {
        id: '',
        title: '',
        defaultCollapsed: false,
        children: [...]
}`;

const nodeTree = [
  {
    id       : 'list',
    title    : '<div> .btb-react-list',
    children : [
      {
        id       : 'layer',
        title    : '<ul> .btb-react-list-layer .layer-[layer count]',
        children : [
          {
            id       : 'container',
            title    : '<li> .layer-container .layer-[layer count]',
            children : [
              {
                id       : 'entry',
                title    : '<div> .container_entry .entry-[id] .entry-active',
                children : [
                  {
                    id    : 'title',
                    title : '<div> .entry_title'
                  },
                  {
                    id       : 'collapseBtn',
                    title    : '<div> .entry_collapseBtn .collapseBtn-default',
                    children : [
                      {
                        id    : 'arrow',
                        title : '<div> .collapseBtn_arrow'
                      }
                    ]
                  }
                ]
              },
              {
                id       : 'sublayer',
                title    : '<div>.list_sublayer',
                children : [
                  {
                    id    : 'next',
                    title : '<ul>.btb-vue-list-layer.layer-[layer count + 1]'
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
  { name : 'Property Name', index : 'title' },
  { name : 'Type', index : 'type' },
  { name : 'Default', index : 'default' },
  { name : 'Notice', index : 'notice' }
];
const tableHeadArr_slot = [
  { name : 'Name', index : 'title' },
  { name : 'Type', index : 'type' },
  { name : 'Notice', index : 'notice' }
];
const tableBodyArr_basic = [
  { title : 'dataList', type : 'Array', default : '[]', notice : 'List of dataObj.' },
  { title : 'activeID', type : 'String', default : 'undefined', notice : 'Actived entry.' },
  { title : 'defaultActiveID', type : 'String', default : 'undefined', notice : 'Default actived entry.' },
  { title : 'collapseEnable', type : 'Boolean', default : 'false', notice : 'Width of table.' },
  { title : 'styleObj', type : 'Object', default : '{}', notice : 'Object of customized style.' },
  { title : 'slotObj', type : 'Object', default : '{}', notice : 'Object of slot which for render specific entry.' },
  { title : 'onEntryClick', type : 'Function', default : 'undefined', notice : 'Function for some entry clicked.' },
  { title : 'onToggle', type : 'Function', default : 'undefined', notice : 'Fuction for while collapseEnable is ture and some collapsing triggered.' }
];

const tableBodyArr_entry = [
  { title : 'id', type : 'String', default : 'undefined', notice : 'Identity of entry' },
  { title : 'title', type : 'String || Node', default : '\'\'', notice : 'Show name of entry.' },
  { title : 'defaultCollapsed', type : 'String', default : 'undefined', notice : 'Default value to collapsed of extend.' },
  { title : 'children', type : 'Array', default : '[]', notice : 'sublist' }
];

const tableBodyArr_slot = [
  { title  : '[ id of entryObj ]', type   : 'String || Node || Function', notice : (
    <>
      Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id.
      <pre className="page_pre">
        {`(entry) => {}`}
      </pre>
    </>)
  }
];

const Basic = () => {
  return (
    <Page className="btb-pkg-list-basic">
      <PageHead title={'List Basic'} clickBtn={openLink} btnList={packageInfo.btnList}/>
      <Section head={(
        <>
          {`Version: ${packageInfo.version}`}<br/>
          {`Release Date: ${packageInfo.updated}`}
        </>
      )}>
        <p>
          {packageInfo.description}
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
        <Block title="entryObj">
          <pre className="page_pre">
            {preEntryObj}
          </pre>
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr_entry}/>
        </Block>
        <Block title="slots">
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_slot} bodyData={tableBodyArr_slot}/>
        </Block>
      </Section>
      <Section head="NODE TREE">
        <BTBList className="page_node_tree" dataList={nodeTree}/>
        <p>
          {'Note: The layer count is counted base on 0.'}
        </p>
      </Section>
    </Page>
  );
};

export default Basic;
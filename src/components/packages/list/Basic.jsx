import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import BTBList from '@blacktoolbox/react-list';

import { Page, PageHead, Section } from '@src/modules/pageLayout/index.js';

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
        <pre className="page_pre">
          {preEntryObj}
        </pre>
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
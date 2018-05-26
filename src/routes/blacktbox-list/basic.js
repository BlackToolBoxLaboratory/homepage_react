import React, { Component } from 'react';
import FA from 'react-fontawesome';

import BTBTable from 'blacktbox-table';
import BTBList from 'blacktbox-list';

import ALayout from 'components/articleLayout.js';

const mainTitle = (<span>Blacktbox-list <a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-list'><FA name='github' fixedWidth/></a></span>);
const mainDescriptionStr = `List-maker tool.`;

const installationTitle = `INSTALLATION`;
const installationContent = (<span>Using with <a target='_blank' href='https://www.npmjs.com'>{`NPM`}<FA name='external-link' fixedWidth/></a>.</span>);

const renderTitle = `RENDER`;
const renderContent = (<span>Notice: DOM properties are still work with <a target='_blank' href='https://reactjs.org/docs/dom-elements.html'>{`ReactJS`}<FA name='external-link' fixedWidth/></a>.</span>);

const nodeTreeTitle = `NODE TREE`;
const nodeTreeContent = `Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component's input: styleObj.`;
const nodeTreeNotice = `Notice: The layer.index is counted base on 0.`;

const INSTALLATION_PRE = 
`$ npm install --save blacktbox-list

// using ES6 modules
import BTBList from 'blacktbox-list';

// using CommonJS modules
var BTBList = require('blacktbox-list');`;
const RENDER_PRE = 
`<BTBList 
  listArr: [],
  styleObj: {},
  inputRefFn: ()=>{}
/>`;
const LISTARR_PRE = 
`listArr = [{
  name: '',
  children: [...]
}, ...]`;
const SUBLISTARR_PRE = 
`children = [{
  name: '',
  children: [...]
}, ...]`;
const STYLEOBJ_PRE = 
`styleObj = {
  'Node's className': {CSS Object}
  , ...
}`;
const PARAM_HEAD = new Array(
  {name: 'Property Name', index: 'name'},
  {name: 'Type',          index: 'type'},
  {name: 'Default',       index: 'default'},
  {name: 'Notice',        index: 'notice'}
);
const PARAM_BODY = new Array(
  {name: 'listArr',     type: 'Array',          default:  '[]',     notice: (<pre className='content-pre'>{LISTARR_PRE}</pre>)},
  {name: '- name',      type: 'String or Node', default:  '\'\'',   notice: 'String or Node to show layer name.'},
  {name: '- children',  type: 'Array',          default:  '[]',     notice: (<pre className='content-pre'>{SUBLISTARR_PRE}</pre>)},
  {name: 'styleObj',    type: 'Object',         default:  '{}',     notice: (<pre className='content-pre'>{STYLEOBJ_PRE}</pre>)},
  {name: 'inputRefFn',  type: 'Function',       default:  '()=>{}', notice: 'To catch ref with (ref)=>{variable = ref}.'}
);
const NODE_TREE = new Array(
  {
    'name': '<div> .btb-list',
    'children':[
      {
        'name': '<ul> .list-layer (.layer-0)',
        'children': [
          {
            'name': '<li> .layer-item',
            'children': [
              {
                'name': '<div> .iterm-content',
                'children': [
                  {
                    'name': '<div> .content-name',
                  }
                ]
              },
              {
                'name': '<div> .item-sublist',
                'children': [
                  {
                    'name': '<ul> .list-layer (.layer-{layer.index})'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
);
const PARAM_MODE = {
  mode: 'list'
};

class Basic extends Component {
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <ALayout.MainTitle>{mainTitle}</ALayout.MainTitle>
        <ALayout.MainDescription>{mainDescriptionStr}</ALayout.MainDescription>
        <ALayout.Section>
          <ALayout.SectionTitle>{installationTitle}</ALayout.SectionTitle>
          <ALayout.Content>{installationContent}</ALayout.Content>
          <ALayout.Pre>{INSTALLATION_PRE}</ALayout.Pre>
        </ALayout.Section>
        <ALayout.Section>
          <ALayout.SectionTitle>{renderTitle}</ALayout.SectionTitle>
          <ALayout.Pre>{RENDER_PRE}</ALayout.Pre>
          <BTBTable
            tableHeadArr={PARAM_HEAD}
            tableBobyArr={PARAM_BODY}
            modeObj={PARAM_MODE}
            className='content-paramlist'
          />
          <ALayout.Content>{renderContent}</ALayout.Content>
        </ALayout.Section>
        <ALayout.Section>
          <ALayout.SectionTitle>{nodeTreeTitle}</ALayout.SectionTitle>
          <ALayout.Content>{nodeTreeContent}</ALayout.Content>
          <ALayout.Content>
            <BTBList 
              className='content-nodetree'
              listArr={NODE_TREE}
            />
          </ALayout.Content>
          <ALayout.Content>{nodeTreeNotice}</ALayout.Content>
        </ALayout.Section>
      </div>
    );
    return content;
  };
};

export default Basic;

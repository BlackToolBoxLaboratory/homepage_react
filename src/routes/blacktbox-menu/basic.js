import React, { Component } from 'react';
import FA from 'react-fontawesome';

import BTBTable from 'blacktbox-table';
import BTBList from 'blacktbox-list';

import ALayout from 'components/articleLayout.js';

const mainTitle = (<span>Blacktbox-menu <a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-menu'><FA name='github' fixedWidth/></a></span>);
const mainDescriptionStr = `Menu-maker tool.`;

const installationTitle = `INSTALLATION`;
const installationContent = (<span>Using with <a target='_blank' href='https://www.npmjs.com'>{`NPM`}<FA name='external-link' fixedWidth/></a>.</span>);

const renderTitle = `RENDER`;
const renderContent = (<span>Notice: DOM properties are still work with <a target='_blank' href='https://reactjs.org/docs/dom-elements.html'>{`ReactJS`}<FA name='external-link' fixedWidth/></a>.</span>);

const nodeTreeTitle = `NODE TREE`;
const nodeTreeContent = `Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component's input: styleObj.`;
const nodeTreeNotice = `Notice: The layer.index is counted base on 0.`;

const INSTALLATION_PRE = 
`$ npm install --save blacktbox-menu

// using ES6 modules
import BTBMenu from 'blacktbox-menu';

// using CommonJS modules
var BTBMenu = require('blacktbox-menu');`;
const RENDER_PRE = 
`<BTBMenu 
  menuArr: [],
  styleObj: {},
  inputRefFn: ()=>{},
  acticveIndex: '',
  itemOnClickFn: ()=>{},
  featureCollapsible: {
    enable: false,
    customCollapseButton: '',
    itemOnCollapseFn: ()=>{}
  }
/>`;
const MENUARR_PRE = 
`menuArr = [{
  name: '',
  index: '',
  defaultCollapse: true,
  children: [...]
}, ...]`;
const SUBMENUARR_PRE =
`children = [{
  name: '',
  index: '',
  defaultCollapse: true,
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
  {name: 'menuArr',                 type: 'Array',          default:  '[]',     notice: (<pre className='content-pre'>{MENUARR_PRE}</pre>)},
  {name: '- name',                  type: 'String or Node', default:  '\'\'',   notice: 'String or Node to show layer name.'},
  {name: '- index',                 type: 'String',         default:  '\'\'',   notice: 'Menu entry\'s ID.'},
  {name: '- defaultCollapse',       type: 'Boolean',        default:  'false',  notice: 'Menu entry\'s default collapse status. While featureCollapsible enabled, the default is true'},
  {name: '- children',              type: 'Array',          default:  '[]',     notice: (<pre className='content-pre'>{SUBMENUARR_PRE}</pre>)},
  {name: 'acticveIndex',            type: 'String',         default:  '\'\'',   notice: 'Default active menu entry\'s ID.'},
  {name: 'itemOnClickFn',           type: 'Function',       default:  '()=>{}', notice: 'Menu entry\'s onClick function.'},
  {name: 'featureCollapsible',      type: 'Object',         default:  '{}',     notice: ''},
  {name: '- enable',                type: 'Boolean',        default:  'false',  notice: 'Enable collapse function of menu.'},
  {name: '- customCollapseButton',  type: 'String or Node', default:  '\'\'',   notice: 'We have default collapse button, but you can customize our collapse button by using this.'},
  {name: '- itemOnCollapseFn',      type: 'Function',       default:  '()=>{}', notice: 'Menu entry\'s arrow onClick function.'},
  {name: 'styleObj',                type: 'Object',         default:  '{}',     notice: (<pre className='content-pre'>{STYLEOBJ_PRE}</pre>)},
  {name: 'inputRefFn',              type: 'Function',       default:  '()=>{}', notice: 'To catch ref with (ref)=>{variable = ref}.'},
);

const NODE_TREE = new Array(
  {
    'name': '<div> .btb-menu',
    'children':[
      {
        'name': '<ul> .menu-layer-0',
        'children': [
          {
            'name': '<li> .layer-item',
            'children': [
              {
                'name': '<div> .iterm-content',
                'children': [
                  {
                    'name': '<div> .content-name',
                  },
                  {
                    'name': '<div> .content-collapse (.collapsed)',
                    'children': [
                      {
                        'name': '<div> .collapse-arrow'
                      }
                    ]
                  },
                  {
                    'name': '<div> .content-custom-collapse (.collapsed)',
                    'children': [
                      {
                        'name': '{customized}'
                      }
                    ]
                  }
                ]
              },
              {
                'name': '<div> .item-submenu (.collapsed)',
                'children': [
                  {
                    'name': '<ul> .menu-layer-1'
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

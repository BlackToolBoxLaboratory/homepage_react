import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import BTBTable from 'blacktbox-table';
import BTBList from 'blacktbox-list';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>{`Blacktbox-menu `}<a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-menu'><FA icon={['fab', 'github']} fixedWidth/></a><a target='_blank' className='linkBtn' href='https://www.npmjs.com/package/blacktbox-menu'><FA icon={['fab', 'npm']} fixedWidth/></a></span>);
const mainDescriptionStr = `Menu-maker tool. (Latest version: 1.1.4)`;

const installationTitle = `INSTALLATION`;
const installationContent = (<span>{`Using with`} <a target='_blank' href='https://www.npmjs.com'>{`NPM`}<FA icon={['fas', 'external-link-alt']} fixedWidth/></a>{`.`}</span>);

const renderTitle = `RENDER`;
const renderContent = (<span>{`Notice: DOM properties are still work with`} <a target='_blank' href='https://reactjs.org/docs/dom-elements.html'>{`ReactJS`}<FA icon={['fas', 'external-link-alt']} fixedWidth/></a>{`.`}</span>);

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
  menuArr = []
  styleObj = {}
  refFn = function(){}
  acticveIndex = ''
  itemOnClickFn = function(){}
  featureCollapsible={
    'enable': false,
    'itemClickWithCollapseEnable': false,
    'defaultCollapse': true,
    'customCollapseButton': '',
    'customExtendButton': '',
    'itemOnCollapseFn': function(){}
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
  {name : 'Property Name', index : 'name'},
  {name : 'Type',          index : 'type'},
  {name : 'Default',       index : 'default'},
  {name : 'Notice',        index : 'notice'}
);
const PARAM_BODY = new Array(
  {name : 'menuArr',                       type : 'Array',          default :  '[]',                    notice : (<pre className='content-pre'>{MENUARR_PRE}</pre>)},
  {name : '- name',                        type : 'String or Node', default :  '\'\', ()',              notice : `String or Node to show layer name.`},
  {name : '- index',                       type : 'String',         default :  '\'\'',                  notice : `Menu entry's ID.`},
  {name : '- defaultCollapse',             type : 'Boolean',        default :  'false',                 notice : `Menu entry's default collapse status. While featureCollapsible enabled, the default is true`},
  {name : '- children',                    type : 'Array',          default :  '[]',                    notice : (<pre className='content-pre'>{SUBMENUARR_PRE}</pre>)},
  {name : 'acticveIndex',                  type : 'String',         default :  '\'\'',                  notice : `Default active menu entry's ID.`},
  {name : 'itemOnClickFn',                 type : 'Function',       default :  'function(eventObj){}',  notice : `Menu entry's onClick function.`},
  {name : 'featureCollapsible',            type : 'Object',         default :  '{}',                    notice : ``},
  {name : '- enable',                      type : 'Boolean',        default :  'false',                 notice : `Enable collapse function of menu.`},
  {name : '- itemClickWithCollapseEnable', type : 'Boolean',        default :  'false',                 notice : `The item click and collapse are distinct event. If you prefer to collapse/extend menu while clicking, please use this. When the extensible menu items clicked, it will trigger collapse event before click event.`},
  {name : '- defaultCollapse',             type : 'Boolean',        default :  'true',                  notice : `Default collapse or not of menu, and this is secondary to menuArr's defaultCollapse.`},
  {name : '- customCollapseButton',        type : 'String or Node', default :  '\'\', ()',              notice : `We have default collapse button, but you can customize collapse button by using this.`},
  {name : '- customExtendButton',          type : 'String or Node', default :  '\'\', ()',              notice : `We have default collapse button, but you can customize extend button by using this. If you don't need this, you can just use customCollapseButton with style(css) to implement collapse/extend button`},
  {name : '- itemOnCollapseFn',            type : 'Function',       default :  'function(eventObj){}',  notice : `Menu entry's arrow onClick function.`},
  {name : 'styleObj',                      type : 'Object',         default :  '{}',                    notice : (<pre className='content-pre'>{STYLEOBJ_PRE}</pre>)},
  {name : 'refFn',                         type : 'Function',       default :  'function(ref){}',       notice : `To catch ref with (ref)=>{variable = ref}. (Only for stateful function)`}
);

const NODE_TREE = new Array(
  {
    'name'     : '<div> .btb-menu',
    'children' : [
      {
        'name'     : '<div> .menu-content',
        'children' : [
          {
            'name'     : '<ul> .menu-layer-0',
            'children' : [
              {
                'name'     : '<li> .layer-item',
                'children' : [
                  {
                    'name'     : '<div> .iterm-content',
                    'children' : [
                      {
                        'name' : '<div> .content-name',
                      }, {
                        'name'     : '<div> .content-collapse (.collapsed)',
                        'children' : [
                          {
                            'name' : '<div> .collapse-arrow'
                          }
                        ]
                      }, {
                        'name'     : '<div> .content-custom-collapse (.collapsed)',
                        'children' : [
                          {
                            'name' : '{customized}'
                          }
                        ]
                      }
                    ]
                  }, {
                    'name'     : '<div> .item-submenu (.collapsed)',
                    'children' : [
                      {
                        'name' : '<ul> .menu-layer-1'
                      }
                    ]
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
  mode : 'list'
};

const Basic = () => {
  let content = [];
  content.push(
    <div className='wrapper wrapper-basic'>
      <AL.MainTitle>{mainTitle}</AL.MainTitle>
      <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
      <AL.Section>
        <AL.SectionTitle>{installationTitle}</AL.SectionTitle>
        <AL.Content>{installationContent}</AL.Content>
        <AL.Pre>{INSTALLATION_PRE}</AL.Pre>
      </AL.Section>
      <AL.Section>
        <AL.SectionTitle>{renderTitle}</AL.SectionTitle>
        <AL.Pre>{RENDER_PRE}</AL.Pre>
        <BTBTable
          tableHeadArr={PARAM_HEAD}
          tableBodyArr={PARAM_BODY}
          modeObj={PARAM_MODE}
          className='content-paramlist'
        />
        <AL.Content>{renderContent}</AL.Content>
      </AL.Section>
      <AL.Section>
        <AL.SectionTitle>{nodeTreeTitle}</AL.SectionTitle>
        <AL.Content>{nodeTreeContent}</AL.Content>
        <AL.Content>
          <BTBList 
            className='content-nodetree'
            listArr={NODE_TREE}
          />
        </AL.Content>
        <AL.Content>{nodeTreeNotice}</AL.Content>
      </AL.Section>
    </div>
  );
  return content;
};

export default Basic;

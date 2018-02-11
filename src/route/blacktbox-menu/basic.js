import React, { Component } from 'react';
import FA from 'react-fontawesome';

import BTBTable from 'blacktbox-table';
import BTBList from 'blacktbox-list';

const INSTALLATION_PRE = 
`$ npm install --save blacktbox-menu

// using ES6 modules
import BTBMenu from 'blacktbox-menu';

// using CommonJS modules
var BTBMenu = require('blacktbox-menu');`;
const USING_PRE = 
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
const ContactList = new Array(
  {name: 'Email',   linkName:'vannoel0628@gmail.com', href:'mailto://vannoel0628@gmail.com',                            FA:'envelope-o'},
  {name: 'GitHub',  linkName:'blacktbox-menu',        href:'https://github.com/BlackToolBoxLaboratory/blacktbox-menu',  FA:'external-link'}
);
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
  constructor(props) {
    super(props);
  };
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <div className='context'>
          <div className='content'>
            <h1>Blacktbox-menu</h1>
            <span>Menu-maker tool.</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>INSTALLATION</div>
          <div className='content'>
            <span>Using with <a target='_blank' href='https://www.npmjs.com'>{`NPM`}</a>.</span>
          </div>
          <div className='content'>
            <pre className='content-pre'>{INSTALLATION_PRE}</pre>
          </div>
        </div>
        <div className='context'>
          <div className='title'>USING</div>
          <div className='content'>
            <pre className='content-pre'>{USING_PRE}</pre>
            <BTBTable
              tableHeadArr={PARAM_HEAD}
              tableBobyArr={PARAM_BODY}
              modeObj={PARAM_MODE}
              className='content-paramlist'
            />
          </div>
          <div className='content'>
            <span>Notice: DOM properties are still work with <a target='_blank' href='https://reactjs.org/docs/dom-elements.html'>{`ReactJS`}</a>.</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>NODE TREE</div>
          <div className='content'>
            <span>Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component's input: styleObj.</span>
          </div>
          <div className='content'>
            <BTBList 
              className='content-nodetree'
              listArr={NODE_TREE}
            />
          </div>
          <div className='content'>
            <span>Notice: The layer.index is count base on 0.</span>
          </div>
        </div>
        <div className='context'>
          <div className='title'>CONTACT ME</div>
          <ul>
          {
            ContactList.map((entry)=>{
              let content_li = [];
              content_li.push(
                <li>
                  <FA name={entry.FA} fixedWidth/>
                  <span style={{'margin-left':'5px'}}>{`${entry.name}:`}</span>
                  <span style={{'margin-left':'5px'}}>
                    <a target='_blank' href={entry.href}>{entry.linkName}</a>
                  </span>
                </li>
              );
              return content_li;
            })
          }
          </ul>
        </div>
      </div>
    );
    return content;
  };
};

export default Basic;

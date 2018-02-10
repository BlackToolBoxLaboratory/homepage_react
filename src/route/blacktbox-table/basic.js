import React, { Component } from 'react';
import FA from 'react-fontawesome';

import BTBTable from 'blacktbox-table';
import BTBList from 'blacktbox-list';

const INSTALLATION_PRE = 
`$ npm install --save blacktbox-table

// using ES6 modules
import BTBTable from 'blacktbox-table';

// using CommonJS modules
var BTBTable = require('blacktbox-table');`;
const USING_PRE = 
`<BTBTable 
  tableHeadArr: [],
  tableBobyArr: [],
  modeObj: {
    mode: 'list'
  },
  styleObj: {},
  inputRefFn: ()=>{}
/>`;
// const TABLEHEADARR_PRE = 
// `tableHeadArr = [{
//   name: '',
//   index: '',
//   sortType: 'string',
//   sortFn: ()=>{},
//   defaultSortStatus: 'ascending'
// }, ...]`;
const TABLEHEADARR_PRE = 
`tableHeadArr = [{
  name: '',
  index: ''
}, ...]`;
const TABLEBODYARR_PRE = 
`tableBobyArr = [
  {tableHeadArr.index}: ''
  , ...
]`;
const STYLEOBJ_PRE = 
`styleObj = {
  'Node's className': {CSS Object}
  , ...
}`;
const ContactList = new Array(
  {name: 'Email',   linkName:'vannoel0628@gmail.com', href:'mailto://vannoel0628@gmail.com',                            FA:'envelope-o'},
  {name: 'GitHub',  linkName:'blacktbox-table',       href:'https://github.com/BlackToolBoxLaboratory/blacktbox-table', FA:'external-link'}
);
const PARAM_HEAD = new Array(
  {name: 'Property Name', index: 'name'},
  {name: 'Type',          index: 'type'},
  {name: 'Default',       index: 'default'},
  {name: 'Notice',        index: 'notice'}
);
const PARAM_BODY = new Array(
  {name: 'tableHeadArr',        type: 'Array',          default: '[]',      notice: (<pre className='content-pre'>{TABLEHEADARR_PRE}</pre>)},
  {name: '- name',              type: 'String or Node', default: '\'\'',    notice: 'String or Node to show table head name.'},
  {name: '- index',             type: 'String',         default: '\'\'',    notice: 'index of tableBobyArr.index.'},
//   {name: '- sortType',          type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] index\'s sort type. {value: custom, string, number, ip, mac}'},
//   {name: '- sortFn',            type: 'Function',       default: '()=>{}',  notice: '[Unsupported Yet] define sort function while sortType is custom.'},
//   {name: '- defaultSortStatus', type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] String to index tableBobyArr[\'index\'].'},
  {name: 'tableBobyArr',        type: 'Array',          default: '[]',      notice: (<pre className='content-pre'>{TABLEBODYARR_PRE}</pre>)},
  {name: 'modeObj',             type: 'Object',         default: '{}',      notice: ''},
  {name: '- mode',              type: 'String',         default: 'list',    notice: 'mode of table. {value: info, list}'},
//   {name: '- listFeatureSearch', type: 'Object',         default: '{}',      notice: '[Unsupported Yet] Table in list mode can show result with search\'s parameters'},
//   {name: '- - keyword',         type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] Keyword to search data. Keyword with space can do multiple conditions search.'},
//   {name: '- - matchAll',        type: 'Boolean',        default: 'false',   notice: '[Unsupported Yet] MatchAll to search data matched with all conditions.'},
//   {name: '- listFeatureSort',   type: 'Object',         default: '{}',      notice: '[Unsupported Yet] Table in list mode can show result with sort\'s parameters.'},
//   {name: '- - enable',          type: 'Boolean',        default: 'false',   notice: '[Unsupported Yet] Enable sort feature for table in list mode.'},
//   {name: '- - defaultSortHead', type: 'String',         default: '\'\'',    notice: '[Unsupported Yet] Default active head to sort table.'},
//   {name: '- listFeaturePage',   type: 'Object',         default: '{}',      notice: '[Unsupported Yet] Table in list mode can show result with page\'s parameters.'},
//   {name: '- - perPage',         type: 'Number',         default: '0',       notice: '[Unsupported Yet] Show how many data by per-group.'},
//   {name: '- - page',            type: 'Number',         default: '0',       notice: '[Unsupported Yet] Index page of table to show'},
  {name: 'styleObj',            type: 'Object',         default:  '{}',     notice: (<pre className='content-pre'>{STYLEOBJ_PRE}</pre>)},
  {name: 'inputRefFn',          type: 'Function',       default:  '()=>{}', notice: 'To catch ref with (ref)=>{variable = ref}.'}
);

const NODE_TREE_INFO = new Array(
  {
    'name': '<div> .btb-table',
    'children':[
      {
        'name': '<table> .table-info',
        'children': [
          {
            'name': '<tbody> .info-tbody',
            'children': [
              {
                'name': '<tr> .tbody-tr',
                'children': [
                  {
                    'name': '<th> .tr-th (.th-{th.index})'
                  },
                  {
                    'name': '<td> .tr-td (.td-{th.index})'
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
const NODE_TREE_LIST = new Array(
  {
    'name': '<div> .btb-table',
    'children':[
      {
        'name': '<table> .table-info',
        'children': [
          {
            'name': '<thead> .info-thead',
            'children': [
              {
                'name': '<tr> .thead-tr',
                'children': [
                  {
                    'name': '<th> .tr-th (.th-{th.index})'
                  }
                ]
              }
            ]
          },
          {
            'name': '<tbody> .info-tbody',
            'children': [
              {
                'name': '<tr> .tbody-tr',
                'children': [
                  {
                    'name': '<td> .tr-td (.td-{th.index})'
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
            <h1>Blacktbox-table</h1>
            <span>Table-maker tool.</span>
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
            <span>Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component's input: styleObj. But for blacktbox-table, we have two structure for two mode used.</span>
          </div>
          <div className='content'>
            <span>Mode Info:</span>
            <BTBList 
              className='content-nodetree'
              listArr={NODE_TREE_INFO}
            />
          </div>
          <div className='content'>
            <span>Mode List:</span>
            <BTBList 
              className='content-nodetree'
              listArr={NODE_TREE_LIST}
            />
          </div>
          <div className='content'>
            <span>Notice: The th.index come from tableHeadArr.</span>
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

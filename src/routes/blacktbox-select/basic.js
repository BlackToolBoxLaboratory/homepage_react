import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import BTBTable from 'blacktbox-table';
import BTBList from 'blacktbox-list';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>{`Blacktbox-select `}<a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-select'><FA icon={['fab', 'github']} fixedWidth/></a><a target='_blank' className='linkBtn' href='https://www.npmjs.com/package/blacktbox-select'><FA icon={['fab', 'npm']} fixedWidth/></a></span>);
const mainDescriptionStr = `Select-maker tool. (Latest version: 1.0.1)`;

const installationTitle = `INSTALLATION`;
const installationContent = (<span>Using with <a target='_blank' href='https://www.npmjs.com'>{`NPM`}<FA icon={['fas', 'external-link-alt']} fixedWidth/></a>{`.`}</span>);

const renderTitle = `RENDER`;
const renderContent = (<span>{`Notice: DOM properties are still work with`} <a target='_blank' href='https://reactjs.org/docs/dom-elements.html'>{`ReactJS`}<FA icon={['fas', 'external-link-alt']} fixedWidth/></a>{`.`}</span>);

const nodeTreeTitle = `NODE TREE`;
const nodeTreeContent = `Here showing the node structure. Each node with className is for convenience to style. You have two way to use it. The first way is used with css selector, and the other way is used component's input: styleObj.`;
const nodeTreeNotice = `Notice: The row.index is counted base on 0.`;

const INSTALLATION_PRE = 
`$ npm install --save blacktbox-select

// using ES6 modules
import BTBList from 'blacktbox-select';

// using CommonJS modules
var BTBList = require('blacktbox-select');`;
const RENDER_PRE = 
`<BTBList 
  selectorId        : '',
  optionHeadVisible : true,
  optionHeadArr     : [],
  optionBodyArr     : [],
  placeholder       : '',
  noDataMessage     : 'No data avaliable',
  indexAttribute    : '',
  styleObj          : {},
  printoutFn        : function(){}
  refFn             : function(){}
  addtionalButton   : {
    enable       : true,
    selectButton : 'Select',
    searchButton : 'Search',
    clearButton  : 'Clear'
  },
  featureSearch : {
    enable                    : false,
    searchSpecAttributeEnable : false,
    searchSpecAttributeArr    : []
  }
/>`;
const OPTIONHEADARR_PRE = 
`optionHeadArr = [{
  name: '',
  index: ''
}, ...]`;
const OPTIONBODYARR_PRE = 
`optionBodyArr = [
  {optionHeadArr.index}: ''
  , ...
]`;
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
  {name : 'selectorId',                   type : 'String',         default :  '',                     notice : `For eventListener to identify select.`},
  {name : 'optionHeadVisible',            type : 'Boolean',        default :  '',                     notice : `Enable to show the head of options.`},
  {name : 'optionHeadArr',                type : 'Array',          default :  '[]',                   notice : (<pre className='content-pre'>{OPTIONHEADARR_PRE}</pre>)},
  {name : '- name',                       type : 'String',         default :  '\'\'',                 notice : `The name of attribute shown on option head.`},
  {name : '- index',                      type : 'String',         default :  '\'\'',                 notice : `The index of attribute shown on option head.`},
  {name : 'optionBodyArr',                type : 'Array',          default :  '[]',                   notice : (<pre className='content-pre'>{OPTIONBODYARR_PRE}</pre>)},
  {name : 'placeholder',                  type : 'String',         default :  '\'\'',                 notice : `The placeholder for input`},
  {name : 'noDataMessage',                type : 'String',         default : `'No data avaliable'`,   notice : `To show string while there has no date avaliable.`},
  {name : 'indexAttribute',               type : 'String',         default : '\'\'',                  notice : `To index the attribute of optionBodyArr like as the value of option for select.`},
  {name : 'styleObj',                     type : 'Object',         default : '{}',                    notice : (<pre className='content-pre'>{STYLEOBJ_PRE}</pre>)},
  {name : 'printoutFn',                   type : 'Function',       default : 'function(outputObj){}', notice : `The output data while input value changed.`},
  {name : 'refFn',                        type : 'Function',       default : 'function(ref){}',       notice : `To catch ref with (ref)=>{variable = ref}. (Only for stateful function)`},
  {name : 'addtionalButton',              type : 'Object',         default : '{}',                    notice : `To config whether need to show the additional button for select.`},
  {name : '- enable',                     type : 'Boolean',        default : 'true',                  notice : `Enable to show additional button for select`},
  {name : '- selectButton',               type : 'String or Node', default : '\'\', ()',              notice : `The generally additional button.`},
  {name : '- searchButton',               type : 'String or Node', default : '\'\', ()',              notice : `The search button while the feature of search enabled.`},
  {name : '- clearButton',                type : 'String or Node', default : '\'\', ()',              notice : `The clear button while input has value.`},
  {name : 'featureSearch',                type : 'Object',         default : '{}',                    notice : ``},
  {name : '- enable',                     type : 'Boolean',        default : 'false',                 notice : `Enable to search for select`},
  {name : '- searchSpecAttributeEnable',  type : 'Boolean',        default : 'false',                 notice : `Enable to support search with specific attributes from optionBodyArr.`},
  {name : '- searchSpecAttributeArr',     type : 'Array',          default : '[]',                    notice : `List of specific attributes from optionBodyArr.`}
);
const NODE_TREE = new Array(
  {
    'name'     : '<div> .btb-select',
    'children' : [
      {
        'name'     : '<div> .select-input',
        'children' : [
          {
            'name' : '<input type=\'text\'> .input-text'
          }, {
            'name' : '<span> .input-addition'
          }
        ]
      }, {
        'name'     : '<div> .select-optionList',
        'children' : [
          {
            'name'     : '<div> .optionList-head',
            'children' : [
              {
                'name'     : '<div> .head-row',
                'children' : [
                  {
                    'name' : '<div> .row-cell (.cell-{head.index})'
                  }
                ]
              }
            ]
          }, {
            'name'     : '<div> .scrollFlat',
            'children' : [
              {
                'name'     : '<div> .optionList-body',
                'children' : [
                  {
                    'name'     : '<div> .body-row (.row-{body.index})',
                    'children' : [
                      {
                        'name' : '<div> .row-cell (.cell-{head.index})'
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

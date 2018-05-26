import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import BTBList from 'blacktbox-list';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>Blacktbox-list <a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-list'><FA name='github' fixedWidth/></a></span>);
const mainDescriptionStr = `Example`;

const exampleTitle = `EXAMPLE`;
const exampleButtonText = `Show listRef to console.log`;

const rourceCodeTitle = `SOURCECODE`;
const rourceCodeSubTitle_Render = `Render`;
const rourceCodeSubTitle_List = `List`;
const rourceCodeSubTitle_Style = `Style`;

const ROURCECODE_RENDER_PRE = 
`<BTBList 
  listArr: listArr,
  styleObj: styleObj,
  inputRefFn={(ref)=>{this.listRef=ref}}
/>`;
const ROURCECODE_LIST_PRE = 
`listArr = [
{
  'name': 'Tree: 1',
  'children': [
  {
    'name': 'Tree: 1-1'
  },
  {
    'name': 'Tree: 1-2',
    'children': [
    {
      'name': 'Tree: 1-2-1'
    },
    {
      'name': 'Tree: 1-2-2'
    }]
  },
  {
    'name': 'Tree: 1-3'
  }]
},
{
  'name': 'Tree: 2',
  'children': [
  {
    'name': 'Tree: 2-1',
    'children': [
    {
      'name': 'Tree: 2-1-1',
      'children': [
      {
        'name': 'Tree: 2-1-1-1'
      }]
    }]
  },
  {
    'name': 'Tree: 2-2'
  }]
}];`;
const ROURCECODE_STYLE_PRE = 
`styleObj = {
  'btb-list': {
    'background-color': '#e6f7ff',
    'font-weight': 'bold'
  },
  'layer-item': {
    'list-style-type': 'none'
  },
  'layer-0': {
    'color': 'red',
    'font-size': '16px'
  },
  'layer-1': {
    'color': 'purple',
    'font-size': '14px'
  },
  'layer-2': {
    'color': 'blue',
    'font-size': '12px'
  }
};`;

const listArr = [
{
  'name': 'Tree: 1',
  'children': [
  {
    'name': 'Tree: 1-1'
  },
  {
    'name': 'Tree: 1-2',
    'children': [
    {
      'name': 'Tree: 1-2-1'
    },
    {
      'name': 'Tree: 1-2-2'
    }]
  },
  {
    'name': 'Tree: 1-3'
  }]
},
{
  'name': 'Tree: 2',
  'children': [
  {
    'name': 'Tree: 2-1',
    'children': [
    {
      'name': 'Tree: 2-1-1',
      'children': [
      {
        'name': 'Tree: 2-1-1-1'
      }]
    }]
  },
  {
    'name': 'Tree: 2-2'
  }]
}];
const styleObj = {
  'btb-list': {
    'background-color': '#bae7ff',
    'padding': '2px',
    'font-weight': 'bold'
  },
  'layer-item': {
    'list-style-type': 'square'
  },
  'layer-0': {
    'color': '#000000',
    'font-size': '20px',
  },
  'layer-1': {
    'color': '#262626',
    'font-size': '18px'
  },
  'layer-2': {
    'color': '#595959',
    'font-size': '16px'
  },
  'layer-3': {
    'color': '#8c8c8c',
    'font-size': '14px'
  }
};;

const Example = (props) => {
  let content = [];
  let listRef;
  content.push(
    <div className='wrapper wrapper-basic'>
      <AL.MainTitle>{mainTitle}</AL.MainTitle>
      <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
      <AL.Section>
        <AL.SectionTitle>{exampleTitle}</AL.SectionTitle>
        <AL.Content>
          <BTBList
            listArr={listArr}
            styleObj={styleObj}
            inputRefFn={(ref)=>{listRef=ref}}
          />
        </AL.Content>
        <AL.Item>
          <button onClick={()=>{_consoleLogRef()}}>{exampleButtonText}</button>
        </AL.Item>
      </AL.Section>
      <AL.Section>
        <AL.SectionTitle>{rourceCodeTitle}</AL.SectionTitle>
        <AL.Content>
          <AL.SectionSubtitle>{rourceCodeSubTitle_Render}</AL.SectionSubtitle>
          <AL.Pre>{ROURCECODE_RENDER_PRE}</AL.Pre>
        </AL.Content>
        <AL.Content>
          <AL.SectionSubtitle>{rourceCodeSubTitle_Style}</AL.SectionSubtitle>
          <AL.Pre>{ROURCECODE_STYLE_PRE}</AL.Pre>
        </AL.Content>
        <AL.Content>
          <AL.SectionSubtitle>{rourceCodeSubTitle_List}</AL.SectionSubtitle>
          <AL.Pre>{ROURCECODE_LIST_PRE}</AL.Pre>
        </AL.Content>
      </AL.Section>
    </div>
  );
  return content;

  function _consoleLogRef () {
    let listRef = ReactDOM.findDOMNode(listRef);
    console.log('listRef', listRef)
  };
};

export default Example;

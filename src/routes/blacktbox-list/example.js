import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import BTBList from 'blacktbox-list';

import ALayout from 'components/articleLayout.js';

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
class Example extends Component {
  constructor (props) {
    super(props);
    this.listRef = [];
  };
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <ALayout.MainTitle>{mainTitle}</ALayout.MainTitle>
        <ALayout.MainDescription>{mainDescriptionStr}</ALayout.MainDescription>
        <ALayout.Section>
          <ALayout.SectionTitle>{exampleTitle}</ALayout.SectionTitle>
          <ALayout.Content>
            <BTBList
              listArr={listArr}
              styleObj={styleObj}
              inputRefFn={(ref)=>{this.listRef=ref}}
            />
          </ALayout.Content>
          <ALayout.Item>
            <button onClick={()=>{this._consoleLogRef()}}>{exampleButtonText}</button>
          </ALayout.Item>
        </ALayout.Section>
        <ALayout.Section>
          <ALayout.SectionTitle>{rourceCodeTitle}</ALayout.SectionTitle>
          <ALayout.Content>
            <ALayout.SectionSubtitle>{rourceCodeSubTitle_Render}</ALayout.SectionSubtitle>
            <ALayout.Pre>{ROURCECODE_RENDER_PRE}</ALayout.Pre>
          </ALayout.Content>
          <ALayout.Content>
            <ALayout.SectionSubtitle>{rourceCodeSubTitle_Style}</ALayout.SectionSubtitle>
            <ALayout.Pre>{ROURCECODE_STYLE_PRE}</ALayout.Pre>
          </ALayout.Content>
          <ALayout.Content>
            <ALayout.SectionSubtitle>{rourceCodeSubTitle_List}</ALayout.SectionSubtitle>
            <ALayout.Pre>{ROURCECODE_LIST_PRE}</ALayout.Pre>
          </ALayout.Content>
        </ALayout.Section>
      </div>
    );
    return content;
  };

  _consoleLogRef () {
    let listRef = ReactDOM.findDOMNode(this.listRef);
    console.log('listRef', listRef)
  };
}

export default Example;

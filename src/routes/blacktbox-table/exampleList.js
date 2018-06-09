import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FA from 'react-fontawesome';

import BTBTable from 'blacktbox-table';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>{`Blacktbox-table `}<a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-table'><FA name='github' fixedWidth/></a></span>);
const mainDescriptionStr = `Example - Info`;

const exampleTitle = `EXAMPLE`;
const exampleButtonText = `Show listRef to console.log`;

const rourceCodeTitle = `SOURCECODE`;
const rourceCodeSubTitle_Render = `Render`;
const rourceCodeSubTitle_Header = `Header`;
const rourceCodeSubTitle_Body = `Body`;
const rourceCodeSubTitle_Mode = `mode`;
const rourceCodeSubTitle_Style = `Style`;

const ROURCECODE_RENDER_PRE = 
`<BTBTable 
  tableHeadArr={tableHeaderArr}
  tableBobyArr={dataArr}
  modeObj={modeObj}
  styleObj={styleObj}
  refFn={(ref)=>{this.listRef=ref}}
/>`;
const ROURCECODE_HEADER_PRE = 
`tableHeaderArr = [
  {name: 'Name',        index: 'name'},
  {name: 'Description', index: 'desc'},
  {name: 'OS Type',     index: 'osType'},
  {name: 'IP Address',  index: 'ipAddr'},
  {name: 'MAC Address', index: 'macAddr'},
  {name: 'Statue',      index: 'status'}
];`;
const ROURCECODE_BODY_PRE = 
`dataArr = [
  {
    name: 'Device 1', 
    desc: 'My phone', 
    osType: 'IOS', 
    ipAddr: '192.168.0.50', 
    macAddr: '11:22:33:44:55:66', 
    status: 'Disconnected'
  }
];`;
const ROURCECODE_MODE_PRE = 
`modeObj = {
  mode : 'list'
};`;
const ROURCECODE_STYLE_PRE = 
`styleObj = {
  'btb-table': {
    'text-align': 'center'
  },
  'table-list': {
    'box-shadow': '2px 2px 4px 2px #aaa'
  },
  'tr-th': {
    'background-color': '#bae7ff',
    'padding': '2px 5px'
  },
  'tr-td': {
    'padding': '2px 10px'
  },
  'td-name': {
    'font-weight': 'bold'
  },
  'td-ipAddr': {
    'color': 'blue',
    'text-decoration': 'underline'
  }
};`;

const tableHeaderArr = [
  {name: 'Name',        index: 'name'},
  {name: 'Description', index: 'desc'},
  {name: 'OS Type',     index: 'osType'},
  {name: 'IP Address',  index: 'ipAddr'},
  {name: 'MAC Address', index: 'macAddr'},
  {name: 'Statue',      index: 'status'}
];
const dataArr = [
  {name: 'Device 1', desc: 'My phone', osType: 'IOS', ipAddr: '192.168.0.50', macAddr: '11:22:33:44:55:66', status: 'Disconnected'}
];
const modeObj = {
  mode : 'list'
};
const styleObj = {
  'btb-table': {
    'text-align': 'center'
  },
  'table-list': {
    'box-shadow': '2px 2px 4px 2px #aaa'
  },
  'tr-th': {
    'background-color': '#bae7ff',
    'padding': '2px 5px'
  },
  'tr-td': {
    'padding': '2px 10px'
  },
  'td-name': {
    'font-weight': 'bold'
  },
  'td-ipAddr': {
    'color': 'blue',
    'text-decoration': 'underline'
  }
};

class Example extends Component {
  constructor (props) {
    super(props);
    this.listRef =[];
  };
  render () {
    let content = [];
    content.push(
      <div className='wrapper wrapper-basic'>
        <AL.MainTitle>{mainTitle}</AL.MainTitle>
        <AL.MainDescription>{mainDescriptionStr}</AL.MainDescription>
        <AL.Section>
          <AL.SectionTitle>{exampleTitle}</AL.SectionTitle>
          <AL.Content>
            <BTBTable 
              tableHeadArr={tableHeaderArr}
              tableBobyArr={dataArr}
              modeObj={modeObj}
              styleObj={styleObj}
              refFn={(ref)=>{this.listRef=ref}}
            />
          </AL.Content>
          <AL.Item>
            <button onClick={()=>{this._consoleLogRef()}}>{exampleButtonText}</button>
          </AL.Item>
        </AL.Section>
        <AL.Section>
          <AL.SectionTitle>{rourceCodeTitle}</AL.SectionTitle>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Render}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_RENDER_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Header}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_HEADER_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Body}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_BODY_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Mode}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_MODE_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Style}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_STYLE_PRE}</AL.Pre>
          </AL.Content>
        </AL.Section>
      </div>
    );
    return content;
  };

  _consoleLogRef () {
    let listRef = ReactDOM.findDOMNode(this.listRef);
    console.log('listRef', listRef)
  };
};

export default Example;

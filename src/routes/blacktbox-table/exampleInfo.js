import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import BTBTable from 'blacktbox-table';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>{`Blacktbox-table `}<a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-table'><FA icon={['fab', 'github']} fixedWidth/></a><a target='_blank' className='linkBtn' href='https://www.npmjs.com/package/blacktbox-table'><FA icon={['fab', 'npm']} fixedWidth/></a></span>);
const mainDescriptionStr = `Example - Info`;

const exampleTitle = `EXAMPLE`;
const exampleButtonText = `Show infoRef to console.log`;

const rourceCodeTitle = `SOURCECODE`;
const rourceCodeSubTitle_Render = `Render`;
const rourceCodeSubTitle_Header = `Header`;
const rourceCodeSubTitle_Body = `Body`;
const rourceCodeSubTitle_Mode = `mode`;
const rourceCodeSubTitle_Style = `Style`;

const ROURCECODE_RENDER_PRE = 
`<BTBTable 
  tableHeadArr={tableHeadArr}
  tableBodyArr={tableBodyArr}
  modeObj={modeObj}
  styleObj={styleObj}
  refFn={(ref)=>{this.infoRef=ref}}
/>`;
const ROURCECODE_HEADER_PRE = 
`tableHeadArr = [
  {name: 'Name',        index: 'name'},
  {name: 'Description', index: 'desc'},
  {name: 'OS Type',     index: 'osType'},
  {name: 'IP Address',  index: 'ipAddr'},
  {name: 'MAC Address', index: 'macAddr'},
  {name: 'Statue',      index: 'status'}
];`;
const ROURCECODE_BODY_PRE = 
`tableBodyArr = [
  {
    name: 'Device 1',  
    devType: 'phone',   
    osType: 'ios',      
    ipAddr: '192.168.0.50',   
    macAddr: 'B4:A2:07:44:55:2A', 
    traffic: '1.7 MB / 45 KB', 
    status: 0, 
    statusDesc: 'Disconnected'
  },
  {
    name: 'Device 2',  
    devType: 'notebook',   
    osType: 'windows',      
    ipAddr: '192.168.0.52',   
    macAddr: 'B4:A2:07:44:DD:FF', 
    traffic: '4.8 MB / 27 KB', 
    status: 0, 
    statusDesc: 'Disconnected'
  }
];`;
const ROURCECODE_MODE_PRE = 
`modeObj = {
  mode : 'info'
};`;
const ROURCECODE_STYLE_PRE = 
`styleObj = {
  'btb-table': {
    'text-align': 'center'
  },
  'table-info': {
    'margin': 'auto',
    'box-shadow': '2px 2px 4px 2px #aaa'
  },
  'tr-th': {
    'background-color': '#bae7ff',
    'padding': '2px 5px'
  },
  'tr-td': {
    'padding': '2px 10px'
  },
  'tr-name': {
    'font-weight': 'bold'
  },
  'td-ipAddr': {
    'color': 'blue',
    'text-decoration': 'underline'
  }
};`;

const tableHeadArr = [
  {name : 'Name',              index : 'name'},
  {name : 'Type',              index : 'devType'},
  {name : 'OS',                index : 'osType'},
  {name : 'IP Address',        index : 'ipAddr'},
  {name : 'MAC Address',       index : 'macAddr'},
  {name : 'Traffic(tx / rx)',  index : 'traffic'},
  {name : 'Statue',            index : 'statusDesc'}
];
const tableBodyArr = [
  {name : 'Device 1',  devType : 'phone',   osType : 'ios',      ipAddr : '192.168.0.50',   macAddr : 'B4:A2:07:44:55:2A', traffic : '1.7 MB / 45 KB', status : 0, statusDesc : 'Disconnected'},
  {name : 'Device 2',  devType : 'notebook',   osType : 'windows',      ipAddr : '192.168.0.52',   macAddr : 'B4:A2:07:44:DD:FF', traffic : '4.8 MB / 27 KB', status : 0, statusDesc : 'Disconnected'}
];
const modeObj = {
  mode : 'info'
};
const styleObj = {
  'btb-table' : {
    'text-align' : 'center'
  },
  'table-info' : {
    'margin'     : 'auto',
    'box-shadow' : '2px 2px 4px 2px #aaa'
  },
  'tr-th' : {
    'background-color' : '#bae7ff',
    'padding'          : '2px 5px'
  },
  'tr-td' : {
    'padding' : '2px 10px'
  },
  'tr-name' : {
    'font-weight' : 'bold'
  },
  'td-ipAddr' : {
    'color'           : 'blue',
    'text-decoration' : 'underline'
  }
};

class Example extends Component {
  constructor (props) {
    super(props);
    this.infoRef =[];
  }
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
              tableHeadArr={tableHeadArr}
              tableBodyArr={tableBodyArr}
              modeObj={modeObj}
              styleObj={styleObj}
              refFn={(ref) => {this.infoRef=ref;}}
            />
          </AL.Content>
          <AL.Item>
            <button onClick={() => {this._consoleLogRef();}}>{exampleButtonText}</button>
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
  }

  _consoleLogRef () {
    let infoRef = ReactDOM.findDOMNode(this.infoRef);
    /* eslint-disable no-console*/
    console.log('infoRef', infoRef);
    /* eslint-enable no-console*/
  }
}

export default Example;

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
  tableBobyArr={tableBodyArr}
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
`tableBodyArr = [
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

const sortFeatureArr = [
  {sortable: true,  sortType: '', sortContent: '', defaultSortState:'desc' },
  {sortable: true,  sortType: '', sortContent: '', defaultSortState:'asc' },
  {sortable: true,  sortType: '', sortContent: '', defaultSortState:'desc' },
  {sortable: true,  sortType: '', sortContent: '', defaultSortState:'desc' },
  {sortable: true,  sortType: '', sortContent: '', defaultSortState:'asc' },
  {sortable: false, sortType: '', sortContent: '', defaultSortState:'asc' },
  {sortable: true,  sortType: '', sortContent: '', defaultSortState:'asc' }
];
const tableHeaderArr = [
  {name: 'Name',              index: 'name',        ...sortFeatureArr[0]},
  {name: 'Type',              index: 'devType',     ...sortFeatureArr[1]},
  {name: 'OS',                index: 'osType',      ...sortFeatureArr[2]},
  {name: 'IP',                index: 'ipAddr',      ...sortFeatureArr[3]},
  {name: 'MAC',               index: 'macAddr',     ...sortFeatureArr[4]},
  {name: 'Traffic(tx / rx)',  index: 'traffic',     ...sortFeatureArr[5]},
  {name: 'Statue',            index: 'statusDesc',  ...sortFeatureArr[6]}
];
const tableBodyArr = [
  {name: 'Device 1',  devType: 'phone',   osType: 'ios',      ipAddr: '192.168.0.50',   macAddr: 'B4:A2:07:44:55:2A', traffic: '0 MB / 0 KB',     status: 0, statusDesc: 'Disconnected'},
  {name: 'Device 2',  devType: 'switch',  osType: 'linux',    ipAddr: '192.168.0.37',   macAddr: '7E:EF:02:44:AE:25', traffic: '2.7 MB / 263 KB', status: 1, statusDesc: 'Connected'},
  {name: 'Device 3',  devType: 'ap',      osType: 'linux',    ipAddr: '192.168.0.121',  macAddr: 'EF:2B:15:44:32:B4', traffic: '0 MB / 0 KB',     status: 2, statusDesc: 'Locked'},
  {name: 'Device 4',  devType: 'phone',   osType: 'android',  ipAddr: '192.168.0.9',    macAddr: 'F5:22:33:44:55:35', traffic: '0 MB / 0 KB',     status: 0, statusDesc: 'Disconnected'},
  {name: 'Device 5',  devType: 'ap',      osType: 'linux',    ipAddr: '192.168.0.27',   macAddr: '7E:EF:B2:44:28:3B', traffic: '1.3 MB / 725 KB', status: 1, statusDesc: 'Connected'},
  {name: 'Device 6',  devType: 'pc',      osType: 'windows',  ipAddr: '192.168.0.11',   macAddr: '11:22:24:44:5E:90', traffic: '0 MB / 0 KB',     status: 2, statusDesc: 'Locked'},
  {name: 'Device 7',  devType: 'phone',   osType: 'ios',      ipAddr: '192.168.0.6',    macAddr: '11:FF:33:44:55:A3', traffic: '1.2 MB / 45 KB',  status: 1, statusDesc: 'Connected'},
  {name: 'Device 8',  devType: 'pc',      osType: 'linux',    ipAddr: '192.168.0.3',    macAddr: 'B2:FE:B8:44:55:6D', traffic: '4.8 MB / 3.7 MB', status: 1, statusDesc: 'Connected'},
  {name: 'Device 9',  devType: 'pc',      osType: 'windows',  ipAddr: '192.168.0.18',   macAddr: 'E4:AA:74:44:38:E1', traffic: '0 MB / 0 KB',     status: 2, statusDesc: 'Locked'},
  {name: 'Device 10', devType: 'switch',  osType: 'linux',    ipAddr: '192.168.0.245',  macAddr: 'E2:BA:33:44:48:AB', traffic: '0 MB / 0 KB',     status: 0, statusDesc: 'Disconnected'},
  {name: 'Device 11', devType: 'ap',      osType: 'linux',    ipAddr: '192.168.0.210',  macAddr: '2A:FE:7A:27:38:27', traffic: '0 MB / 0 KB',     status: 0, statusDesc: 'Disconnected'},
  {name: 'Device 12', devType: 'phone',   osType: 'android',  ipAddr: '192.168.0.163',  macAddr: 'FE:22:9B:44:26:08', traffic: '0 MB / 0 KB',     status: 2, statusDesc: 'Locked'},
  {name: 'Device 13', devType: 'phone',   osType: 'android',  ipAddr: '192.168.0.84',   macAddr: 'B4:22:27:44:55:B2', traffic: '1.5 MB / 235 KB', status: 1, statusDesc: 'Connected'}
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
              tableBobyArr={tableBodyArr}
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

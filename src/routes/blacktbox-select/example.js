import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import BTBselect from 'blacktbox-select';

import AL from 'components/articleLayout.js';

const mainTitle = (<span>{`Blacktbox-select `}<a target='_blank' className='linkBtn' href='https://github.com/BlackToolBoxLaboratory/blacktbox-select'><FA icon={['fab', 'github']} fixedWidth/></a><a target='_blank' className='linkBtn' href='https://www.npmjs.com/package/blacktbox-select'><FA icon={['fab', 'npm']} fixedWidth/></a></span>);
const mainDescriptionStr = `Example`;

const exampleTitle = `EXAMPLE`;
const exampleButtonText = `Show selectRef to console.log`;

const rourceCodeTitle = `SOURCECODE`;
const rourceCodeSubTitle_Render = `Render`;
const rourceCodeSubTitle_Head = `Header`;
const rourceCodeSubTitle_Body = `Body`;
const rourceCodeSubTitle_Style = `Style`;
const rourceCodeSubTitle_Feature_Search = `Feature - Search`;

const ROURCECODE_RENDER_PRE = 
`<BTBselect
  selectorId={'demo'}
  optionHeadArr={optionHeadArr}
  optionBodyArr={optionBodyArr}
  placeholder={'MAC Address'}
  indexAttribute={'macAddr'}
  styleObj={styleObj}
  printoutFn={(outputObj) => {this._printoutHandle(outputObj);}}
  refFn={(ref) => {this.selectRef=ref;}}
  featureSearch={featureSearchObj}
/>`;
const ROURCECODE_HEAD_PRE = 
`optionHeadArr = [
  {name : 'Name',         index : 'name'},
  {name : 'IP Address',   index : 'ipAddr'},
  {name : 'MAC Address',  index : 'macAddr'},
  {name : 'Status',       index : 'status'}
];`;
const ROURCECODE_BODY_PRE = 
`optionBodyArr = [
  {name : 'Device 1',   ipAddr : '192.168.1.56',   macAddr : 'B4:A2:07:44:55:2A', status : 'Online'},
  {name : 'Device 2',   ipAddr : '192.168.52.153', macAddr : 'B4:A2:07:44:15:5C', status : 'Offline'},
  {name : 'Device 3',   ipAddr : '192.168.18.182', macAddr : 'B4:A2:07:44:05:15', status : 'Online'},
  {name : 'Device 4',   ipAddr : '192.168.10.2',   macAddr : 'B4:A2:07:44:52:EA', status : 'Offline'},
  {name : 'Device 5',   ipAddr : '192.168.55.38',  macAddr : 'B4:A2:07:44:16:19', status : 'Online'},
  {name : 'Device 6',   ipAddr : '192.168.19.119', macAddr : 'B4:A2:07:44:83:C5', status : 'Online'},
  {name : 'Device 7',   ipAddr : '192.168.152.89', macAddr : 'B4:A2:07:44:15:AA', status : 'Offline'},
  {name : 'Device 8',   ipAddr : '192.168.2.92',   macAddr : 'B4:A2:07:44:A5:01', status : 'Online'},
  {name : 'Device 9',   ipAddr : '192.168.59.205', macAddr : 'B4:A2:07:44:D0:12', status : 'Online'},
  {name : 'Device 10',  ipAddr : '192.168.218.45', macAddr : 'B4:A2:07:44:C8:25', status : 'Offline'}
];`;
const ROURCECODE_STYLE_PRE = 
`styleObj = {
  'scrollFlat' : {
    'max-height': '130px',
    'overflow': 'auto'
  },
  'row-cell' : {
    'padding': '2px 5px'
  },
  'row-noData' : {
    'padding': '2px 5px'
  }
};`;
const ROURCECODE_FEATURE_SEARCH_PRE = 
`featureSearchObj = {
  'enable'                    : true,
  'searchSpecAttributeEnable' : true,
  'searchSpecAttributeArr'    : ['name', 'ipAddr', 'macAddr']
};`;

const optionHeadArr = [
  {name : 'Name',         index : 'name'},
  {name : 'IP Address',   index : 'ipAddr'},
  {name : 'MAC Address',  index : 'macAddr'},
  {name : 'Status',       index : 'status'}
];
const optionBodyArr = [
  {name : 'Device 1',   ipAddr : '192.168.1.56',   macAddr : 'B4:A2:07:44:55:2A', status : 'Online'},
  {name : 'Device 2',   ipAddr : '192.168.52.153', macAddr : 'B4:A2:07:44:15:5C', status : 'Offline'},
  {name : 'Device 3',   ipAddr : '192.168.18.182', macAddr : 'B4:A2:07:44:05:15', status : 'Online'},
  {name : 'Device 4',   ipAddr : '192.168.10.2',   macAddr : 'B4:A2:07:44:52:EA', status : 'Offline'},
  {name : 'Device 5',   ipAddr : '192.168.55.38',  macAddr : 'B4:A2:07:44:16:19', status : 'Online'},
  {name : 'Device 6',   ipAddr : '192.168.19.119', macAddr : 'B4:A2:07:44:83:C5', status : 'Online'},
  {name : 'Device 7',   ipAddr : '192.168.152.89', macAddr : 'B4:A2:07:44:15:AA', status : 'Offline'},
  {name : 'Device 8',   ipAddr : '192.168.2.92',   macAddr : 'B4:A2:07:44:A5:01', status : 'Online'},
  {name : 'Device 9',   ipAddr : '192.168.59.205', macAddr : 'B4:A2:07:44:D0:12', status : 'Online'},
  {name : 'Device 10',  ipAddr : '192.168.218.45', macAddr : 'B4:A2:07:44:C8:25', status : 'Offline'}
];
const styleObj = {
  'scrollFlat' : {
    'max-height' : '130px',
    'overflow'   : 'auto'
  },
  'row-cell' : {
    'padding' : '2px 5px'
  },
  'row-noData' : {
    'padding' : '2px 5px'
  }
};
const featureSearchObj = {
  'enable'                    : true,
  'searchSpecAttributeEnable' : true,
  'searchSpecAttributeArr'    : ['name', 'ipAddr', 'macAddr']
};

class Example extends Component {
  constructor (props) {
    super(props);
    this.selectRef =[];
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
            <BTBselect
              selectorId={'demo'}
              optionHeadArr={optionHeadArr}
              optionBodyArr={optionBodyArr}
              placeholder={'MAC Address'}
              indexAttribute={'macAddr'}
              styleObj={styleObj}
              printoutFn={(outputObj) => {this._printoutHandle(outputObj);}}
              refFn={(ref) => {this.selectRef=ref;}}
              featureSearch={featureSearchObj}
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
            <AL.SectionSubtitle>{rourceCodeSubTitle_Head}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_HEAD_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Body}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_BODY_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Style}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_STYLE_PRE}</AL.Pre>
          </AL.Content>
          <AL.Content>
            <AL.SectionSubtitle>{rourceCodeSubTitle_Feature_Search}</AL.SectionSubtitle>
            <AL.Pre>{ROURCECODE_FEATURE_SEARCH_PRE}</AL.Pre>
          </AL.Content>
        </AL.Section>
      </div>
    );
    return content;
  }

  _consoleLogRef () {
    let selectRef = ReactDOM.findDOMNode(this.selectRef);
    console.log('selectRef', selectRef);
  }
  _printoutHandle (outputObj) {
    console.log('outputObj', outputObj);
  }
}

export default Example;

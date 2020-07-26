import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const enhance = compose(
  connect((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  })
);

const preRender = `<BTBTable 
        mode="compare" 
        headData={headData} 
        bodyData={bodyData}
        slotObj={slotObj}/>`;

const preHeadData = `const headDate = [
        {name : 'Name', id : 'name' },
        {name : 'Type', id : 'devType' },
        {name : 'OS', id : 'osType' },
        {name : 'IP', id : 'ipAddr' },
        {name : 'MAC', id : 'macAddr' },
        {name : 'Traffic(tx / rx)', id : 'traffic' },
        {name : 'Statue', id : 'statusDesc'}
];`;

const preBodyData = `const bodyData = [
  {
    name : 'Device 1',  
    devType : 'phone',   
    osType : 'ios',      
    ipAddr : '192.168.0.50',   
    macAddr : 'B4:A2:07:44:55:2A', 
    traffic : '1.7 MB / 45 KB', 
    status : 0, 
    statusDesc : 'Disconnected'
  },
  {
    name : 'Device 2',  
    devType : 'notebook',   
    osType : 'windows',      
    ipAddr : '192.168.0.52',   
    macAddr : 'B4:A2:07:44:DD:FF', 
    traffic : '4.8 MB / 27 KB', 
    status : 0, 
    statusDesc : 'Disconnected'
  }
];`;

const preSlotObj = `const slotObj = {
        'th-name'   : 'Device Name',
        'th-ipAddr' : (
                <span>
                        {'IP Link '}
                        <FAI className="item_button" icon={['fas', 'external-link-alt']} fixedWidth />
                </span>
        ),
        'td-ipAddr' : (data, column) => {
                return (
                        <a href={\`http://\${data[column.id]}\`} target="_blank" rel="noreferrer">
                                {data[column.id]}
                        </a>
                );
        }
};`;

const tableHeadArr_property = [
  { name: 'Name', id: 'name' },
  { name: 'Type', id: 'devType' },
  { name: 'OS', id: 'osType' },
  { name: 'IP', id: 'ipAddr' },
  { name: 'MAC', id: 'macAddr' },
  { name: 'Traffic(tx / rx)', id: 'traffic' },
  { name: 'Statue', id: 'statusDesc' },
];

const tableBodyArr_data = [
  {
    name: 'Device 1',
    devType: 'phone',
    osType: 'ios',
    ipAddr: '192.168.0.50',
    macAddr: 'B4:A2:07:44:55:2A',
    traffic: '1.7 MB / 45 KB',
    status: 0,
    statusDesc: 'Disconnected',
  },
  {
    name: 'Device 2',
    devType: 'notebook',
    osType: 'windows',
    ipAddr: '192.168.0.52',
    macAddr: 'B4:A2:07:44:DD:FF',
    traffic: '4.8 MB / 27 KB',
    status: 0,
    statusDesc: 'Disconnected',
  },
];

const slotObj = {
  'th-name': 'Device Name',
  'th-ipAddr': (
    <span>
      {'IP Link '}
      <FAI className="item_button" icon={['fas', 'external-link-alt']} fixedWidth />
    </span>
  ),
  'td-ipAddr': (data, column) => {
    return (
      <a href={`http://${data[column.id]}`} target="_blank" rel="noreferrer">
        {data[column.id]}
      </a>
    );
  },
};

const ExampleSlot = enhance(() => {
  return (
    <Page className="btb-pkg-table-example-slot">
      <PageHead
        title={lang.translate('package.table.example.slot.title')}
        clickBtn={openLink}
        linkList={packageInfo.linkList}
      />
      <Section
        head={
          <>
            {`${lang.translate('package.version_colon')}${packageInfo.version}`}
            <br />
            {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
          </>
        }
      >
        <p>{lang.translate('package.table.example.slot.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBTable
          className="table_sample"
          mode="compare"
          headData={tableHeadArr_property}
          bodyData={tableBodyArr_data}
          slotObj={slotObj}
        />
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="headData">
          <pre className="page_pre">{preHeadData}</pre>
        </Block>
        <Block title="bodyData">
          <pre className="page_pre">{preBodyData}</pre>
        </Block>
        <Block title="slotObj">
          <p>
            {
              "'th-name' shows the customized slot with pure string. 'th-ipAddr' shows how to customized with Node. And 'td-ipAddr' shows how to customized with function."
            }
          </p>
          <pre className="page_pre">{preSlotObj}</pre>
        </Block>
      </Section>
    </Page>
  );
});

export default ExampleSlot;

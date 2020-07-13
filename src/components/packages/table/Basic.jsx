import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';
import packageInfo from './packageInfo.js';

const enhance = compose(
  connect(
    (state) => {
      return {
        'languageSetting'  : state.language.languageSetting
      };
    }
  )
);

const preInstall = 
`$ npm install --save @blacktoolbox/react-table

import BTBTable from '@blacktoolbox/react-table'
import '@blacktoolbox/react-table/lib/index.css'`;

const preRender =
`<BTBTable
        headData=" Array of headObj" 
        bodyData=" Array of bodyObj "
        mode=" String "
        styleObj=" Object "
        slotObj=" Object "
        onDataClick=" function(bodyObj){} "/>`;

const preHeadObj =
`headObj = {
        id: '',
        name: ''
}`;

const preBodyObj = 
`bodyObj = {
        [ headObj.index ] : ''
}`;

const preStyleObj =
`styleObj = {
        [ className ]: { inline CSS }
}`;

const preSlotObj = 
`slotObj = {
        [ \`th_\${ headObj.id }\` ] : '',
        [ \`td_\${ headObj.id }\` ] : ''
}`;

const nodeTree_list = [
  {
    id       : 'list',
    title    : '<dib> .btb-react-table',
    children : [
      {
        id       : 'table',
        title    : '<table> .table_list]',
        children : [
          {
            id       : 'thead',
            title    : '<thead> .list_head',
            children : [
              {
                id       : 'thead_tr',
                title    : '<tr> .head_tr',
                children : [
                  {
                    id    : 'tr_th',
                    title : '<th> .tr_th .th_[headObj.id]'
                  }
                ]
              }
            ]
          },
          {
            id       : 'tbody',
            title    : '<tbody> .list_body',
            children : [
              {
                id       : 'body_tr',
                title    : '<tr> .body_tr .tr_[data order]',
                children : [
                  {
                    id    : 'tr_td',
                    title : '<th> .tr_td .td_[headObj.id]'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const nodeTree_info = [
  {
    id       : 'table',
    title    : '<div> .btb-react-table',
    children : [
      {
        id       : 'info',
        title    : '<table> .table_info .info-[data order]',
        children : [
          {
            id       : 'tbody',
            title    : '<tbody> .info_body',
            children : [
              {
                id       : 'tr',
                title    : '<tr> .body_tr .tr-[headObj.id]',
                children : [
                  {
                    id    : 'th',
                    title : '<th> .tr_th .th-[headObj.id]'
                  },
                  {
                    id    : 'td',
                    title : '<td> .tr_td .td-[headObj.id]',
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const nodeTree_compare = [
  {
    id       : 'table',
    title    : '<div> .btb-react-table',
    children : [
      {
        id       : 'compare',
        title    : '<table> .table_compare',
        children : [
          {
            id       : 'tbody',
            title    : '<tbody> .compare_body',
            children : [
              {
                id       : 'tr',
                title    : '<tr> .tbody_tr .tr-[headObj.id]',
                children : [
                  {
                    id    : 'th',
                    title : '<th> .tr_th .th-[headObj.id]'
                  }, {
                    id    : 'td',
                    title : '<td> .tr_td .td-[headObj.id] .td-[data order]',
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

const tableHeadArr_property = [
  { name : 'Property Name', id : 'title' },
  { name : 'Type', id : 'type' },
  { name : 'Default', id : 'default' },
  { name : 'Notice', id : 'notice' }
];
const tableHeadArr_entry = [
  { name : 'Name', id : 'title' },
  { name : 'Type', id : 'type' },
  { name : 'Notice', id : 'notice' }
];
const tableBodyArr_basic = [
  { title : 'headData', type : 'package.paramType.array', default : '[]', notice : 'package.table.property.headData' },
  { title : 'bodyData', type : 'package.paramType.array', default : '[]', notice : 'package.table.property.bodyData' },
  { title : 'mode', type : 'package.paramType.string', default : '"list"', notice : 'package.table.property.mode' },
  { title : 'styleObj', type : 'package.paramType.object', default : '{}', notice : 'package.table.property.styleObj' },
  { title : 'slotObj', type : 'package.paramType.object', default : '{}', notice : 'package.table.property.slotObj' },
  { title : 'onDataClick', type : 'package.paramType.function', default : 'undefined', notice : 'package.table.property.onDataClick' },
  { title : 'ref', type : 'useRef', default : 'undefined', notice : 'package.table.property.ref' }
];
const tableBodyArr_headObj = [
  { title : 'id', type : 'package.paramType.string', default : '[]', notice : 'package.table.headObj.id' },
  { title : 'name', type : 'package.paramType.string', default : '[]', notice : 'package.table.headObj.name' }
];
const tableBodyArr_slot = [
  { title  : '[ th_${ headObj.id } ]', type   : 'package.paramType.string||package.paramType.node||package.paramType.function', notice : 'package.table.slotObj.th'  },
  { title  : '[ td_${ headObj.id } ]', type   : 'package.paramType.string||package.paramType.node||package.paramType.function', notice : 'package.table.slotObj.td'}
];

const tableSlotObj = {
  'td-type' : (data, column) => {
    let sep = data[column.id].split('||');
    let result = '';
    if (sep.length > 0)
    {
      result = sep.map((item) => {
        return lang.translate(item);
      }).join(' || ');
    } else {
      result = (data[column.id] === 'useRef')? 'useRef' : lang.translate(data[column.id]);
    }
    return result;
  },
  'td-notice' : (data, column) => {
    return lang.translate(data[column.id]);
  }
};

const Basic = enhance(() => {
  return (
    <Page className="btb-pkg-table-basic">
      <PageHead title={lang.translate('package.table.name')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {lang.translate(packageInfo.description)}
        </p>
      </Section>
      <Section head={lang.translate('package.section.installation')}>
        <pre className="page_pre">
          {preInstall}
        </pre>
      </Section>
      <Section head={lang.translate('package.section.render')}>
        <pre className="page_pre">
          {preRender}
        </pre>
      </Section>
      <Section head={lang.translate('package.section.parameters')}>
        <BTBTable className="page_table" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr_basic} slotObj={tableSlotObj}/>
        <Block title="headObj">
          <pre className="page_pre">
            {preHeadObj}
          </pre>
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_entry} bodyData={tableBodyArr_headObj} slotObj={tableSlotObj}/>
        </Block>
        <Block title="bodyObj">
          <pre className="page_pre">
            {preBodyObj}
          </pre>
        </Block>
        <Block title="styleObj">
          <p>{lang.translate('package.table.parameters.styleObj')}</p>
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
        <Block title="slotObj">
          <p>{lang.translate('package.table.parameters.slotObj')}</p>
          <pre className="page_pre">
            {preSlotObj}
          </pre>
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_entry} bodyData={tableBodyArr_slot} slotObj={tableSlotObj}/>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <Block title={lang.translate('package.table.nodeTree.list')}>
          <BTBList className="page_node_tree" dataList={nodeTree_list}/>
          <p>{lang.translate('package.table.nodeTree.notice')}</p>
        </Block>
        <Block title={lang.translate('package.table.nodeTree.info')}>
          <BTBList className="page_node_tree" dataList={nodeTree_info}/>
          <p>{lang.translate('package.table.nodeTree.notice')}</p>
        </Block>
        <Block title={lang.translate('package.table.nodeTree.compare')}>
          <BTBList className="page_node_tree" dataList={nodeTree_compare}/>
          <p>{lang.translate('package.table.nodeTree.notice')}</p>
        </Block>
      </Section>
    </Page>
  );
});

export default Basic;
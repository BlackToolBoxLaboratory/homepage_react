import React from 'react';
import { useSelector } from 'react-redux';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-list

import BTBList from '@blacktoolbox/react-list'
import '@blacktoolbox/react-list/lib/index.css'`;

const preRender = `<BTBList
        dataList=" Array of entryObj " 
        defaultActiveID=" String "
        activeID=" String "
        collapseEnable=" Boolean "
        styleObj=" Object "
        slotObj=" Object "
        onEntryClick=" function(entryObj){} "
        onToggle=" function(entryObj){} "/>`;

const preEntryObj = `entryObj = {
        id: '',
        title: '',
        defaultCollapsed: false,
        children: []
}`;

const preStyleObj = `styleObj = {
        [ className ]: { inline CSS }
}`;

const preSlotObj = `slotObj = {
        [ entryObj.id ]: ''
}`;

const nodeTree = [
  {
    id: 'list',
    title: '<div> .btb-react-list',
    children: [
      {
        id: 'layer',
        title: '<ul> .btb-react-list-layer .layer-[layer count]',
        children: [
          {
            id: 'container',
            title: '<li> .layer-container .layer-[layer count]',
            children: [
              {
                id: 'entry',
                title: '<div> .container_entry .entry-[entryObj.id] .entry-active',
                children: [
                  {
                    id: 'title',
                    title: '<div> .entry_title',
                  },
                  {
                    id: 'collapseBtn',
                    title: '<div> .entry_collapseBtn .collapseBtn-default',
                    children: [
                      {
                        id: 'arrow',
                        title: '<div> .collapseBtn_arrow',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'sublayer',
                title: '<div>.list_sublayer',
                children: [
                  {
                    id: 'next',
                    title: '<ul>.btb-vue-list-layer.layer-[layer count + 1]',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const tableHeadArr_property = [
  { name: 'Property Name', id: 'title' },
  { name: 'Type', id: 'type' },
  { name: 'Default', id: 'default' },
  { name: 'Notice', id: 'notice' },
];
const tableHeadArr_entry = [
  { name: 'Name', id: 'title' },
  { name: 'Type', id: 'type' },
  { name: 'Notice', id: 'notice' },
];

const tableBodyArr_basic = [
  { title: 'dataList', type: 'package.paramType.array', default: '[]', notice: 'package.list.property.dataList' },
  {
    title: 'activeID',
    type: 'package.paramType.string',
    default: 'undefined',
    notice: 'package.list.property.activeID',
  },
  {
    title: 'defaultActiveID',
    type: 'package.paramType.string',
    default: 'undefined',
    notice: 'package.list.property.defaultActiveID',
  },
  {
    title: 'collapseEnable',
    type: 'package.paramType.boolean',
    default: 'false',
    notice: 'package.list.property.collapseEnable',
  },
  { title: 'styleObj', type: 'package.paramType.object', default: '{}', notice: 'package.list.property.styleObj' },
  { title: 'slotObj', type: 'package.paramType.object', default: '{}', notice: 'package.list.property.slotObj' },
  {
    title: 'onEntryClick',
    type: 'package.paramType.function',
    default: 'undefined',
    notice: 'package.list.property.onEntryClick',
  },
  {
    title: 'onToggle',
    type: 'package.paramType.function',
    default: 'undefined',
    notice: 'package.list.property.onToggle',
  },
  { title: 'ref', type: 'useRef', default: 'undefined', notice: 'package.list.property.ref' },
];
const tableBodyArr_entry = [
  { title: 'id', type: 'package.paramType.string', notice: 'package.list.entryObj.id' },
  { title: 'title', type: 'package.paramType.string||package.paramType.node', notice: 'package.list.entryObj.title' },
  { title: 'defaultCollapsed', type: 'package.paramType.string', notice: 'package.list.entryObj.defaultCollapsed' },
  { title: 'children', type: 'package.paramType.array', notice: 'package.list.entryObj.children' },
];
const tableBodyArr_slot = [
  {
    title: '[ id of entryObj ]',
    type: 'package.paramType.string||package.paramType.node||package.paramType.function',
    notice: 'package.list.slotObj.entryObj',
  },
];

const tableSlotObj = {
  'td-type': (data, column) => {
    let sep = data[column.id].split('||');
    let result = '';
    if (sep.length > 0) {
      result = sep
        .map((item) => {
          return lang.translate(item);
        })
        .join(' || ');
    } else {
      result = data[column.id] === 'useRef' ? 'useRef' : lang.translate(data[column.id]);
    }
    return result;
  },
  'td-notice': (data, column) => {
    return lang.translate(data[column.id]);
  },
};

const Basic = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-list-basic">
      <PageHead title={lang.translate('package.list.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
      <Section
        head={
          <>
            {`${lang.translate('package.version_colon')}${packageInfo.version}`}
            <br />
            {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
          </>
        }
      >
        <p>{lang.translate(packageInfo.description)}</p>
      </Section>
      <Section head={lang.translate('package.section.installation')}>
        <pre className="page_pre">{preInstall}</pre>
      </Section>
      <Section head={lang.translate('package.section.render')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
      <Section head={lang.translate('package.section.parameters')}>
        <BTBTable
          className="page_table"
          mode="list"
          headData={tableHeadArr_property}
          bodyData={tableBodyArr_basic}
          slotObj={tableSlotObj}
        />
        <Block title="entryObj">
          <p>{lang.translate('package.list.parameters.entryObj')}</p>
          <pre className="page_pre">{preEntryObj}</pre>
          <BTBTable
            className="page_table"
            mode="list"
            headData={tableHeadArr_entry}
            bodyData={tableBodyArr_entry}
            slotObj={tableSlotObj}
          />
        </Block>
        <Block title="styleObj">
          <p>{lang.translate('package.list.parameters.styleObj')}</p>
          <pre className="page_pre">{preStyleObj}</pre>
        </Block>
        <Block title="slotObj">
          <p>{lang.translate('package.list.parameters.slotObj')}</p>
          <pre className="page_pre">{preSlotObj}</pre>
          <BTBTable
            className="page_table"
            mode="list"
            headData={tableHeadArr_entry}
            bodyData={tableBodyArr_slot}
            slotObj={tableSlotObj}
          />
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <BTBList className="page_node_tree" dataList={nodeTree} />
        <p>{lang.translate('package.list.nodeTree.notice')}</p>
      </Section>
    </Page>
  );
};

export default Basic;

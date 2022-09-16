import React from 'react';
import { useSelector } from 'react-redux';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-timeline

import BTBTimeline from '@blacktoolbox/react-timeline'
import '@blacktoolbox/react-timeline/lib/index.css'`;

const preRender = `<BTBTimeline
        nodeList=" Array of (String or Object) " 
        showPosition=" String "
        showAlign=" String "
        typeObj=" Object "
        styleObj=" Object "
/>`;
const preNodeObj = `typeObj = {
        type: String,
        ...{ node data }
}`;
const preTypeObj = `typeObj = {
        [ type ]: ( typeObj ) => { return [] }
}`;
const preStyleObj = `styleObj = {
        [ className ]: { inline CSS }
}`;

const nodeTree = [
  {
    id: 'timeline',
    title:
      '<div> .btb-react-timeline .timeline-position-{left || right || x || top || bottom || y} .timeline-align-{begin || center || end}',
    children: [
      {
        id: 'node',
        title: '<div> .timeline_node',
        children: [
          {
            id: 'point',
            title: '<div> .node_point',
          },
          {
            id: 'content',
            title: '<div> .node_content',
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

const tableBodyArr_basic = [
  {
    title: 'nodeList',
    type: 'package.paramType.array',
    default: '[]',
    notice: 'package.timeline.property.nodeList',
  },
  {
    title: 'showPosition',
    type: 'package.paramType.string',
    default: '"left"',
    notice: 'package.timeline.property.showPosition',
  },
  {
    title: 'showAlign',
    type: 'package.paramType.string',
    default: '"begin"',
    notice: 'package.timeline.property.showAlign',
  },
  {
    title: 'typeObj',
    type: 'package.paramType.object',
    default: '{}',
    notice: 'package.timeline.property.typeObj',
  },
  { title: 'styleObj', type: 'package.paramType.object', default: '{}', notice: 'package.timeline.property.styleObj' },
  { title: 'ref', type: 'useRef', default: 'undefined', notice: 'package.timeline.property.ref' },
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
    <Page id="btb-pkg-timeline-basic">
      <PageHead title={lang.translate('package.timeline.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
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
        <Block title="nodeObj">
          <p>{lang.translate('package.timeline.parameters.nodeObj')}</p>
          <pre className="page_pre">{preNodeObj}</pre>
        </Block>
        <Block title="typeObj">
          <p>{lang.translate('package.timeline.parameters.typeObj')}</p>
          <pre className="page_pre">{preTypeObj}</pre>
        </Block>
        <Block title="styleObj">
          <p>{lang.translate('package.timeline.parameters.styleObj')}</p>
          <pre className="page_pre">{preStyleObj}</pre>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <BTBList className="page_node_tree" dataList={nodeTree} />
      </Section>
    </Page>
  );
};

export default Basic;

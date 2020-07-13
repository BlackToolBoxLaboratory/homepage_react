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
`$ npm install --save @blacktoolbox/react-button

import BTBButton, { ButtonGroup } from '@blacktoolbox/react-button'
import '@blacktoolbox/react-button/lib/index.css'`;

const preRender =
`<BTBButtonGroup 
        direction=" String "
        styleObj=" Object " 
        onMemberClick=" function(member){} ">
        {button group's content}
</BTBButtonGroup>`;

const preStyleObj =
`styleObj = {
        [ className ]: { inline CSS }
}`;

const nodeTree = [
  {
    id       : 'buttonGroup',
    title    : '<div> .btb-react-button-group .gtoup-{horizontal || vertical}',
    children : [
      {
        id    : 'member',
        title : '<div> .group_member .group-[button count]'
      },
      {
        id    : 'empty',
        title : '<div> .group_member .group-empty'
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

const tableBodyArr = [
  {title : 'direction', type : 'package.paramType.string', default : '"horizontal"', notice : 'package.button.property.direction'},
  {title : 'styleObj', type : 'package.paramType.object', default : '{}', notice : 'package.button.property.styleObj'},
  {title : 'onMemberClick', type : 'package.paramType.function', default : 'undefined', notice : 'package.button.property.onMemberClick'},
  { title : 'ref', type : 'useRef', default : 'undefined', notice : 'package.button.property.ref' }
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

const BasicGroup = enhance(() => {
  return (
    <Page className="btb-pkg-button-basic">
      <PageHead title={lang.translate('package.button.name.group')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {lang.translate(packageInfo.descriptionGroup)}
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
        <BTBTable className="page_table" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr} slotObj={tableSlotObj}/>
        <Block title="styleObj">
          <p>{lang.translate('package.button.parameters.styleObj')}</p>
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <BTBList className="page_node_tree" dataList={nodeTree}/>
        <p>{lang.translate('package.button.nodeTree.notice')}</p>
      </Section>
    </Page>
  );
});

export default BasicGroup;

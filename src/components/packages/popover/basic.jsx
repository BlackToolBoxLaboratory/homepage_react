import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

import { lang } from '@src/plugins/btblab-prototype-languages.js';

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
`$ npm install --save @blacktoolbox/react-popover

import BTBPopover from '@blacktoolbox/react-popover'
import '@blacktoolbox/react-popover/lib/index.css'`;

const preRender =
`<BTBPopover
        showState=" Boolean " 
        showPosition=" String "
        showAlign=" String "
        withArrow=" Boolean "
        autoDetect=" Boolean "
        trigger=" String || Node "
        styleObj=" Object "
        onToggle=" function(){} "
        onShow=" function(){} "
        onHide=" function(){} "/>
        {popover's content}
</BTBPopover>`;

const preStyleObj =
`styleObj = {
        [ className ]: { inline CSS }
}`;

const nodeTree = [
  {
    id       : 'popover',
    title    : '<div> .btb-react-popover .popover-align-{begin || center || end} .popover-arrow',
    children : [
      {
        id    : 'trigger',
        title : '<div> .popover_trigger'
      },
      {
        id    : 'content',
        title : '<div> .popover_content .content-show .content-position-{top || bottom || left || right}'
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

const tableBodyArr_basic = [
  {title : 'showState', type : 'package.paramType.boolean', default : 'false', notice : 'package.popover.property.showState'},
  {title : 'showPosition', type : 'package.paramType.string', default : '"bottom"', notice : 'package.popover.property.showPosition'},
  {title : 'showAlign', type : 'package.paramType.string', default : '"begin"', notice : 'package.popover.property.showAlign'},
  {title : 'withArrow', type : 'package.paramType.boolean', default : 'true', notice : 'package.popover.property.withArrow'},
  {title : 'autoDetect', type : 'package.paramType.boolean', default : 'true', notice : 'package.popover.property.autoDetect'},
  {title : 'trigger', type : 'package.paramType.string||package.paramType.node', default : '"Trigger"', notice : 'package.popover.property.trigger'},
  {title : 'styleObj', type : 'package.paramType.object', default : '{}', notice : 'package.popover.property.styleObj'},
  {title : 'onToggle', type : 'package.paramType.function', default : 'undefined', notice : 'package.popover.property.onToggle'},
  {title : 'onShow', type : 'package.paramType.function', default : 'undefined', notice : 'package.popover.property.onShow'},
  {title : 'onHide', type : 'package.paramType.function', default : 'undefined', notice : 'package.popover.property.onHide'},
  { title : 'ref', type : 'useRef', default : 'undefined', notice : 'package.popover.property.ref' }
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
    <Page className="btb-pkg-popover-basic">
      <PageHead title={lang.translate('package.popover.name')} clickBtn={openLink} linkList={packageInfo.linkList}/>
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
        <Block title="styleObj">
          <p>{lang.translate('package.popover.parameters.styleObj')}</p>
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <BTBList className="page_node_tree" dataList={nodeTree}/>
      </Section>
    </Page>
  );
});

export default Basic;
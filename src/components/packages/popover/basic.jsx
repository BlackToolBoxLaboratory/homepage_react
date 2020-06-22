import React from 'react';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

const PageInfo = {
  ...packageInfo,
  'title' : 'Popover Basic'
};

const preInstall = 
`$ npm install --save @blacktoolbox/reat-popover

import BTBPopover from '@blacktoolbox/reat-popover'
import '@blacktoolbox/react-popover/lib/index.css'`;

const preRender =
`<BTBPopover
        showState=" Boolean " 
        showPosition=" String "
        showAlign=" String "
        stateLock=" Boolean "
        withArrow=" Boolean "
        autoDetect=" Boolean "
        trigger=" String || Node "
        styleObj=" Object "
        onToggle=" function(){} "
        onShow=" function(){} "
        onHide=" function(){} "/>
        {popover content}
</BTBPopover>`;

const preStyleObj =
`styleObj = {
        [ className ]: { inline CSS }
}`;

const nodeTree = [
  {
    id       : 'popover',
    title    : '<div> .btb-react-popover .popover-align-{begin ||center || end} .popover-arrow',
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
  {title : 'showState', type : 'Boolean', default : 'false', notice : 'We could use the parameter to overwrite the showState of popover.'},
  {title : 'showPosition', type : 'String', default : 'bottom', notice : 'The position of popover. Options in top || right || bottom || left.'},
  {title : 'showAlign', type : 'String', default : 'begin', notice : 'The align of popover. Options in begin || center || end.'},
  {title : 'stateLock', type : 'Boolean', default : 'true', notice : 'To keep showState in true or false.'},
  {title : 'withArrow', type : 'Boolean', default : 'true', notice : 'The tiny caret to let popover become conversation block. Get it false when we prefer a dropdown.'},
  {title : 'autoDetect', type : 'Boolean', default : 'true', notice : 'Default it will detect the window\'s inner edge of browser. When the popover show overglow to browser, it will adjust by self. We could get it false, if we don\'t need the feature working.'},
  {title : 'trigger', type : 'String || Node', default : 'Trigger', notice : 'Render the popover toggle trigger node.'},
  {title : 'styleObj', type : 'Object', default : '{}', notice : 'Object of customized style.'},
  {title : 'onToggle', type : 'Function', default : 'undefined', notice : 'Event function trigged when popover is toggle no matter showing or hiding.'},
  {title : 'onShow', type : 'Function', default : 'undefined', notice : 'Event function trigged when popover is going to show.'},
  {title : 'onHide', type : 'Function', default : 'undefined', notice : 'Event function trigged when popover is going to hidd.'},
  { title : 'ref', type : 'useRef', default : 'undefined', notice : 'For the feature of React.ref' }
];

const Basic = () => {
  return (
    <Page className="btb-pkg-popover-basic">
      <PageHead title={PageInfo.title} clickBtn={openLink} linkList={PageInfo.linkList}/>
      <Section head={(
        <>
          {`Version: ${PageInfo.version}`}<br/>
          {`Release Date: ${PageInfo.updated}`}
        </>
      )}>
        <p>
          {PageInfo.description}
        </p>
      </Section>
      <Section head="INSTALLATION">
        <pre className="page_pre">
          {preInstall}
        </pre>
      </Section>
      <Section head="RENDER">
        <pre className="page_pre">
          {preRender}
        </pre>
      </Section>
      <Section head="PARAMETERS">
        <Block title="Basic">
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr_basic}/>
        </Block>
        <Block title="styleObj">
          <p>Any className in this module could add inline CSS by styleObj.</p>
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
      </Section>
      <Section head="NODE TREE">
        <BTBList className="page_node_tree" dataList={nodeTree}/>
      </Section>
    </Page>
  );
};

export default Basic;
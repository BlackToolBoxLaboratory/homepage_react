import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';
// import { Button as BTBButton, ButtonGroup as BTBButtonGroup } from '@blacktoolbox/react-button';

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
`$ npm install --save @blacktoolbox/react-button

import BTBButton, { Button, ButtonGroup } from '@blacktoolbox/react-button'
import '@blacktoolbox/react-button/lib/index.css'`;

const preRender_button =
`<BTBButton 
        prependNode=" String || Node " 
        appendNode=" String || Node "
        styleObj=" Object " 
        onClick=" function(props){} " 
        onPrependClick=" function(props){} "
        onCoreClick=" function(props){} "
        onAppendClick=" function(props){} ">
        {button's content}
</BTBButton>`;

const preRender_buttonGroup =
`<BTBButtonGroup 
        direction=" String "
        styleObj=" Object " 
        onClick={_onGroupClick}>
        {button group's content}
</BTBButtonGroup>`;

const preStyleObj =
`styleObj = {
        [ className ]: { inline CSS }
}`;

const nodeTree_button = [
  {
    id       : 'button',
    title    : '<div> .btb-react-button',
    children : [
      {
        id    : 'prepend',
        title : '<div> .button_item .item-prepend'
      },
      {
        id    : 'core',
        title : '<div> .button_item .item-core'
      },
      {
        id    : 'append',
        title : '<div> .button_item .item-append'
      }
    ]
  }
];

const nodeTree_buttonGroup = [
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

const tableBodyArr_button = [
  {title : 'prependNode', type : 'package.paramType.string||package.paramType.node', default : 'undefined', notice : 'package.button.property.prependNode'},
  {title : 'appendNode', type : 'package.paramType.string||package.paramType.node', default : 'undefined', notice : 'package.button.property.appendNode'},
  {title : 'styleObj', type : 'package.paramType.object', default : '{}', notice : 'package.button.property.styleObj'},
  {title : 'onClick', type : 'package.paramType.function', default : 'undefined', notice : 'package.button.property.onButtonClick'},
  {title : 'onPrependClick', type : 'package.paramType.function', default : 'undefined', notice : 'package.button.property.onPrependClick'},
  {title : 'onCoreClick', type : 'package.paramType.function', default : 'undefined', notice : 'package.button.property.onCoreClick'},
  {title : 'onAppendClick', type : 'package.paramType.function', default : 'undefined', notice : 'package.button.property.onAppendClick'},
  { title : 'ref', type : 'useRef', default : 'undefined', notice : 'package.button.property.ref' }
];

const tableBodyArr_buttonGroup = [
  {title : 'direction', type : 'package.paramType.string', default : '"horizontal"', notice : 'package.button.property.direction'},
  {title : 'styleObj', type : 'package.paramType.object', default : '{}', notice : 'package.button.property.styleObj'},
  {title : 'onClick', type : 'package.paramType.function', default : 'undefined', notice : 'package.button.property.onGroupClick'},
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

const Basic = enhance(() => {
  return (
    <Page className="btb-pkg-button-basic">
      <PageHead title={lang.translate('package.button.name')} clickBtn={openLink} linkList={packageInfo.linkList}/>
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
        <Block title={lang.translate('package.button.component.button')}>
          <pre className="page_pre">
            {preRender_button}
          </pre>
        </Block>
        <Block title={lang.translate('package.button.component.group')}>
          <pre className="page_pre">
            {preRender_buttonGroup}
          </pre>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.parameters')}>
        <Block title={lang.translate('package.button.component.button')}>
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr_button} slotObj={tableSlotObj}/>
        </Block>
        <Block title={lang.translate('package.button.component.group')}>
          <BTBTable className="page_table" mode="list" headData={tableHeadArr_property} bodyData={tableBodyArr_buttonGroup} slotObj={tableSlotObj}/>
        </Block>
        <Block title="styleObj">
          <p>{lang.translate('package.button.parameters.styleObj')}</p>
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <Block title={lang.translate('package.button.component.button')}>
          <BTBList className="page_node_tree" dataList={nodeTree_button}/>
        </Block>
        <Block title={lang.translate('package.button.component.group')}>
          <BTBList className="page_node_tree" dataList={nodeTree_buttonGroup}/>
          <p>{lang.translate('package.button.nodeTree.notice')}</p>
        </Block>
      </Section>
    </Page>
  );
});

export default Basic;

{/* <BTBButton prependNode="abc" appendNode="123" styleObj={{'itme-core' : {color : 'red'}}} onClick={_onClick} onPrependClick={_onPrependClick} onCoreClick={_onCoreClick} onAppendClick={_onAppendClick}>
<FAI className="item_button" icon={['fas', 'external-link-alt']} fixedWidth />
</BTBButton>
<BTBButtonGroup onClick={_onGroupClick}>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</BTBButtonGroup>
<BTBButtonGroup onClick={_onGroupClick} direction="horizontal" styleObj={{'member-2' : {color : 'red'}}}>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</BTBButtonGroup>
<BTBButtonGroup onClick={_onGroupClick}>
</BTBButtonGroup>
<BTBButtonGroup onClick={_onGroupClick} direction="vertical">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
</BTBButtonGroup> */}

import React from 'react';
import { useSelector } from 'react-redux';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';

import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-button

import { Button } from '@blacktoolbox/react-button'
import '@blacktoolbox/react-button/lib/index.css'`;

const preRender = `<BTBButton 
        prependNode=" String || Node " 
        appendNode=" String || Node "
        styleObj=" Object " 
        onClick=" function(props){} " 
        onPrependClick=" function(props){} "
        onCoreClick=" function(props){} "
        onAppendClick=" function(props){} "
        disabled=" Boolean "
>
        { children }
</BTBButton>`;

const preStyleObj = `styleObj = {
        [ className ]: { inline CSS }
}`;

const nodeTree = [
  {
    id: 'button',
    title: '<button> .btb-react-button .button-disabled',
    children: [
      {
        id: 'prepend',
        title: '<div> .button_item .item-prepend',
      },
      {
        id: 'core',
        title: '<div> .button_item .item-core',
      },
      {
        id: 'append',
        title: '<div> .button_item .item-append',
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

const tableBodyArr = [
  {
    title: 'prependNode',
    type: 'package.paramType.string||package.paramType.node',
    default: 'undefined',
    notice: 'package.button.property.prependNode',
  },
  {
    title: 'appendNode',
    type: 'package.paramType.string||package.paramType.node',
    default: 'undefined',
    notice: 'package.button.property.appendNode',
  },
  { title: 'styleObj', type: 'package.paramType.object', default: '{}', notice: 'package.button.property.styleObj' },
  {
    title: 'onClick',
    type: 'package.paramType.function',
    default: '()=>{}',
    notice: 'package.button.property.onButtonClick',
  },
  {
    title: 'onPrependClick',
    type: 'package.paramType.function',
    default: '()=>{}',
    notice: 'package.button.property.onPrependClick',
  },
  {
    title: 'onCoreClick',
    type: 'package.paramType.function',
    default: '()=>{}',
    notice: 'package.button.property.onCoreClick',
  },
  {
    title: 'onAppendClick',
    type: 'package.paramType.function',
    default: '()=>{}',
    notice: 'package.button.property.onAppendClick',
  },
  {
    title: 'disabled',
    type: 'package.paramType.boolean',
    default: 'undefined',
    notice: 'package.button.property.disabled',
  },
  { title: 'ref', type: 'useRef', default: 'undefined', notice: 'package.button.property.ref' },
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

const BasicButton = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-button-basic-button">
      <PageHead
        title={lang.translate('package.button.name.button')}
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
        <p>{lang.translate(packageInfo.descriptionButton)}</p>
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
          bodyData={tableBodyArr}
          slotObj={tableSlotObj}
        />
        <Block title="styleObj">
          <p>{lang.translate('package.button.parameters.styleObj')}</p>
          <pre className="page_pre">{preStyleObj}</pre>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <BTBList className="page_node_tree" dataList={nodeTree} />
      </Section>
    </Page>
  );
};

export default BasicButton;

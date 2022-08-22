import React from 'react';
import { useSelector } from 'react-redux';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-message

import { MessageProvider, useMessage } from '@blacktoolbox/react-message';
import '@blacktoolbox/react-message/lib/index.css'`;

const preRender = `<MessageProvider
        limit = " Number"
        transitionInDuration = " Number "
        transitionOutDuration = " Number "
        duration = " Number "
        horizontal = " String "
        vertical = " String "
        closeable= " Boolean "
>
        {page's content}
</MessageProvider>`;

const preUseMessage = `const message = useMessage();

message.send({
  type = " String ",
  context = " String || Node ",
  closerNode = " String || Node "
})`;

const nodeTree = [
  {
    id: 'message',
    title: '<div> .btb-react-message .message-horizontal-{horizontal} message-vertical-{vertical}',
    children: [
      {
        id: 'container',
        title: '<div> .message_container .container-showing',
        children: [
          {
            id: 'notice',
            title: '<div> .btb-react-notice .container_content .notice-type-{type}',
            children: [
              {
                id: 'context',
                title: '<div> .content_context',
              },
              {
                id: 'closer',
                title: '<div> .content_closer',
              },
            ]
          },
        ]
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
    title: 'limit',
    type: 'package.paramType.number',
    default: '5',
    notice: 'package.message.property.limit',
  },
  {
    title: 'transitionInDuration',
    type: 'package.paramType.number',
    default: '0.3 * 1000',
    notice: 'package.message.property.transitionInDuration',
  },
  {
    title: 'transitionOutDuration',
    type: 'package.paramType.number',
    default: '0.3 * 1000',
    notice: 'package.message.property.transitionOutDuration',
  },
  {
    title: 'duration',
    type: 'package.paramType.number',
    default: '3 * 1000',
    notice: 'package.message.property.duration',
  },
  {
    title: 'horizontal',
    type: 'package.paramType.string',
    default: "'cneter'",
    notice: 'package.message.property.horizontal',
  },
  {
    title: 'vertical',
    type: 'package.paramType.string',
    default: "'top'",
    notice: 'package.message.property.vertical',
  },
  {
    title: 'closeable',
    type: 'package.paramType.boolean',
    default: 'false',
    notice: 'package.message.property.closeable',
  },
];

const tableBodyArr_useMessage = [
  {
    title: 'type',
    type: 'package.paramType.string',
    default: "'normal'",
    notice: 'package.message.property.type',
  },
  {
    title: 'context',
    type: 'package.paramType.string',
    default: "'No message left.'",
    notice: 'package.message.property.context',
  },
  {
    title: 'closerNode',
    type: 'package.paramType.string',
    default: '<>&#x2716;</>',
    notice: 'package.message.property.closerNode',
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

const BasicMessage = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-message-basic-message">
      <PageHead
        title={lang.translate('package.message.name.message')}
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
        <p>{lang.translate(packageInfo.descriptionMessage)}</p>
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
        <Block title="useMessage">
          <p>{lang.translate('package.message.description.useMessage')}</p>
          <pre className="page_pre">{preUseMessage}</pre>
          <BTBTable
            className="page_table"
            mode="list"
            headData={tableHeadArr_property}
            bodyData={tableBodyArr_useMessage}
            slotObj={tableSlotObj}
          />
        </Block>
      </Section>
      <Section head={lang.translate('package.section.nodeTree')}>
        <BTBList className="page_node_tree" dataList={nodeTree} />
      </Section>
    </Page>
  );
};

export default BasicMessage;

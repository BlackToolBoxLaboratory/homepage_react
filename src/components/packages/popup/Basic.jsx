import React from 'react';
import { useSelector } from 'react-redux';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-popup

import BTBPopup from '@blacktoolbox/react-popup'
import '@blacktoolbox/react-popup/lib/index.css'`;

const preRender = `<BTBPopup
        defaultTransitionDuration=" Number "
        defaultPersistent= " Boolean "
        onShow=" function(){} "
        onHide=" function(){} "/>
        {popover's content}
</BTBPopup>`;

const preUsePopup = `const popup = usePopup();

popup.show({
  content: " String || Node"
})

popup.hide({
  duration: " Number "
})`;

const nodeTree = [
  {
    id: 'popup',
    title: '<div> .btb-react-popup .popup-showing',
    children: [
      {
        id: 'mask',
        title: '<div> .popup_mask',
      },
      {
        id: 'container',
        title: '<div> .popup_container',
        children: [
          {
            id: 'content',
            title: '<div> .container_content',
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
    title: 'defaultTransitionDuration',
    type: 'package.paramType.number',
    default: 'undefined',
    notice: 'package.popup.property.defaultTransitionDuration',
  },
  {
    title: 'defaultPersistent',
    type: 'package.paramType.boolean',
    default: 'false',
    notice: 'package.popup.property.defaultPersistent',
  },
  {
    title: 'onShow',
    type: 'package.paramType.function',
    default: '()=>{}',
    notice: 'package.popup.property.onShow',
  },
  {
    title: 'onHide',
    type: 'package.paramType.function',
    default: '()=>{}',
    notice: 'package.popup.property.onHide',
  },
];

const tableBodyArr_usePopup = [
  {
    title: 'content',
    type: 'package.paramType.node||package.paramType.string',
    default: "''",
    notice: 'package.popup.property.content',
  },
  {
    title: 'persistent',
    type: 'package.paramType.boolean',
    default: "defaultTransitionDuration",
    notice: 'package.popup.property.persistent',
  },
  {
    title: 'duration',
    type: 'package.paramType.number',
    default: "0.3 * 1000",
    notice: 'package.popup.property.duration',
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
    <Page id="btb-pkg-popup-basic">
      <PageHead title={lang.translate('package.popup.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
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
        <Block title="usePopup">
          <p>{lang.translate('package.popup.description.usePopup')}</p>
          <pre className="page_pre">{preUsePopup}</pre>
          <BTBTable
            className="page_table"
            mode="list"
            headData={tableHeadArr_property}
            bodyData={tableBodyArr_usePopup}
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

export default Basic;

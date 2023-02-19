import React from 'react';
import { useSelector } from 'react-redux';
import BTBList from '@blacktoolbox/react-list';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-form

import { Checkbox } from '@blacktoolbox/react-form'
import '@blacktoolbox/react-form/lib/index.css'`;

const preRender = `<BTBCheckbox
        formValue=" Array of (Number || String) "
        size= " String "
        color=" String "
        inline=" Boolean "
        styleObj=" Object "
        { props }
</BTBCheckbox>`;

const preStyleObj = `styleObj = {
  [ className ]: { inline CSS }
}`;

const nodeTree = [
  {
    id: 'form',
    title: '<div> .btb-react-form .form-checkbox .checkbox-disabled .checkbox-inline .checkbox-focused',
    children: [
      {
        id: 'checkbox',
        title: '<input> .checkbox_input',
      },
      {
        id: 'trigger',
        title: '<label> .checkbox_item',
        children: [
          {
            id: 'button',
            title: '<div> .item_button',
          }
        ]
      },
      {
        id: 'label',
        title: '<label> .checkbox_label',
      }
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
    title: 'formValue',
    type: 'package.paramType.array',
    default: "[]",
    notice: 'package.form.property.checkboxValue',
  },
  {
    title: 'size',
    type: 'package.paramType.string',
    default: "undefined",
    notice: 'package.form.property.checkboxSize',
  },
  {
    title: 'color',
    type: 'package.paramType.string',
    default: "undefined",
    notice: 'package.form.property.checkboxColor',
  },
  {
    title: 'signColor',
    type: 'package.paramType.string',
    default: "undefined",
    notice: 'package.form.property.checkboxSignColor',
  },
  {
    title: 'inline',
    type: 'package.paramType.boolean',
    default: 'false',
    notice: 'package.form.property.inline',
  },
  { title: 'styleObj', type: 'package.paramType.object', default: '{}', notice: 'package.button.property.styleObj' },
  {
    title: 'props',
    type: 'package.paramType.any',
    default: 'undefined',
    notice: 'package.form.property.checkbox',
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
    <Page id="btb-pkg-form-basic">
      <PageHead title={lang.translate('package.form.name.checkbox')} clickBtn={openLink} linkList={packageInfo.linkList} />
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
        <Block title="styleObj">
          <p>{lang.translate('package.form.parameters.styleObj')}</p>
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

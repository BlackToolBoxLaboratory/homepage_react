import React from 'react';
import { useSelector } from 'react-redux';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';

import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-sync-localstorage

import { SyncLocalStorageProvider, useSyncLocalStorage } from '@blacktoolbox/react-sync-localstorage'`;

const preRender = `<SyncLocalStorageProvider 
        name=" String "
>
        { children }
</SyncLocalStorageProvider>`;

const preUseSyncLocalStorage = `const syncLocalstorage = useSyncLocalStorage();

// parse object, parse()
const localstorage = syncLocalstorage.parse();

// replace object, replace(object)
syncLocalstorage.replace(Object);

// get item from object, getItem(key)
const item = syncLocalstorage.getItem(String);

// set item, setItem(key, value)
syncLocalstorage.setItem(String, any);

// check item, hasItem(key)
const result = syncLocalstorage.hasItem(String);

// delete item, deleteItem(key)
syncLocalstorage.deleteItem(String);`;

const tableHeadArr_property = [
  { name: 'Property Name', id: 'title' },
  { name: 'Type', id: 'type' },
  { name: 'Default', id: 'default' },
  { name: 'Notice', id: 'notice' },
];

const tableBodyArr_basic = [
  {
    title: 'name',
    type: 'package.paramType.string',
    default: '"btblab-sync-localstorage"',
    notice: 'package.localstorage.property.name',
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

const BasicLocalstorage = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  return (
    <Page id="btb-pkg-localstorage-basic">
      <PageHead title={lang.translate('package.localstorage.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
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
        <Block title="useSyncLocalStorage">
          <p>{lang.translate('package.localstorage.description.useSyncLocalStorage')}</p>
          <pre className="page_pre">{preUseSyncLocalStorage}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default BasicLocalstorage;

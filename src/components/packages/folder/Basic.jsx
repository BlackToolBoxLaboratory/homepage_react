import React from 'react';
import { useSelector } from 'react-redux';
import BTBTable from '@blacktoolbox/react-table';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';

import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/react-component-folder

import BTBPopover from '@blacktoolbox/react-component-folder'`;

const preRender = `<BTBComponentFolder components=" Array of Node ">
        {component's content}
</BTBComponentFolder>`;

const preOldRender = `<Provider store={store} >
        <HashRouter>
                <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                                <Route path={...} component={...} />
                        </Switch>
                </Suspense>
        </HashRouter>
</Provider>`;

const preNewRender = `<BTBComponentFolder components={componentList} >
        <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                        <Route path={...} component={...} />
                </Switch>
        </Suspense>
</BTBComponentFolder>`;

const preNoticeRender = `/* eslint-disable react/jsx-key */
const componentList = [
        <Provider store={store} />,
        <HashRouter />,
];
/* eslint-enable react/jsx-key */`;

const tableHeadArr_property = [
  { name: 'Property Name', id: 'title' },
  { name: 'Type', id: 'type' },
  { name: 'Default', id: 'default' },
  { name: 'Notice', id: 'notice' },
];

const tableBodyArr_basic = [
  {
    title: 'components',
    type: 'package.paramType.array',
    default: '[]',
    notice: 'package.folder.property.components',
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

const BasicFolder = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-folder-basic">
      <PageHead title={lang.translate('package.folder.name')} clickBtn={openLink} linkList={packageInfo.linkList} />
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
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title={lang.translate('package.folder.example.old.title')}>
          <p>{lang.translate('package.folder.example.old.description')}</p>
          <pre className="page_pre">{preOldRender}</pre>
        </Block>
        <Block title={lang.translate('package.folder.example.new.title')}>
          <p>{lang.translate('package.folder.example.new.description')}</p>
          <pre className="page_pre">{preNewRender}</pre>
          <p>{lang.translate('package.folder.example.new.notice')}</p>
          <pre className="page_pre">{preNoticeRender}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default BasicFolder;

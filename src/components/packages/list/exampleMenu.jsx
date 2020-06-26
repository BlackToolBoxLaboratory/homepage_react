import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBList from '@blacktoolbox/react-list';

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

const _menuData = [
  {
    id       : 'f1',
    title    : 'Folder: 1',
    children : [
      { id : 't11', title : 'Menu: 1-1' },
      { id : 't12', title : 'Menu: 1-2' }
    ]
  },
  {
    id               : 'f2',
    title            : 'Folder: 2',
    defaultCollapsed : true,
    children         : [
      { id : 't21', title : 'Menu: 2-1' },
      { id : 't22', title : 'Menu: 2-2' },
      { id : 't23', title : 'Menu: 2-3' }
    ]
  }
];

const preRender = 
`<btb-react-list dataList={menuData} />`;

const preListData = 
`const menuData = [
  { id: 'f1', title: 'Folder: 1', children: [
          { id: 't11', title: 'Menu: 1-1' },
          { id: 't12', title: 'Menu: 1-2' }
  ]},
  { id: 'f2', title: 'Folder: 2', defaultCollapsed: true, children: [
          { id: 't21', title: 'Menu: 2-1' },
          { id: 't22', title: 'Menu: 2-2' },
          { id: 't23', title: 'Menu: 2-3' }
  ]}
]`;

const ExampleMenu = enhance(() => {
  return (
    <Page className="btb-pkg-list-example-menu">
      <PageHead title={lang.translate('package.list.example.menu.title')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {lang.translate('package.list.example.menu.description')}
        </p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBList dataList={_menuData} collapseEnable/>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">
          {preRender}
        </pre>
        <Block title="menuData">
          <pre className="page_pre">
            {preListData}
          </pre>
        </Block>
      </Section>
    </Page>
  );
});

export default ExampleMenu;
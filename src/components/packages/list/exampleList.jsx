import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBList from '@blacktoolbox/react-list';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const enhance = compose(
  connect((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  })
);

const _listData = [
  {
    id: 'b1',
    title: 'Branch: 1',
    children: [
      { id: 'l11', title: 'Leaf: 1-1' },
      {
        id: 'b12',
        title: 'Branch: 1-2',
        children: [
          { id: 'l121', title: 'Leaf: 1-2-1' },
          { id: 'l122', title: 'Leaf: 1-2-2' },
        ],
      },
      { id: 'l13', title: 'Leaf: 1-3' },
    ],
  },
  {
    id: 'b2',
    title: 'Branch: 2',
    children: [
      {
        id: 'l21',
        title: 'Leaf: 2-1',
      },
      { id: 'l22', title: 'Leaf: 2-2' },
    ],
  },
];

const preRender = `<btb-react-list dataList={listData} />`;

const preListData = `const listData = [
        { id: 'b1', title: 'Branch: 1', children: [
                { id: 'l11', title: 'Leaf: 1-1' },
                { id: 'b12', title: 'Branch: 1-2', children: [
                        { id: 'l121', title: 'Leaf: 1-2-1' },
                        { id: 'l122', title: 'Leaf: 1-2-2' }
                ]},
                { id: 'l13', title: 'Leaf: 1-3' }
        ]},
        { id: 'b2', title: 'Branch: 2', children: [
                { id: 'l21', title: 'Leaf: 2-1' },
                { id: 'l22', title: 'Leaf: 2-2' }
        ]}
]`;

const ExampleList = enhance(() => {
  return (
    <Page className="btb-pkg-list-example-list">
      <PageHead
        title={lang.translate('package.list.example.list.title')}
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
        <p>{lang.translate('package.list.example.list.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBList dataList={_listData} />
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="listData">
          <pre className="page_pre">{preListData}</pre>
        </Block>
      </Section>
    </Page>
  );
});

export default ExampleList;

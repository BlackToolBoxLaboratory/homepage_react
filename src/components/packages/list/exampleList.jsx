import React from 'react';
import BTBList from '@blacktoolbox/react-list';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

const PageInfo = {
  ...packageInfo,
  'title'       : 'Example - List',
  'description' : 'Here is a very simple example for a list, if we just give a data list.'
};

const _listData = [
  {
    id       : 'b1',
    title    : 'Branch: 1',
    children : [
      { id : 'l11', title : 'Leaf: 1-1' },
      {
        id       : 'b12',
        title    : 'Branch: 1-2',
        children : [
          { id : 'l121', title : 'Leaf: 1-2-1' },
          { id : 'l122', title : 'Leaf: 1-2-2' }
        ]
      },
      { id : 'l13', title : 'Leaf: 1-3' }
    ]
  },
  {
    id       : 'b2',
    title    : 'Branch: 2',
    children : [
      {
        id    : 'l21',
        title : 'Leaf: 2-1'
      },
      { id : 'l22', title : 'Leaf: 2-2' }
    ]
  }
];

const preRender = 
`<btb-react-list dataList={listData} />`;

const preListData = 
`const listData = [
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

const ExampleList = () => {
  return (
    <Page className="btb-pkg-list-example-list">
      <PageHead title={PageInfo.title} clickBtn={openLink} btnList={PageInfo.btnList}/>
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
      <Section head="EXAMPLE">
        <BTBList dataList={_listData} />
      </Section>
      <Section head="SOURCECODE">
        <Block title="Render">
          <pre className="page_pre">
            {preRender}
          </pre>
        </Block>
        <Block title="listData">
          <pre className="page_pre">
            {preListData}
          </pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleList;
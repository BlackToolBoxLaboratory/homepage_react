import React from 'react';
import BTBList from '@blacktoolbox/react-list';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

const PageInfo = {
  ...packageInfo,
  'title'       : 'Example - Slot',
  'description' : 'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to dataList can be customized by slotObj in String, Node, or Function way.'
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

const _slotObj = {
  'b2' : (entry) => {
    return (
      <div>
        {`${entry.id} overwrited by Function`}
      </div>
    );
  },
  'l22' : (
    <div>
      {'l22 overwrited by Node'}
    </div>
  )
};

const preRender = 
`<BTBList 
        dataList={listData} 
        slotObj={slotObj}/>`;

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

const preSlotObj = 
`const _slotObj = {
  'b2': (entry) => {
    return (
      <div>
      {\`\${entry.id} overwrited by Function\`}
      </div>
      )
    },
    'l22': (
      <div>
        {'l22 overwrited by Node'}
      </div>
    )
  }`;

const ExampleSlot = () => {
  return (
    <Page className="btb-pkg-list-example-slot">
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
        <BTBList dataList={_listData} slotObj={_slotObj}/>
      </Section>
      <Section head="SOURCECODE">
        <Block title="render">
          <pre className="page_pre">
            {preRender}
          </pre>
        </Block>
        <Block title="listData">
          <pre className="page_pre">
            {preListData}
          </pre>
        </Block>
        <Block title="styleObj">
          <pre className="page_pre">
            {preSlotObj}
          </pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleSlot;
import React, {useState} from 'react';
import BTBList from '@blacktoolbox/react-list';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import packageObj from '@src/assets/definitions/packageObj';
import { openLink } from '@src/utils/functions.js';

const packageInfo = {
  'version'     : packageObj.list.version,
  'updated'     : packageObj.list.updated,
  'description' : 'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to dataList can be customized by slotObj in String, Node, or Function way.',
  'btnList'     : [
    { 
      'id'  : 'github', 
      'fa'  : ['fab', 'github'], 
      'url' : 'https://github.com/BlackToolBoxLaboratory/react-list' 
    }, { 
      'id'  : 'npm', 
      'fa'  : ['fab', 'npm'], 
      'url' : 'https://www.npmjs.com/package/@blacktoolbox/react-list'
    }
  ]
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
      <PageHead title={'Example - Slot'} clickBtn={openLink} btnList={packageInfo.btnList}/>
      <Section head={(
        <>
          {`Version: ${packageInfo.version}`}<br/>
          {`Release Date: ${packageInfo.updated}`}
        </>
      )}>
        <p>
          {packageInfo.description}
        </p>
      </Section>
      <Section head="EXAMPLE">
        <BTBList dataList={_listData} slotObj={_slotObj}/>
      </Section>
      <Section head="CONFIGURATION">
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
import React, { useState } from 'react';
import BTBList from '@blacktoolbox/react-list';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import packageObj from '@src/assets/definitions/packageObj';
import { openLink } from '@src/utils/functions.js';

const packageInfo = {
  'version'     : packageObj.list.version,
  'updated'     : packageObj.list.updated,
  'description' : 'Here is going to show you about how to use the styleObj and the example of defaultActiveID and v-model of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly.',
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

const _styleObj = {
  container_entry : {
    cursor : 'pointer'
  },
  'entry-active' : {
    'background-color' : '#00d8ff'
  }
};

const preActiveID_EntryClick = 
`const activeID = useActiveState('l13')

function useActiveState (defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    value,
    onChange : (data) => {
      setState(data.id);
    }
  };
}`;

const preRender = 
`<BTBList 
        dataList={listData} 
        styleObj={styleObj} 
        activeID={activeID.value} 
        onEntryClick={activeID.onChange}/>`;

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

const preStyleObj = 
`const _styleObj = {
  'container_entry': {
          cursor: 'pointer'
  },
  'entry-active': {
          'background-color': '#b8dec9'
  }
}`;

const ExampleStyle = () => {
  const activeID = useActiveState('l13');

  return (
    <Page className="btb-pkg-list-example-style">
      <PageHead title={'Example - Style'} clickBtn={openLink} btnList={packageInfo.btnList}/>
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
        <p className="example_activeID">
          {`Active ID: ${activeID.value}`}
        </p>
        <BTBList dataList={_listData} styleObj={_styleObj} activeID={activeID.value} onEntryClick={activeID.onChange}/>
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
        <Block title="activeID & useState">
          <pre className="page_pre">
            {preActiveID_EntryClick}
          </pre>
        </Block>
        <Block title="styleObj">
          <pre className="page_pre">
            {preStyleObj}
          </pre>
        </Block>
      </Section>
    </Page>
  );
};

function useActiveState (defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    value,
    onChange : (data) => {
      setState(data.id);
    }
  };
}

export default ExampleStyle;
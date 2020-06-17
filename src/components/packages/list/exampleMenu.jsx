import React from 'react';
import BTBList from '@blacktoolbox/react-list';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

const PageInfo = {
  ...packageInfo,
  'title'       : 'Example - Menu',
  'description' : 'When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the onToggle event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the onEntryClick event function too. Besides for a menu, it can tag one as defaultActiveID. Also utilize the useState to work with activeID',
};

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

const ExampleMenu = () => {
  return (
    <Page className="btb-pkg-list-example-menu">
      <PageHead title={PageInfo.title} clickBtn={openLink} linkList={PageInfo.linkList}/>
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
        <BTBList dataList={_menuData} collapseEnable/>
      </Section>
      <Section head="SOURCECODE">
        <Block title="render">
          <pre className="page_pre">
            {preRender}
          </pre>
        </Block>
        <Block title="menuData">
          <pre className="page_pre">
            {preListData}
          </pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleMenu;
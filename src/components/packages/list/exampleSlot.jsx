import React from 'react';
import { useSelector } from 'react-redux';
import BTBList from '@blacktoolbox/react-list';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

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

const _slotObj = {
  b2: (entry) => {
    return <div>{`${entry.id} overwrited by Function`}</div>;
  },
  l22: <div>{'l22 overwrited by Node'}</div>,
};

const preRender = `<BTBList 
        dataList={listData} 
        slotObj={slotObj}/>`;

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

const preSlotObj = `const _slotObj = {
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
        }
}`;

const ExampleSlot = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-list-example-slot">
      <PageHead
        title={lang.translate('package.list.example.slot.title')}
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
        <p>{lang.translate('package.list.example.slot.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBList dataList={_listData} slotObj={_slotObj} />
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="listData">
          <pre className="page_pre">{preListData}</pre>
        </Block>
        <Block title="styleObj">
          <pre className="page_pre">{preSlotObj}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleSlot;

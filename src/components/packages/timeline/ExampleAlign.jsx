import React from 'react';
import { useSelector } from 'react-redux';
import BTBTimeline from '@blacktoolbox/react-timeline';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block, Divider } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preNodeList = `const nodeList = [
  'pure test event',
  {
          type: 'customized',
          description: 'description for type 1'
  }
];`;

const preTypeObj = `const typeObj = {
  'customized': (node)=>{
          return (
                  <>
                          <div>{\`Type: \${node.type}\`}</div>
                          <div>{\`Description: \${node.description}\`}</div>
                  </>
          )
  }
};`;

const preStyleObj = `const styleObj = {
        'timeline_node': {
                'maxWidth': 'unset',
        },
        'node_content' : {
                'border': '1px solid black',
                'borderRadius': '0.5rem',
                'padding': '0.5rem',
                'whiteSpace': 'nowrap',
                'background': 'white',
        }
};`;

const preRender = `<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="begin"/>

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="center" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="end" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="begin" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="center" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="end" />
`;

const nodeList = [
  'pure test event',
  {
    type: 'customized',
    description: 'description for type 1',
  },
];

const typeObj = {
  customized: (node) => {
    return (
      <>
        <div>{`Type: ${node.type}`}</div>
        <div>{`Description: ${node.description}`}</div>
      </>
    );
  },
};

const styleObj = {
  timeline_node: {
    maxWidth: 'unset',
  },
  node_content: {
    border: '1px solid black',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    whiteSpace: 'nowrap',
    background: 'white',
  },
};

const ExampleAlign = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-timeline-example-align">
      <PageHead
        title={lang.translate('package.timeline.example.align.title')}
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
        <p>{lang.translate('package.timeline.example.align.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title={lang.translate('package.timeline.example.vertical')}>
          <div className="align_vertical">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="begin" />
          </div>
          <Divider />
          <div className="align_vertical">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="center" />
          </div>
          <Divider />
          <div className="align_vertical">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" align="end" />
          </div>
        </Block>
        <Block title={lang.translate('package.timeline.example.horizontal')}>
          <div className="align_horizontal">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="begin" />
          </div>
          <Divider className="align_horizontal" />
          <div className="align_horizontal">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="center" />
          </div>
          <Divider className="align_horizontal" />
          <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" align="end" />
        </Block>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="headData">
          <pre className="page_pre">{preNodeList}</pre>
        </Block>
        <Block title="headData">
          <pre className="page_pre">{preTypeObj}</pre>
        </Block>
        <Block title="headData">
          <pre className="page_pre">{preStyleObj}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default ExampleAlign;

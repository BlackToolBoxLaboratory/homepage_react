import React from 'react';
import { useSelector } from 'react-redux';
import BTBTimeline from '@blacktoolbox/react-timeline';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block, Divider } from '@src/modules/pageLayout';
import packageInfo from '../timeline/packageInfo.js';

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
        'node_content' : {
                'border': '1px solid black',
                'borderRadius': '0.5rem',
                'padding': '0.5rem',
                'whiteSpace': 'nowrap',
                'background': 'white',
        }
};`;

const preRender = `<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="right" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="x" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="bottom" />

<BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="y" />
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
  node_content: {
    border: '1px solid black',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    whiteSpace: 'nowrap',
    background: 'white',
  },
};

const ExamplePosition = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-timeline-example-position">
      <PageHead
        title={lang.translate('package.timeline.example.position.title')}
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
        <p>{lang.translate('package.timeline.example.position.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title={lang.translate('package.timeline.example.vertical')}>
          <div className="align_vertical">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="left" />
          </div>
          <Divider />
          <div className="align_vertical">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="right" />
          </div>
          <Divider />
          <div className="align_vertical">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="x" />
          </div>
        </Block>
        <Block title={lang.translate('package.timeline.example.horizontal')}>
          <div className="align_horizontal">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="top" />
          </div>
          <Divider className="align_horizontal" />
          <div className="align_horizontal">
            <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="bottom" />
          </div>
          <Divider className="align_horizontal" />
          <BTBTimeline nodeList={nodeList} typeObj={typeObj} styleObj={styleObj} position="y" />
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

export default ExamplePosition;

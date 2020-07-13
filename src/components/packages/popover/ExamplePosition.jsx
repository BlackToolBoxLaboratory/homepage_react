import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBPopover from '@blacktoolbox/react-popover';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section } from '@src/modules/pageLayout/index.js';
import packageInfo from './packageInfo.js';

const enhance = compose(
  connect(
    (state) => {
      return {
        'languageSetting'  : state.language.languageSetting
      };
    }
  )
);

const preRender =
`<BTBPopover showPosition={"left"} trigger={(<button>Left</button>)}>
        Example: Left
</BTBPopover>

<BTBPopover showPosition={"top"} trigger={(<button>Top</button>)}>
        Example: Top
</BTBPopover>

<BTBPopover showPosition={"bottom"} trigger={(<button>Bottom</button>)}>
        Example: Bottom
</BTBPopover>

<BTBPopover showPosition={"right"} trigger={(<button>Right</button>)}>
        EXample: Right
</BTBPopover>`;

const ExamplePosition = enhance(() => {
  return (
    <Page className="btb-pkg-popover-example-position">
      <PageHead title={lang.translate('package.popover.example.position.title')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {lang.translate('package.popover.example.position.description')}
        </p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <div className="align_vertical">
          <BTBPopover showPosition={"left"} trigger={(<button>Left</button>)}>
          Example: Left
          </BTBPopover>
        </div>
        <div className="align_vertical">
          <BTBPopover showPosition={"top"} trigger={(<button>Top</button>)}>
          Example: Top
          </BTBPopover>
        </div>
        <div className="align_vertical">
          <BTBPopover showPosition={"bottom"} trigger={(<button>Bottom</button>)}>
          Example: Bottom
          </BTBPopover>
        </div>
        <div className="align_vertical">
          <BTBPopover showPosition={"right"} trigger={(<button>Right</button>)}>
          EXample: Right
          </BTBPopover>
        </div>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">
          {preRender}
        </pre>
      </Section>
    </Page>
  );
});

export default ExamplePosition;
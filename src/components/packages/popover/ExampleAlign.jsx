import React, {useState} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBList from '@blacktoolbox/react-list';
import BTBPopover from '@blacktoolbox/react-popover';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

import packageInfo from './packageInfo.js';

import { lang } from '@src/plugins/btblab-prototype-languages.js';

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
`<BTBPopover showAlign={"begin"} trigger={(<button>Begin</button>)}>
        Example: Begin
</BTBPopover>

<BTBPopover showAlign={"center"} trigger={(<button>Center</button>)}>
        Example: Center
</BTBPopover>

<BTBPopover showAlign={"end"} trigger={(<button>End</button>)}>
        Example: End
</BTBPopover>`;

const ExampleAlign = enhance(() => {
  const env = {
    state_showPopover1 : useActiveState(true),
    state_showPopover2 : useActiveState(true)
  };

  return (
    <Page className="btb-pkg-popover-example-align">
      <PageHead title={lang.translate('package.popover.example.align.title')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {lang.translate('package.popover.example.align.description')}
        </p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBPopover showAlign={"begin"} trigger={(<button>Begin</button>)}>
          Example: Begin
        </BTBPopover>
        <BTBPopover showAlign={"center"} trigger={(<button>Center</button>)}>
          Example: Center
        </BTBPopover>
        <BTBPopover showAlign={"end"} trigger={(<button>End</button>)}>
          Example: End
        </BTBPopover>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">
          {preRender}
        </pre>
      </Section>
    </Page>
  );
});

function useActiveState (defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    showState : value,
    onToggle  : (data) => {
      setState(data);
    }
  };
}

export default ExampleAlign;
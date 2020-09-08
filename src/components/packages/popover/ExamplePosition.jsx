import React from 'react';
import { useSelector } from 'react-redux';
import BTBPopover from '@blacktoolbox/react-popover';
import { Button as BTBButton } from '@blacktoolbox/react-button';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBPopover showPosition={"left"} trigger={(<button>Left</button>)}>
        Example: Left
</BTBPopover>

<BTBPopover showPosition={"top"} trigger={(<button>Top</button>)}>
        Example: Top
</BTBPopover>

<BTBPopover showPosition={"bottom"} trigger={(<button>Bottom</button>)}>
        Example: Bottom
</BTBPopover>

<BTBPopover showPosition={"right"} trigger={(<button>Right</button>)}>
        Example: Right
</BTBPopover>`;

const ExamplePosition = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-popover-example-position">
      <PageHead
        title={lang.translate('package.popover.example.position.title')}
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
        <p>{lang.translate('package.popover.example.position.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <div className="align_vertical">
          <BTBPopover showPosition={'left'} trigger={<BTBButton>Left</BTBButton>}>
            Example: Left
          </BTBPopover>
        </div>
        <div className="align_vertical">
          <BTBPopover showPosition={'top'} trigger={<BTBButton>Top</BTBButton>}>
            Example: Top
          </BTBPopover>
        </div>
        <div className="align_vertical">
          <BTBPopover showPosition={'bottom'} trigger={<BTBButton>Bottom</BTBButton>}>
            Example: Bottom
          </BTBPopover>
        </div>
        <div className="align_vertical">
          <BTBPopover showPosition={'right'} trigger={<BTBButton>Right</BTBButton>}>
            Example: Right
          </BTBPopover>
        </div>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
    </Page>
  );
};

export default ExamplePosition;

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import BTBPopover from '@blacktoolbox/react-popover';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const enhance = compose(
  connect((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  })
);

const preRender = `<BTBPopover showPosition={"top"} showAlign={"begin"} trigger={(<button>Begin</button>)}>
        Example: Begin
</BTBPopover>

<BTBPopover showPosition={"top"} showAlign={"center"} trigger={(<button>Center</button>)}>
        Example: Center
</BTBPopover>

<BTBPopover showPosition={"top"} showAlign={"end"} trigger={(<button>End</button>)}>
        Example: End
</BTBPopover>

<BTBPopover showPosition={"left"} showAlign={"begin"} trigger={(<button>Begin</button>)}>
        Example: Begin
</BTBPopover>

<BTBPopover showPosition={"left"} showAlign={"center"} trigger={(<button>Center</button>)}>
        Example: Center
</BTBPopover>

<BTBPopover showPosition={"left"} showAlign={"end"} trigger={(<button>End</button>)}>
        Example: End
</BTBPopover>`;

const ExampleAlign = enhance(() => {
  return (
    <Page className="btb-pkg-popover-example-align">
      <PageHead
        title={lang.translate('package.popover.example.align.title')}
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
        <p>{lang.translate('package.popover.example.align.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <Block title={lang.translate('package.popover.example.vertical')}>
          <div className="align_vertical">
            <BTBPopover showPosition={'top'} showAlign={'begin'} trigger={<button>Begin</button>}>
              Example: Begin
            </BTBPopover>
          </div>
          <div className="align_vertical">
            <BTBPopover showPosition={'top'} showAlign={'center'} trigger={<button>Center</button>}>
              Example: Center
            </BTBPopover>
          </div>
          <div className="align_vertical">
            <BTBPopover showPosition={'top'} showAlign={'end'} trigger={<button>End</button>}>
              Example: End
            </BTBPopover>
          </div>
        </Block>
        <Block title={lang.translate('package.popover.example.horizontal')}>
          <div className="align_horizontal">
            <BTBPopover showPosition={'left'} showAlign={'begin'} trigger={<button>Begin</button>}>
              Example: Begin
            </BTBPopover>
          </div>
          <div className="align_horizontal">
            <BTBPopover showPosition={'left'} showAlign={'center'} trigger={<button>Center</button>}>
              Example: Center
            </BTBPopover>
          </div>
          <div className="align_horizontal">
            <BTBPopover showPosition={'left'} showAlign={'end'} trigger={<button>End</button>}>
              Example: End
            </BTBPopover>
          </div>
        </Block>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
      </Section>
    </Page>
  );
});

export default ExampleAlign;

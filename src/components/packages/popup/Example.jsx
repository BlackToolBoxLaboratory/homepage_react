import React from 'react';
import { useSelector } from 'react-redux';
import { Button as BTBButton } from '@blacktoolbox/react-button';
import { usePopup } from '@blacktoolbox/react-popup';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBPopup/>
        { children }
</BTBPopup>

<BTBButton
      onClick=" function(){} "
>
  Example
</BTBButton>`;

const preEvent = `const _clickOpen = () => {
        popup.show({
                content: (
                        <BTBButton onClick={_clickClose}>Click to Close</BTBButton>
                ),
                persistent: true
        });
};

const _clickClose = () => {
        popup.hide();
};`;

const Basic = () => {
  const popup = usePopup();
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });

  const _clickOpen = () => {
    popup.show({
      content: (
        <BTBButton onClick={_clickClose}>Click to Close</BTBButton>
      ),
      persistent: true
    });
  };
  const _clickClose = () => {
    popup.hide();
  };
  return (
    <Page id="btb-pkg-popover-basic">
      <PageHead
        title={lang.translate('package.popup.example.basic.title')}
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
        <p>{lang.translate(packageInfo.description)}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBButton onClick={_clickOpen}>Click to open</BTBButton>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title={lang.translate('package.message.example.message.event')}>
          <pre className="page_pre">{preEvent}</pre>
        </Block>
      </Section>
    </Page>
  );
};

export default Basic;

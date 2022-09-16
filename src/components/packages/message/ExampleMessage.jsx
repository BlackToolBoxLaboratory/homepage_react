import React from 'react';
import { useSelector } from 'react-redux';
import { Button as BTBButton, ButtonGroup as BTBButtonGroup } from '@blacktoolbox/react-button';
import { useMessage } from '@blacktoolbox/react-message';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<MessageProvider 
        closeable=" Boolean "
>
        { children }
</MessageProvider>

<BTBButton
        onClick=" function(){} "
>
  Example
</BTBButton>

<BTBButtonGroup onEntryClick={_clickGroupButton}>
        <span id="blue"> Blue </span>
        <span id="grey"> Grey </span>
        <span id="green"> Green </span>
        <span id="red"> Red </span>
        <span id="yellow"> Yellow </span>
        <span id="light"> Light </span>
        <span id="dark"> Dark </span>
</BTBButtonGroup>`;

const preEvent = `const _clickMessage = () => {
        message.send({
                type: 'normal',
                context: 'normal',
        });
};

const _clickGroup = (id, content) => {
        const { props } = content;
        message.send({
                type: props.id,
                context: props.id,
        });
};`;

const ExampleMessage = () => {
  const message = useMessage();

  const _clickMessage = () => {
    message.send({
      type: 'normal',
      context: 'normal',
    });
  };

  const _clickGroup = (id, content) => {
    const { props } = content;
    message.send({
      type: props.id,
      context: props.children,
    });
  };

  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-pkg-message-example-message">
      <PageHead
        title={lang.translate('package.message.example.message.title')}
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
        <p>{lang.translate('package.message.example.message.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBButton
          onClick={() => {
            _clickMessage('normal');
          }}
        >
          Normal
        </BTBButton>
        <Block title={lang.translate('package.message.example.message.style')}>
          <BTBButtonGroup onEntryClick={_clickGroup}>
            <span id="blue">Blue</span>
            <span id="grey">Grey</span>
            <span id="green">Green</span>
            <span id="red">Red</span>
            <span id="yellow">Yellow</span>
            <span id="light">Light</span>
            <span id="dark">Dark</span>
          </BTBButtonGroup>
        </Block>
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

export default ExampleMessage;

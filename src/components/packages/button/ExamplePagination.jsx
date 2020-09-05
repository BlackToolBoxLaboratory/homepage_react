import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button as BTBButton, ButtonGroup as BTBButtonGroup } from '@blacktoolbox/react-button';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout';
import packageInfo from './packageInfo.js';

const preRender = `<BTBButton
        className="pagination_tools"
        prependNode="<< Prev"
        appendNode="Next >>"
        onPrependClick={statePage.onPrevClick}
        onAppendClick={statePage.onNextClick}
>
        <BTBButtonGroup
                className="pagination_pages"
                buttonList={buttonList}
                activeID={statePage.activeID}
                onEntryClick={statePage.onEntryClick}
        />
</BTBButton>`;

const preUseState = `statePage = usePageState('list_0');

const usePageState = (dafaultPageID) => {
        const [activeID, updatePageID] = useState(dafaultPageID);
        return {
                activeID,
                onEntryClick: (id, content) => {
                        updatePageID(id);
                },
                onPrevClick: (event) => {
                        const minPage = 0;
                        const [type, index] = activeID.split('_');
                        const page = Math.max(parseInt(index, 10) - 1, minPage);
                        updatePageID(\`\${type}_\${page}\`);
                },
                onNextClick: (event) => {
                        const maxPage = 9;
                        const [type, index] = activeID.split('_');
                        const page = Math.min(parseInt(index, 10) + 1, maxPage);
                        updatePageID(\`\${type}_\${page}\`);
                },
        };
};`;

const preStyle = `.pagination_tools {
        .button_item{
                &.itme-core {
                        border-left: 1px solid #808080;
                        border-right: 1px solid #808080;
                        padding: 0;
                }
        }
}
.pagination_pages {
        border: none;
        border-radius: unset;
        .group_button {
                &:first-child,
                &:last-child {
                        padding: 0.25rem;
                }
                &.button-active {
                        background-color: #cdcdcd;
                }
        }
}`;

const ExamplePagination = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  const buttonList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const statePage = usePageState('list_0');

  return (
    <Page id="btb-pkg-button-example-pagination">
      <PageHead
        title={lang.translate('package.button.example.pagination.title')}
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
        <p>{lang.translate('package.button.example.pagination.description')}</p>
      </Section>
      <Section head={lang.translate('package.section.example')}>
        <BTBButton
          className="pagination_tools"
          prependNode="<< Prev"
          appendNode="Next >>"
          onPrependClick={statePage.onPrevClick}
          onAppendClick={statePage.onNextClick}
        >
          <BTBButtonGroup
            className="pagination_pages"
            buttonList={buttonList}
            activeID={statePage.activeID}
            onEntryClick={statePage.onEntryClick}
          />
        </BTBButton>
      </Section>
      <Section head={lang.translate('package.section.sourceCode')}>
        <pre className="page_pre">{preRender}</pre>
        <Block title="useState">
          <pre className="page_pre">{preUseState}</pre>
        </Block>
        <Block title="style: LESS">
          <pre className="page_pre">{preStyle}</pre>
        </Block>
      </Section>
    </Page>
  );
};

const usePageState = (dafaultPageID) => {
  const [activeID, updatePageID] = useState(dafaultPageID);
  return {
    activeID,
    onEntryClick: (id, content) => {
      /* eslint-disable no-console */
      console.log('page', id, content);
      /* eslint-rnable no-console */
      updatePageID(id);
    },
    onPrevClick: (event) => {
      /* eslint-disable no-console */
      console.log('prev', event);
      /* eslint-rnable no-console */
      const minPage = 0;
      const [type, index] = activeID.split('_');
      const page = Math.max(parseInt(index, 10) - 1, minPage);
      updatePageID(`${type}_${page}`);
    },
    onNextClick: (event) => {
      /* eslint-disable no-console */
      console.log('next', event);
      /* eslint-rnable no-console */
      const maxPage = 9;
      const [type, index] = activeID.split('_');
      const page = Math.min(parseInt(index, 10) + 1, maxPage);
      updatePageID(`${type}_${page}`);
    },
  };
};

export default ExamplePagination;

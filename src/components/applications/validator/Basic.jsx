import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import { Page, PageHead, Section } from '@src/modules/pageLayout';

import packageInfo from './packageInfo.js';

const preInstall = `$ npm install --save @blacktoolbox/prototype-validator`;

const preInitializaer = `import Validator from '@blacktoolbox/prototype-validator';

const validator = new Validator();

const rules = {
        'event' : [
                {
                        rule    : 'strLength|min:2',
                        message : 'Username length required 2 at least.'
                }
        ],
}

validator.init(rules);

validator.stats(); // Show all status
validator.stats('event'); // Show event's status only

validator.reset(); // clean all status of event to null

validator.validate('event', value) // to check the value by the rule of event
`;

const preResult = `validator.stats('event') = {
        message = '';
        status = null;
}`;

const Validator = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  return (
    <Page id="btb-app-validator">
      <PageHead
        title={lang.translate('application.validator.name')}
        clickBtn={openLink}
        linkList={packageInfo.linkList}
      />
      <Section
        head={
          <>
            {`${lang.translate('application.version_colon')}${packageInfo.version}`}
            <br />
            {`${lang.translate('application.release_colon')}${packageInfo.updated}`}
          </>
        }
      >
        <p>{lang.translate(packageInfo.description)}</p>
      </Section>
      <Section head={lang.translate('application.section.installation')}>
        <p>
          {lang.translate('application.validator.installation.description')}
          <a
            className="inline-link"
            href="https://blacktoolboxlaboratory.github.io/javascript/#/packages/validator"
            target="_blank"
            rel="noreferrer"
          >
            <FAI icon={['fas', 'external-link-alt']} fixedWidth />
            <span>{lang.translate('application.validator.installation.linkName')}</span>
          </a>
        </p>
        <pre className="page_pre">{preInstall}</pre>
      </Section>
      <Section head={lang.translate('application.section.initializer')}>
        <p>{lang.translate('application.validator.initializer')}</p>
        <pre className="page_pre">{preInitializaer}</pre>
      </Section>
      <Section head={lang.translate('application.section.result')}>
        <p>{lang.translate('application.validator.result')}</p>
        <pre className="page_pre">{preResult}</pre>
      </Section>
    </Page>
  );
};

export default Validator;

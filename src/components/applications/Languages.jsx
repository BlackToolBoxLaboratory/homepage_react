import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

import { Page, PageHead, Section, Block } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

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

const packageInfo = {
  'version'     : '1.1.1',
  'updated'     : '2020-06-20',
  'description' : 'application.languages.description',
  'linkList'    : [
    { 
      'id'  : 'github', 
      'fa'  : ['fab', 'github'], 
      'url' : 'https://github.com/BlackToolBoxLaboratory/prototype-languages' 
    }, { 
      'id'  : 'npm', 
      'fa'  : ['fab', 'npm'], 
      'url' : 'https://www.npmjs.com/package/@blacktoolbox/prototype-languages'
    }
  ]
};

const preInstall = 
`$ npm install --save @blacktoolbox/prototype-languages`;

const preInitializaer = 
`import { initializer } from '@blacktoolbox/prototype-languages';

import en from '@src/assets/languages/en.js';
import zh from '@src/assets/languages/zh.js';

initializer([
        { index : 'en', label : 'Eglish', dictionary : en },
        { index : 'zh', label : '繁體中文', dictionary : zh }
]);`;

const preImplement = 
`import Language from '@blacktoolbox/prototype-languages';

const lang = new Language()`;

const Languages = enhance(() => {
  return (
    <Page className="btb-app-languages">
      <PageHead title={lang.translate('application.languages.name')} clickBtn={openLink} linkList={packageInfo.linkList}/>
      <Section head={(
        <>
          {`${lang.translate('package.version_colon')}${packageInfo.version}`}<br/>
          {`${lang.translate('package.release_colon')}${packageInfo.updated}`}
        </>
      )}>
        <p>
          {lang.translate(packageInfo.description)}
        </p>
      </Section>
      <Section head={lang.translate('application.section.installation')}>
        <p>
          {lang.translate('application.languages.installation.description')}
          <a className="inline-link" href="https://blacktoolboxlaboratory.github.io/javascript/#/packages/languages" target="_blank">
            <FAI icon={['fas', 'external-link-alt']} fixedWidth />
            <span>{lang.translate('application.languages.installation.linkName')}</span>
          </a>
        </p>
        <pre className="page_pre">
          {preInstall}
        </pre>
      </Section>
      <Section head={lang.translate('application.section.initializer')}>
        <p>{lang.translate('application.languages.initializer')}</p>
        <pre className="page_pre">
          {preInitializaer}
        </pre>
      </Section>
      <Section head={lang.translate('application.section.impletement')}>
        <p>{lang.translate('application.languages.impletement')}</p>
        <pre className="page_pre">
          {preImplement}
        </pre>
      </Section>
      <Section head={lang.translate('application.section.trigger')}>
        <p>{lang.translate('application.languages.trigger.description')}</p>
        <Block title="Distpatch">
          <p>{lang.translate('application.languages.trigger.dispatch')}</p>
        </Block>
        <Block title="Key">
          <p>{lang.translate('application.languages.trigger.key')}</p>
        </Block>
      </Section>
    </Page>
  );
});

export default Languages;
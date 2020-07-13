import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { compose } from 'recompose';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import PACKAGE from '@src/assets/definitions/packageObj.js';
import logoPath from '@src/assets/images/BTB_React.png';

import { Page, Section, Divider } from '@src/modules/pageLayout/index.js';
import PackageCard from './PackageCard.jsx';

const enhance = compose(
  connect(
    (state) => {
      return {
        'languageSetting'  : state.language.languageSetting
      };
    }
  ),
  withRouter
);

const About = enhance((props) => {
  function _redirectRoute(routename) {
    props.history.push(routename);
  }

  return (
    <Page className="btb-about">
      <Section className="about_title grid-row direction-column align-items-center">
        <img className="title_image" src={logoPath} alt="BTB_React" />
        <h1 className="title_main hidden-down-md">Black Tool Box Laboratory</h1>
        <h1 className="title_main hidden-up-md">BTB Lab.</h1>
        <p className="title_sub">With React</p>
      </Section>
      <Section>
        <span>{lang.translate('about.description')}</span>
      </Section>
      <Section className="grid-row justify-content-center">
        <a href="mailto://vannoel0628@gmail.com" target="_blank">
          <FAI icon={['far', 'envelope']} fixedWidth />
          <span>vannoel0628@gmail.com</span>
        </a>
      </Section>
      <Divider />
      <Section className="grid-row justify-content-center">
        <span>{lang.translate('about.donate.1')}</span>
        <a href="https://www.paypal.me/vannoel0628" target="_blank">
          <FAI icon={['fab', 'paypal']} fixedWidth />
          <span>{lang.translate('about.donate.2')}</span>
        </a>
        <span>{lang.translate('about.donate.3')}</span>
      </Section>
      <Divider />
      {
        Object.keys(PACKAGE).map((entry) => {
          return (
            <div key={entry}>
              {
                (entry !== 'list')?
                  (
                    <Divider />
                  ) : []
              }
              <Section className="about_package">
                <PackageCard info={PACKAGE[entry]} redirectRoute={_redirectRoute}/>
              </Section>
            </div>
          );
        })
      }
    </Page>
  );
});

export default About;
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import PACKAGE from '@src/assets/definitions/packageObj.js';
import logoPath from '@src/assets/images/BTB_React.png';

import { Page, Section, Divider } from '@src/modules/pageLayout';
import PackageCard from './PackageCard.jsx';

const About = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  const history = useHistory();
  function _redirectRoute(routename) {
    history.push(routename);
  }

  return (
    <Page id="btb-about">
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
        <a href="mailto:vannoel0628@gmail.com" target="_blank" rel="noreferrer">
          <FAI icon={['far', 'envelope']} fixedWidth />
          <span>vannoel0628@gmail.com</span>
        </a>
      </Section>
      <Divider />
      {Object.keys(PACKAGE).map((entry) => {
        return (
          <div key={entry}>
            {entry !== 'list' ? <Divider /> : []}
            <Section className="about_package">
              <PackageCard info={PACKAGE[entry]} redirectRoute={_redirectRoute} />
            </Section>
          </div>
        );
      })}
    </Page>
  );
};

export default About;

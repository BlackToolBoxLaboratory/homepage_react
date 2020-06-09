import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

import { Page, Section, Divider } from '@src/modules/pageLayout/index.js';
import BTBPackage from './package.jsx';

import hashHistory from '@src/history.js';
import PACKAGE from '@src/assets/definitions/packageObj.js';

import logoPath from '@src/assets/images/BTB_React.png';

const About = () => {
  return (
    <Page className="btb-about">
      <Section className="about_title grid-row direction-column align-items-center">
        <img className="title_image" src={logoPath} alt="BTB_React" />
        <h1 className="title_main hidden-down-md">Black Tool Box Laboratory</h1>
        <h1 className="title_main hidden-up-md">BTB Lab.</h1>
        <p className="title_sub">With React</p>
      </Section>
      <Section>
        <span>
          React is the first framework of javascript when I join to the Frontend develipment club. Before that jQuery of curse is my first using when I am a software engineer. Here I aim to develop packages made with React. They are designed with basic logic for high degrees of freedom of customization and low dependency. While using, if you find some questions, bugs or issues. Or having some great ideas. Please feel free to let me know.
        </span>
      </Section>
      <Section className="grid-row justify-content-center">
        <a href="mailto://vannoel0628@gmail.com" target="_blank">
          <FAI icon={['far', 'envelope']} fixedWidth />
          <span>vannoel0628@gmail.com</span>
        </a>
      </Section>
      <Divider />
      <Section className="grid-row justify-content-center">
        <span>If you like all the works in BTB Lab. Please </span>
        <a href="https://www.paypal.me/vannoel0628" target="_blank">
          <FAI icon={['fab', 'paypal']} fixedWidth />
          <span>buy me a coffee</span>
        </a>
        <span>. </span>
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
                <BTBPackage info={PACKAGE[entry]} redirectRoute={redirectRoute}/>
              </Section>
            </div>
          );
        })
      }
    </Page>
  );
};

function redirectRoute(routename) {
  hashHistory.push(routename);
}

export default About;
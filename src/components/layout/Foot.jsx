import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const Aside = (props) => {
  return (
    <div className={['btb-layout-foot', props.className].join(' ')}>
      <div className="foot_navbar">
        <a
          className="navbar_linkBtn linkBtn-paypal"
          href="https://www.paypal.me/vannoel0628"
          target="_blank"
          rel="noreferrer"
        >
          <FAI icon={['fab', 'paypal']} fixedWidth />
        </a>
        <a
          className="navbar_linkBtn linkBtn-github"
          href="https://github.com/BlackToolBoxLaboratory"
          target="_blank"
          rel="noreferrer"
        >
          <FAI icon={['fab', 'github']} fixedWidth />
        </a>
        <a
          className="navbar_linkBtn linkBtn-npm"
          href="https://www.npmjs.com/org/blacktoolbox"
          target="_blank"
          rel="noreferrer"
        >
          <FAI icon={['fab', 'npm']} fixedWidth />
        </a>
        <a
          className="navbar_linkBtn linkBtn-linkedin"
          href="https://www.linkedin.com/company/black-tool-box-laboratory/"
          target="_blank"
          rel="noreferrer"
        >
          <FAI icon={['fab', 'linkedin']} fixedWidth />
        </a>
        <a
          className="navbar_linkBtn linkBtn-wordpress"
          href="https://vannoel0628.wordpress.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FAI icon={['fab', 'wordpress']} fixedWidth />
        </a>
        <a
          className="navbar_linkBtn linkBtn-email"
          href="mailto://vannoel0628@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FAI icon={['far', 'envelope']} fixedWidth />
        </a>
      </div>
      <footer className="foot_copyright">Copyright © Black Tool Box Laboratory. All rights reserved.</footer>
    </div>
  );
};

export default Aside;

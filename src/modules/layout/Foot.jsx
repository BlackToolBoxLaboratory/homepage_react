import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const Foot = (props) => {
  const { className, ...footProps } = props;
  return (
    <div className={classnames('module-layout-foot', className)} {...footProps}>
      <div className="foot_navbar">
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
          className="navbar_linkBtn linkBtn-email"
          href="mailto:vannoel@cogman.org"
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

export default Foot;

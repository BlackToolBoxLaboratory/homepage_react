import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const Package = (props) => {
  function _redirectRoute() {
    props.redirectRoute(props.info.routename);
  }
  
  return (
    <div className={['btb-about-package grid-row', props.className].join(' ')}>
      <div className="grid-col-md-3">
        <div className="package_title">{ props.info.name }</div>
        <FAI className="package_link" icon={['fas', 'link']} fixedWidth onClick={_redirectRoute}/>
      </div>
      <div className="grid-col-md">
        <div className="package_description">{ props.info.description }</div>
        <div className="package_version">Version { props.info.version }</div>
        <div className="package_updated">Updated: { props.info.updated }</div>
      </div>
    </div>
  );
};

export default Package;
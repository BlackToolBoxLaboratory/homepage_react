import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import { compose } from 'recompose';

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

const Package = enhance((props) => {
  function _redirectRoute() {
    props.redirectRoute(props.info.routename);
  }
  
  return (
    <div className={['btb-about-package grid-row', props.className].join(' ')}>
      <div className="grid-col-md-3">
        <div className="package_title">{ lang.translate(props.info.name) }</div>
        <FAI className="package_link" icon={['fas', 'link']} fixedWidth onClick={_redirectRoute}/>
      </div>
      <div className="grid-col-md">
        <div className="package_description">{ lang.translate(props.info.description) }</div>
        <div className="package_version">{`${lang.translate('package.version_colon')}${props.info.version}`}</div>
        <div className="package_updated">{`${lang.translate('package.release_colon')}${props.info.updated}`}</div>
      </div>
    </div>
  );
});

export default Package;
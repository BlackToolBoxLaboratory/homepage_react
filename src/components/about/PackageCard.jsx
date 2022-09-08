import React from 'react';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

import { lang } from '@src/plugins/btblab-prototype-languages.js';

const PackageCard = (props) => {
  function _redirectRoute() {
    props.redirectRoute(props.info.routename);
  }

  return (
    <div className={['btb-about-package-card', 'grid-row', props.className].join(' ')}>
      <div className="grid-col-md-3">
        <div className="card_title">{lang.translate(props.info.name)}</div>
        <FAI className="card_link" icon={['fas', 'link']} fixedWidth onClick={_redirectRoute} />
      </div>
      <div className="grid-col-md">
        <div className="card_description">{lang.translate(props.info.description)}</div>
        <div className="card_version">{`${lang.translate('package.version_colon')}${props.info.version}`}</div>
        <div className="card_updated">{`${lang.translate('package.release_colon')}${props.info.updated}`}</div>
      </div>
    </div>
  );
};

export default PackageCard;

import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const LoadingDiv = (props) => {
  const { className, ...loadingDevProps } = props;
  return (
    <div className={classnames('module-loading', className)} {...loadingDevProps}>
      <FAI className="loading_spinner" icon={['fas', 'spinner']} fixedWidth spin pulse />
    </div>
  );
};

export default LoadingDiv;

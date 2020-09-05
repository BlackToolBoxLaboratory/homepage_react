import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const Divider = (props) => {
  const { className, dividerProps } = props;
  return (
    <div className={classnames('module-divider', className)} {...dividerProps}>
      <div className="divider_line"></div>
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <FAI className="divider_icon" icon={['fas', 'tools']} fixedWidth />
      <div className="divider_line"></div>
    </div>
  );
};

export default Divider;

import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const PageHead = (props) => {
  const { id, title = '', linkList, clickBtn = () => {}, ...pageHeadProps } = props;
  return (
    <div id={id} className="module-page-head" {...pageHeadProps}>
      <div className="head_title">{title || ''}</div>
      {(linkList || []).map((btn) => {
        return (
          <div
            className={classnames('head_btn', `btn-${btn.id}`)}
            key={btn.id}
            onClick={() => {
              clickBtn(btn);
            }}
          >
            <FAI icon={btn.fa} fixedWidth />
          </div>
        );
      })}
    </div>
  );
};

export default PageHead;

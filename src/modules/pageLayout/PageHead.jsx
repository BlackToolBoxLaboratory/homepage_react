import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

const PageHead = (props) => {
  function _clickBtn(event) {
    if (props.clickBtn) {
      props.clickBtn(event);
    }
  }

  return (
    <div className="module-page-head">
      <div className="head_title">{props.title || ''}</div>
      {(props.linkList || []).map((btn) => {
        return (
          <div
            className={classnames('head_btn', `btn-${btn.id}`)}
            key={btn.id}
            onClick={() => {
              _clickBtn(btn);
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

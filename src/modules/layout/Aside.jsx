import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router';
import BTBList from '@blacktoolbox/react-list';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import MENU from '@src/assets/definitions/menuList.js';
import { ROUTE } from '@src/assets/definitions/constants';

const Aside = (props) => {
  const history = useHistory();
  const { className, clickEntry = () => {}, ...asideProps } = props;
  const env = {
    state_activeID: useActiveState(),
  };

  useEffect(() => {
    env.state_activeID.onChange(_getRouteID());
  });

  function _clickEntry(event) {
    if (event.id === 'VERSION_1') {
      window.open('https://blacktoolboxlaboratory.github.io/react/v1/');
    } else {
      if (ROUTE[event.id] !== history.location.pathname) {
        clickEntry();
      }
    }
  }

  function _getRouteID() {
    let result = Object.keys(ROUTE).find((key) => {
      return ROUTE[key] === history.location.pathname;
    });
    return result;
  }

  return (
    <div className={classnames('module-layout-aside', className)} {...asideProps}>
      <BTBList
        className="aside_menu"
        dataList={translateMenu()}
        activeID={env.state_activeID.value}
        collapseEnable
        onEntryClick={_clickEntry}
      />
    </div>
  );
};

function useActiveState(defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    value,
    onChange: (data) => {
      setState(data);
    },
  };
}

function translateMenu() {
  let result = MENU.map((entry) => {
    return translateMenuRecursive(entry);
  });
  return result;
}
function translateMenuRecursive(obj) {
  let result = {
    ...obj,
    title: obj.langIndex ? lang.translate(obj.langIndex) : obj.title,
  };
  if (obj.children) {
    result.children = obj.children.map((entry) => {
      return translateMenuRecursive(entry);
    });
  }
  return result;
}

export default Aside;

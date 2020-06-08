import React, { useState } from 'react';

import BTBList from '@blacktoolbox/react-list';

import hashHistory from '@src/history.js';
import MENU from '@src/assets/definitions/menuList.js';
import ROUTE from '@src/assets/definitions/routeMap.js';

const Aside = (props) => {
  const env = {
    state_activeID : useActiveState()
  };

  useState(() => {
    env.state_activeID.onChange(getRouteID());
  }, []);

  function _clickEntry (event) {
    if (event.id === 'VERSION_1')
    {
      window.open('https://blacktoolboxlaboratory.github.io/react/v1/');
    } else {
      if (ROUTE[event.id] !== hashHistory.location.pathname)
      {
        hashHistory.push(ROUTE[event.id]);
        env.state_activeID.onChange(event.id);
        props.clickEntry();
      }
    }
  }

  return (
    <div className={["btb-layout-aside", props.className].join(' ')}>
      <BTBList className="aside_menu" dataList={MENU} activeID={env.state_activeID.value} collapseEnable onEntryClick={_clickEntry}/>
    </div>
  );
};

function getRouteID () {
  let result =  Object.keys(ROUTE).find((key) => {
    return (ROUTE[key] === hashHistory.location.pathname);
  });
  return result;
}

function useActiveState (defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    value,
    onChange : (data) => {
      setState(data);
    }
  };
}

export default Aside;
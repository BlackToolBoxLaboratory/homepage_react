import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";

import BTBList from '@blacktoolbox/react-list';

import MENU from '@src/assets/definitions/menuList.js';
import ROUTE from '@src/assets/definitions/routeMap.js';

const Aside = (props) => {
  const env = {
    state_activeID : useActiveState()
  };

  useEffect(() => {
    env.state_activeID.onChange(_getRouteID());
  });

  function _clickEntry (event) {
    if (event.id === 'VERSION_1')
    {
      window.open('https://blacktoolboxlaboratory.github.io/react/v1/');
    } else {
      if (ROUTE[event.id] !== props.history.location.pathname)
      {
        props.history.push(ROUTE[event.id]);
        env.state_activeID.onChange(event.id);
        props.clickEntry();
      }
    }
  }

  function _getRouteID () {
    let result =  Object.keys(ROUTE).find((key) => {
      return (ROUTE[key] === props.history.location.pathname);
    });
    return result;
  }

  return (
    <div className={["btb-layout-aside", props.className].join(' ')}>
      <BTBList className="aside_menu" dataList={MENU} activeID={env.state_activeID.value} collapseEnable onEntryClick={_clickEntry}/>
    </div>
  );
};

function useActiveState (defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    value,
    onChange : (data) => {
      setState(data);
    }
  };
}

export default withRouter(Aside);
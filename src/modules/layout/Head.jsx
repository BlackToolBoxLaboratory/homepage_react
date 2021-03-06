import React, { useState } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import BTBList from '@blacktoolbox/react-list';
import BTBPopover from '@blacktoolbox/react-popover';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { ROUTE } from '@src/assets/definitions/constants';
import { langAction } from '@src/stores/langStore.js';

const Head = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { toggleMenu, className, ...headProps } = props;
  const env = {
    state_showPopover: useActiveState(false),
  };

  function _openLab() {
    window.open('https://blacktoolboxlaboratory.github.io/');
  }

  function _redirectHome() {
    history.push(ROUTE['ABOUT']);
  }

  function _switchLang(event) {
    dispatch(langAction.setLang(event.index));
    lang.set(event.index);
    env.state_showPopover.onToggle(false);
  }

  function _getLangList() {
    let langList = lang.menu().map((entry) => {
      return {
        ...entry,
        id: entry.index,
        title: entry.label,
      };
    });
    return langList;
  }

  return (
    <header className={classnames('module-layout-head', className)} {...headProps}>
      <div className="head_logo">
        <div className="logo_content">BR</div>
      </div>
      <div className="head_title">
        <div className="title_main hidden-down-md">Black Tool Box Laboratory</div>
        <div className="title_main hidden-up-md">BTB</div>
        <div className="title_sub">For React</div>
      </div>
      <div className="head_item item-org">
        <FAI className="item_button" icon={['fas', 'building']} fixedWidth onClick={_openLab} />
      </div>
      <div className="head_item item-home">
        <FAI className="item_button" icon={['fas', 'home']} fixedWidth onClick={_redirectHome} />
      </div>
      <div className="head_item item-lang">
        <BTBPopover
          className="head_langPopover"
          {...env.state_showPopover}
          // showPosition={'bottom'}
          // showAlign={'center'}
          withArrow={true}
          trigger={<FAI className="item_button" icon={['fas', 'globe']} fixedWidth />}
        >
          <BTBList dataList={_getLangList()} activeID={lang.get().index} onEntryClick={_switchLang} />
        </BTBPopover>
      </div>
      <div className="head_item item-menu">
        <FAI className="item_button" icon={['fas', 'bars']} fixedWidth onClick={toggleMenu} />
      </div>
    </header>
  );
};

function useActiveState(defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    showState: value,
    onToggle: (data) => {
      setState(data);
    },
  };
}

export default Head;

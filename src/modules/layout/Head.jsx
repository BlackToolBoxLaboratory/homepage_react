import React, { useState } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';
import BTBList from '@blacktoolbox/react-list';
import BTBPopover from '@blacktoolbox/react-popover';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { ROUTE } from '@src/assets/definitions/constants';
import { langAction } from '@src/stores/langStore.js';

const Head = (props) => {
  const dispatch = useDispatch();
  const { toggleMenu, className, ...headProps } = props;
  const env = {
    state_showPopover: useActiveState(false),
  };

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
      <a
        className="head_item item-org"
        href="https://blacktoolboxlaboratory.github.io/"
        target="_blank"
        rel="noreferrer"
      >
        <FAI className="item_button" icon={['fas', 'building']} fixedWidth />
      </a>
      <a
        className="head_item item-home"
        href={`/react/v2/#${ROUTE['ABOUT']}`}
      >
        <FAI className="item_button" icon={['fas', 'home']} fixedWidth />
      </a>
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

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { GRID } from '@src/assets/definitions/constants';
import { langAction } from '@src/stores/langStore.js';

import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Aside from './Aside.jsx';

const Layout = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  const { className, children, ...layoutProps } = props;
  const env = {
    state_hiddenMenu: useMenuState(window.innerWidth < GRID.MD),
  };

  useEffect(() => {
    _initialLang();
    return function cleanup() {
      window.removeEventListener('click', _clickListener);
    };
  }, []);

  useEffect(() => {
    window.removeEventListener('click', _clickListener, false);
    if (!env.state_hiddenMenu.value) {
      window.addEventListener('click', _clickListener, false);
    }
    return function cleanup() {
      window.removeEventListener('click', _clickListener, false);
    };
  }, [env.state_hiddenMenu.value]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.location.pathname]);

  const _initialLang = () => {
    if (!state.languageSetting.length) {
      const userLang = navigator.language || navigator.userLanguage;
      const result = lang.menu().find((item) => {
        return userLang.search(new RegExp(item.index, 'i')) >= 0;
      });
      lang.set(result.index);
      dispatch(langAction.setLang(result.index));
    } else {
      lang.set(state.languageSetting);
    }
  };

  function _clickEntry() {
    if (window.innerWidth < GRID.MD) {
      env.state_hiddenMenu.onToggle(true);
    }
  }

  function _clickListener() {
    _clickEntry();
  }

  function _toggleMenu() {
    env.state_hiddenMenu.onToggle();
  }

  return (
    <div className={classnames('module-layout', className)} {...layoutProps}>
      <Head className="layout_head" toggleMenu={_toggleMenu} />
      <div className="layout_content">{children}</div>
      <Foot className="layout_foot" />
      <Aside
        className={classnames('layout_aside', { 'aside-hidden': env.state_hiddenMenu.value })}
        clickEntry={_clickEntry}
      />
    </div>
  );
};

function useMenuState(defaultSate) {
  const [value, setState] = useState(defaultSate);
  return {
    value,
    onToggle: (bol) => {
      setState(typeof bol != 'undefined' ? bol : !value);
    },
  };
}

export default Layout;

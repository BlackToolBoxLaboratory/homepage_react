import Dispatcher from 'assets/dispatcher.js';

// dispatch data to store
const Action = {
  'fetch' : () => {
    Dispatcher.dispatch({
      'actionType' : 'fluxServer_fetch'
    });
  },
  'add' : (userName) => {
    Dispatcher.dispatch({
      'actionType' : 'fluxServer_add',
      'userName'   : userName
    });
  },
  'remove' : (userID) => {
    Dispatcher.dispatch({
      'actionType' : 'fluxServer_remove',
      'userID'     : userID
    });
  }
};

export default Action;

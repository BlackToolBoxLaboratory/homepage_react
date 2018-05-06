import Dispatcher from 'assets/dispatcher.js';

// dispatch data to store
const Action = {
  'fetch': ()=>{
    Dispatcher.dispatch({
      'actionType': 'flux_fetch'
    });
  },
  'add': (userName)=>{
    Dispatcher.dispatch({
      'actionType': 'flux_add',
      'userName': userName
    });
  },
  'remove': (userID)=>{
    Dispatcher.dispatch({
      'actionType': 'flux_remove',
      'userID': userID
    });
  }
};

export default Action;

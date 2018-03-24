import Dispatcher from '../../../../assets/dispatcher.js';

// dispatch data to store
const ExampleAction = {
  'fetch': (userList)=>{
    Dispatcher.dispatch({
      'actionType': 'fetch',
      'userList': userList
    });
  },
  'add': (userName)=>{
    Dispatcher.dispatch({
      'actionType': 'add',
      'userName': userName
    });
  },
  'remove': (userId)=>{
    Dispatcher.dispatch({
      'actionType': 'remove',
      'userId': userId
    });
  }
};

export default ExampleAction;

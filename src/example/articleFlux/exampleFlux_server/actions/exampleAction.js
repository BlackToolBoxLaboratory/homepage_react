import Dispatcher from '../../../../assets/dispatcher.js';

// dispatch data to store
const ExampleAction = {
  'update': (userList)=>{
    Dispatcher.dispatch({
      'actionType': 'update',
      'userList': userList
    });
  }
};

export default ExampleAction;

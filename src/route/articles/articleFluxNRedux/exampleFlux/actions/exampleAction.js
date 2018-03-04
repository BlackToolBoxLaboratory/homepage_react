import ExampleDispatcher from '../dispatchers/exampleDispatcher.js';

// dispatch data to store
const ExampleAction = {
  fetch: (userList)=>{
    ExampleDispatcher.dispatch({
      actionType: 'fetch',
      userList: userList
    });
  },
  add: (userName)=>{
    ExampleDispatcher.dispatch({
      actionType: 'add',
      userName: userName
    });
  },
  remove: (userId)=>{
    ExampleDispatcher.dispatch({
      actionType: 'remove',
      userId: userId
    });
  }
};

export default ExampleAction;

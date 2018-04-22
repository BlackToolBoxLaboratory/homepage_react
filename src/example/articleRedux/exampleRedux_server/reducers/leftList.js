import ServerAPI from '../serverAPIs/serverAPI.js';

const LeftList = (state = [], action) => {
  let obj;
  let newState = state.slice(0);
  switch (action['type']) {
    case 'LEFT_LIST_INIT':
      newState = ServerAPI.initData('left');
      return newState;
      break;
    case 'LEFT_LIST_GET':
      newState = ServerAPI.getData('left');
      return newState;
      break;
    case 'LEFT_LIST_ADD':
      obj = action['data'];
      newState = ServerAPI.addData('left', obj);
      return newState;
      break;
    case 'LEFT_LIST_CHANGE':
      obj = action['data'];
      newState = ServerAPI.changeData('left', 'right', obj);
      return newState;
      break;
    case 'LEFT_LIST_REMOVE':
      obj = action['data'];
      newState = ServerAPI.removeData('left', obj);
      return newState;
      break;
    default:
      return newState;
      break;
  }
}

export default LeftList;

import ServerAPI from '../serverAPIs/serverAPI.js';

const RightList = (state = [], action) => {
  let obj;
  let newState = state.slice(0);
  switch (action['type']) {
    case 'RIGHT_LIST_INIT':
      newState = ServerAPI.initData('right');
      return newState;
      break;
    case 'RIGHT_LIST_GET':
      newState = ServerAPI.getData('right');
      return newState;
      break;
    case 'RIGHT_LIST_ADD':
      obj = action['data'];
      newState = ServerAPI.addData('right', obj);
      return newState;
      break;
    case 'RIGHT_LIST_CHANGE':
      obj = action['data'];
      newState = ServerAPI.changeData('right', 'left', obj);
      return newState;
      break;
    case 'RIGHT_LIST_REMOVE':
      obj = action['data'];
      newState = ServerAPI.removeData('right', obj);
      return newState;
      break;
    default:
      return newState;
      break;
  }
}

export default RightList;

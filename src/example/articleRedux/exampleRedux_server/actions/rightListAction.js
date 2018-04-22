const RightListAction = (() => {
  const init = () => {
    return {
      type: 'RIGHT_LIST_INIT'
    };
  };
  const get = () => {
    return {
      type: 'RIGHT_LIST_GET'
    };
  };
  const add = (source) => {
    return {
      type: 'RIGHT_LIST_ADD',
      data: source
    }
  };
  const change = (source) => {
    return {
      type: 'RIGHT_LIST_CHANGE',
      data: source
    }
  };
  const remove = (source) => {
    return {
      type: 'RIGHT_LIST_REMOVE',
      data: source
    }
  };
  return {
    init:   init,
    get:    get,
    add:    add,
    change: change,
    remove: remove
  }
})()

export default RightListAction;

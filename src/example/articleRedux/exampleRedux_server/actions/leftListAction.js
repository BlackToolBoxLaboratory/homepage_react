const LeftListAction = (() => {
  const init = () => {
    return {
      type : 'LEFT_LIST_INIT'
    };
  };
  const get = () => {
    return {
      type : 'LEFT_LIST_GET'
    };
  };
  const add = (source) => {
    return {
      type : 'LEFT_LIST_ADD',
      data : source
    };
  };
  const change = (source) => {
    return {
      type : 'LEFT_LIST_CHANGE',
      data : source
    };
  };
  const remove = (source) => {
    return {
      type : 'LEFT_LIST_REMOVE',
      data : source
    };
  };
  return {
    init   : init,
    get    : get,
    add    : add,
    change : change,
    remove : remove
  };
})();

export default LeftListAction;

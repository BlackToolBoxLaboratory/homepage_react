const initialState = {
  languageSetting     : ''
};

const action = {
  setLang(data) {
    return {
      type : 'LANG_SET',
      data : data
    };
  }
};

const reducer = (state=initialState, action) => {
  let result = state;
  switch (action.type) {
  case 'LANG_SET':
    result = {
      languageSetting : action.data,
    };
    return result;
  default:
    return state;
  }
};

export {
  action as langAction,
  reducer as langReducer
};

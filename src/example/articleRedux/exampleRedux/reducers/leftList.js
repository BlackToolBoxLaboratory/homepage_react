// Definitions
const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function DataObj () {
  this['uId'] = '';
  this['name'] = '';
};
function randomData (type, base) {
  let valueLength = 0; 
  let value = '';
  let randomNumber;
  switch(type)
  {
    case 'id':
      valueLength = 10;
      for (let idIndex=0; idIndex<valueLength; idIndex++)
      {
        randomNumber = Math.floor(Math.random()*random_uId.length);
        value += random_uId.slice(randomNumber,randomNumber+1);
      };
      if (!checkUidUnique(value, base))
      {
        value = randomData('id', base);
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random()*10);
      for (let idIndex=0; idIndex<valueLength; idIndex++)
      {
        randomNumber = Math.floor(Math.random()*random_name.length);
        value += random_name.slice(randomNumber,randomNumber+1);
      };
      break;
  };
  return value;
};
function checkUidUnique (uId, base)
{
  for (let baseIndex=0; baseIndex<base.length; baseIndex++)
  {
    if(base[baseIndex].uId == uId)
    { // if duplicate uId, random again
      return false;
    };
  };
  return true;
};

const ReducerLeft = (state = [], action) => {
  let newState = state.slice(0);
  let dataTemp;
  switch (action['type']) {
    case 'LEFT_LIST_INIT':
      newState = [];
      for (let i=0; i<DATAMEMBERS; i++)
      {
        dataTemp = new DataObj();
        dataTemp['uId'] = randomData('id', newState);
        dataTemp['name'] = randomData('name');
        newState.push(dataTemp);
      };
      return newState;
      break;
    case 'LEFT_LIST_GET':
      return newState;
      break;
    case 'LEFT_LIST_ADD':
      dataTemp = new DataObj();
      dataTemp['uId'] = (('' != action['data'].uId) && (checkUidUnique(action['data'].uId, newState)))? action['data'].uId : randomData('id', newState);
      dataTemp['name'] = action['data'].name;
      newState.push(dataTemp);
      return newState;
      break;
    case 'LEFT_LIST_REMOVE':
      for(let i=0; i<newState.length; i++)
      {
        if(action['data'].uId == newState[i].uId)
        {
          newState.splice(i,1);
          break;
        };
      };
      return newState;
      break;
    default:
      return newState;
      break;
  }
}

export default ReducerLeft;

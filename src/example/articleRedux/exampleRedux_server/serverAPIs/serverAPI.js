/* present data in server */
var serverData = {
  'left'  : new Array(),
  'right' : new Array()
};

const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function DataObj () {
  this['uId'] = '';
  this['name'] = '';
}

function randomData (type, base) {
  let valueLength = 0; 
  let value = '';
  let randomNumber;
  switch (type)
  {
  case 'id':
    valueLength = 10;
    for (let idIndex=0; idIndex<valueLength; idIndex++)
    {
      randomNumber = Math.floor(Math.random()*random_uId.length);
      value += random_uId.slice(randomNumber, randomNumber+1);
    }
    if (!checkUidUnique(value, base))
    {
      value = randomData('id', base);
    }
    break;
  case 'name':
    valueLength = Math.ceil(Math.random()*10);
    for (let idIndex=0; idIndex<valueLength; idIndex++)
    {
      randomNumber = Math.floor(Math.random()*random_name.length);
      value += random_name.slice(randomNumber, randomNumber+1);
    }
    break;
  }
  return value;
}
function checkUidUnique (uId, base)
{
  for (let baseIndex=0; baseIndex<base.length; baseIndex++)
  {
    if (base[baseIndex].uId == uId)
    { // if duplicate uId, random again
      return false;
    }
  }
  return true;
}

const ServerAPI = (() => {
  const initData = (type) => {
    serverData[type] = [];
    // random data instead of 'fetch' data
    let dataTemp;
    for (let i=0; i<DATAMEMBERS; i++)
    {
      dataTemp = new DataObj();
      dataTemp['uId'] = randomData('id', serverData[type]);
      dataTemp['name'] = randomData('name');
      serverData[type].push(dataTemp);
    }
    return serverData[type];
  };
  const getData = (type) => {
    return ('all' == type)? serverData : (serverData[type])? serverData[type] : [];
  };
  const addData = (type, obj) => {
    obj['uId'] = randomData('id', serverData[type]);
    serverData[type].push(obj);
    return serverData[type];
  };
  const changeData = (moveFrom, moveTo, obj) => {
    let data = [];
    for (let i=0; i<serverData[moveFrom].length; i++)
    {
      if (obj['uId'] == serverData[moveFrom][i].uId)
      {
        data = serverData[moveFrom].splice(i, 1);
        for (let baseIndex=0; baseIndex<serverData[moveTo].length; baseIndex++)
        {
          if (serverData[moveTo][baseIndex].uId == data['value'])
          { // if duplicate uId, random again
            data['value'] = this.randomData('id', serverData[moveTo]);
            break;
          }
        }
        serverData[moveTo] = serverData[moveTo].concat(data);
        break;
      }
    }
    return serverData[moveFrom];
  };
  const removeData = (type, obj) => {
    for (let i=0; i<serverData[type].length; i++)
    {
      if (obj['uId'] == serverData[type][i].uId)
      {
        serverData[type].splice(i, 1);
        break;
      }
    }
    return serverData[type];
  };
  return {
    'initData'   : initData,
    'getData'    : getData,
    'addData'    : addData,
    'changeData' : changeData,
    'removeData' : removeData
  };
})();

export default ServerAPI;

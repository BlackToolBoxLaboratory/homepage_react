/* present data in server */
var serverData = new Array();

const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyz';

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
        randomNumber = Math.round(Math.random()*100);
        value += random_uId.split('')[randomNumber%random_uId.length];
      };
      for (let baseIndex=0; baseIndex<base.length; baseIndex++)
      {
        if(base[baseIndex].uId == value)
        { // if duplicate uId, random again
          value = randomData('id', base);
          break;
        };
      };
      break;
    case 'name':
      valueLength = Math.ceil(Math.random()*10);
      for (let idIndex=0; idIndex<valueLength; idIndex++)
      {
        randomNumber = Math.round(Math.random()*random_name.length);
        value += random_name.split('')[randomNumber];
      };
      break;
  };
  return value;
};

const ServerAPI = (()=>{
  const initData = () => {
    serverData = [];
    // random data instead of 'fetch' data
    let dataTemp;
    for (let i=0; i<DATAMEMBERS; i++)
    {
      dataTemp = new DataObj();
      dataTemp['uId'] = randomData('id', serverData);
      dataTemp['name'] = randomData('name');
      serverData.push(dataTemp);
    };
    return serverData;
  };
  const getData = () => {
    return serverData;
  };
  const addData = (obj) => {
    let dataTemp = new DataObj();
    dataTemp['uId'] = randomData('id', serverData);
    dataTemp['name'] = obj['name'];
    serverData.push(dataTemp);
    return serverData;
  };
  const deleteData = (obj) => {
    for(let i=0; i<serverData.length; i++)
    {
      if(obj['uId'] == serverData[i].uId)
      {
        serverData.splice(i,1);
        break;
      };
    };
    return serverData;
  };
  return {
    'initData':   initData,
    'getData':    getData,
    'addData':    addData,
    'deleteData': deleteData
  }
})();

export default ServerAPI;

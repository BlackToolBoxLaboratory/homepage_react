import Merge from 'merge';
import { EventEmitter } from 'events';

import Dispatcher from '../../../../assets/dispatcher.js';

/* example data */
let dataList = new Array();

// Definitions
const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';

function DataObj () {
  this['uId'] = '';
  this['name'] = '';
};
function randomUid (base) {
  let valueLength = 10; 
  let value = '';
  let randomNumber;
  for (let idIndex=0; idIndex<valueLength; idIndex++)
  {
    randomNumber = Math.floor(Math.random()*random_uId.length);
    value += random_uId.split('')[randomNumber];
  }
  for (let baseIndex=0; baseIndex<base.length; baseIndex++)
  {
    if(base[baseIndex].uId == value)
    { //  if duplicate uId, random again
      value = randomUid(base);
      break;
    }
  }
  return value;
};

/* example event listener id */
const EXAMPLE_EVENT_ID = 'exampleFlux';

/* store emitter */
const ExampleStore = Merge(EventEmitter.prototype,{
  exampleFlux_getData: function(){
		return dataList;
	},
  exampleFlux_emitChange: function () {
    this.emit(EXAMPLE_EVENT_ID);
  },
  exampleFlux_addChangeListener: function (callback) {
    this.on(EXAMPLE_EVENT_ID, callback);
  },
  exampleFlux_removeChangeListener: function (callback) {
    this.removeListener(EXAMPLE_EVENT_ID, callback);
  }
});

/* regist event to dispatcher */
Dispatcher.register((event)=>{
  switch(event.actionType) 
  {
    case 'fetch':
      dataList = event['userList'];
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'add':
      if('' == event['userName'])
      {
        alert('Input is empty.');
        return;
      };
      if(DATAMEMBERS <= dataList.length)
      {
        alert('User is full.');
        return;
      };
      let dataTemp = new DataObj();
      dataTemp['uId'] = randomUid(dataList);
      dataTemp['name'] = event['userName'];
      dataList.push(dataTemp);
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'remove':
      for(let i=0; i<dataList.length; i++)
      {
        if(event['userId'] == dataList[i].uId)
        {
          dataList.splice(i,1);
          break;
        };
      };
      ExampleStore.exampleFlux_emitChange();
      break;
  }
});

export default ExampleStore;

import Merge from 'merge';
import { EventEmitter } from 'events';

import ExampleDispatcher from '../dispatchers/exampleDispatcher.js';

// Definitions
function DataObj () {
  this['uId'] = '';
  this['name'] = '';
};
const DATAMEMBERS = 5;
const random_uId = 'abcdefghijklmnopqrstuvwxyz0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyz';
function randomUid (base) {
  let valueLength = 10; 
  let value = '';
  let randomNumber;
  for (let idIndex=0; idIndex<valueLength; idIndex++)
  {
    randomNumber = Math.round(Math.random()*100);
    value += random_uId.split('')[randomNumber%random_uId.length];
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

/* example data */
let dataList = new Array();

/* example event listener id */
const EXAMPLE_EVENT_ID = 'example_change';

/* store emitter */
const ExampleStore = Merge(EventEmitter.prototype,{
  getData: function(){
		return dataList;
	},
  emitChange: function () {
    this.emit(EXAMPLE_EVENT_ID);
  },
  addChangeListener: function (callback) {
    this.on(EXAMPLE_EVENT_ID, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(EXAMPLE_EVENT_ID, callback);
  }
});

/* regist event to dispatcher */
ExampleDispatcher.register((event)=>{
  switch(event.actionType) 
  {
    case 'fetch':
      dataList = event['userList'];
      ExampleStore.emitChange();
      break;
    case 'add':
      if(DATAMEMBERS <= dataList.length)
      {
        alert('User is full.');
        return;
      };
      if('' == event['userName'])
      {
        alert('Input is empty.');
        return;
      };
      let dataTemp = new DataObj();
      dataTemp['uId'] = randomUid(dataList);
      dataTemp['name'] = event['userName'];
      dataList.push(dataTemp);
      ExampleStore.emitChange();
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
      ExampleStore.emitChange();
      break;
  }
});

export default ExampleStore;

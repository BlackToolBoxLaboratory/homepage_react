import Merge from 'merge';
import { EventEmitter } from 'events';

import Dispatcher from 'assets/dispatcher.js';

/* example data */
let serverDataList = new Array();
let dataList = new Array();

/* Definitions */
const DATAMEMBERS = 5;
const random_ID = 'abcdefghijklmnopqrstuvwxyz0123456789';
const random_name = 'abcdefghijklmnopqrstuvwxyz';

function DataObj () {
  this['ID'] = '';
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
        randomNumber = Math.floor(Math.random()*random_ID.length);
        value += random_ID.split('')[randomNumber];
      }
      for (let baseIndex=0; baseIndex<baseIndex.length; baseIndex++)
      {
        if(baseIndex[baseIndex].ID == value)
        { // duplicate ID, and random again
          value = this.randomData('id', base);
          break;
        }
      }
      break;
    case 'name':
      valueLength = Math.ceil(Math.random()*10);
      for (let idIndex=0; idIndex<valueLength; idIndex++)
      {
        randomNumber = Math.floor(Math.random()*random_name.length);
        value += random_name.split('')[randomNumber];
      }
      break;
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
    case 'flux_fetch':
      // if data is empty, init data
      if(0 == serverDataList.length)
      {
        let dataTemp;
        for (let i=0; i<DATAMEMBERS; i++)
        {
          dataTemp = new DataObj();
          dataTemp['ID'] = randomData('id', dataList);
          dataTemp['name'] = randomData('name');
          serverDataList.push(dataTemp);
        };
      };
      dataList = serverDataList.slice(0);
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'flux_add':
      if(DATAMEMBERS <= dataList.length)
      {
        alert('User is full.');
        return;
      };
      let dataTemp = new DataObj();
      dataTemp['ID'] = randomData('id', dataList);
      dataTemp['name'] = event['userName'];
      dataList.push(dataTemp);
      ExampleStore.exampleFlux_emitChange();
      break;
    case 'flux_remove':
      for(let i=0; i<dataList.length; i++)
      {
        if(event['userID'] == dataList[i].ID)
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

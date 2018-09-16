import Merge from 'merge';
import { EventEmitter } from 'events';

import ServerAPI from '../serverAPIs/serverAPI.js';

import Dispatcher from 'assets/dispatcher.js';

/* example data */
let serverDataList = new Array();
let dataList = new Array();

/* Definitions */
const DATAMEMBERS = 5;

function DataObj () {
  this['ID'] = '';
  this['name'] = '';
}

/* example event listener id */
const EXAMPLE_EVENT_ID = 'exampleFlux_server';

/* store emitter */
const ExampleStore = Merge(EventEmitter.prototype, {
  exampleFlux_server_getData : function() {
    return dataList;
  },
  exampleFlux_server_emitChange : function () {
    this.emit(EXAMPLE_EVENT_ID);
  },
  exampleFlux_server_addChangeListener : function (callback) {
    this.on(EXAMPLE_EVENT_ID, callback);
  },
  exampleFlux_server_removeChangeListener : function (callback) {
    this.removeListener(EXAMPLE_EVENT_ID, callback);
  }
});

/* regist event to dispatcher */
Dispatcher.register((event) => {
  let obj;
  switch (event.actionType) 
  {
  case 'fluxServer_fetch':
    // if data is empty, init data
    if (0 == serverDataList.length)
    {
      serverDataList = ServerAPI.initData();
    }
    else
    {
      serverDataList = ServerAPI.getData();
    }
    dataList = serverDataList;
    ExampleStore.exampleFlux_server_emitChange();
    break;
  case 'fluxServer_add':
    obj = new DataObj();
    obj['name'] = event['userName'];
    if (DATAMEMBERS <= dataList.length)
    {
      alert('User is full.');
      break;
    }
    dataList = ServerAPI.addData(obj);
    ExampleStore.exampleFlux_server_emitChange();
    break;
  case 'fluxServer_remove':
    obj = new DataObj();
    obj['ID'] = event['userID'];
    dataList = ServerAPI.deleteData(obj);
    ExampleStore.exampleFlux_server_emitChange();
    break;
  }
});

export default ExampleStore;

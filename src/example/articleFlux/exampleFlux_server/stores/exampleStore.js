import Merge from 'merge';
import { EventEmitter } from 'events';

import Dispatcher from '../../../../assets/dispatcher.js';

/* example data */
let dataList = new Array();

/* example event listener id */
const EXAMPLE_EVENT_ID = 'exampleFlux_server';

/* store emitter */
const ExampleStore = Merge(EventEmitter.prototype,{
  exampleFlux_server_getData: function(){
		return dataList;
	},
  exampleFlux_server_emitChange: function () {
    this.emit(EXAMPLE_EVENT_ID);
  },
  exampleFlux_server_addChangeListener: function (callback) {
    this.on(EXAMPLE_EVENT_ID, callback);
  },
  exampleFlux_server_removeChangeListener: function (callback) {
    this.removeListener(EXAMPLE_EVENT_ID, callback);
  }
});

/* regist event to dispatcher */
Dispatcher.register((event)=>{
  switch(event.actionType) 
  {
    case 'update':
      dataList = event['userList'];
      ExampleStore.exampleFlux_server_emitChange();
      break;
  }
});

export default ExampleStore;

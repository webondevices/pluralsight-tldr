// DISPATCHER - dispatcher/appDispatcher
var Dispatcher = require('flux').Dispatcher;
module.exports = new Dispatcher();


// CONSTANTS - constants/actionTypes
var keyMirror = require('react/lib/keyMirror');
module.exports = keyMirror({
	CREATE_ACTION: null
});


// ACTIONS - actions/myActions
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var MyActions = {
	createAction: function(dataPassedFromView) {
		var newData = myApi.saveData();

		//Hey dispatcher, go tell all the stores that something was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_ACTION,
			myData: newData
		});
	}
};

module.exports = MyActions;


// STORES - stores.myStore
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _storeData = [];

var MyStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getAllData: function() {
		return _storeData;
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType) {
		case ActionTypes.CREATE_ACTION:
			_storeData.push(action.myData);
			MyStore.emitChange();
			break;
		default:
			// no op
	}
});

module.exports = MyStore;


// TRIGGER ACTION IN VIEW
myActions.createAction(newDataPassed);


// LISTEN FOR STORE CHANGE
getInitialState: function() {
	return {
		myData: myStore.getAllData()
	};
},

componentWillMount: function() {
	MyStore.addChangeListener(this._onChange);
},

//Clean up when this component is unmounted
componentWillUnmount: function() {
	MyStore.removeChangeListener(this._onChange);
},

_onChange: function() {
	this.setState({ myData: MyStore.getAllData() });
}
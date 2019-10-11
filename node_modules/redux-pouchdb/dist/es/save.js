var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import load from './load';

var unpersistedQueue = {};
var isUpdating = {};

export default (function (db, madeBy) {
  var loadReducer = load(db);

  var saveReducer = function saveReducer(reducerName, reducerState) {
    if (isUpdating[reducerName]) {
      //enqueue promise
      unpersistedQueue[reducerName] = unpersistedQueue[reducerName] || [];
      unpersistedQueue[reducerName].push(reducerState);

      return Promise.resolve();
    }

    isUpdating[reducerName] = true;

    return loadReducer(reducerName).then(function (doc) {
      var newDoc = _extends({}, doc, { madeBy: madeBy, state: reducerState });
      return newDoc;
    }).then(function (newDoc) {
      return db.put(newDoc);
    }).then(function () {
      isUpdating[reducerName] = false;
      if (unpersistedQueue[reducerName] && unpersistedQueue[reducerName].length) {
        var next = unpersistedQueue[reducerName].shift();

        return saveReducer(reducerName, next);
      }
    }).catch(console.error.bind(console));
  };

  return saveReducer;
});
'use strict';

angular.module('crowdSourcingApp')
.service('thingService', function () {
  
  var newThing = [];

  var addThing = function(newMoney, newTag) {
      newThing.push(newMoney);
      newThing.push(newTag);
  };


  var getThings = function(){
      return newThing;
  };

  return {
    addThing: addThing,
    getThings: getThings
  };

});
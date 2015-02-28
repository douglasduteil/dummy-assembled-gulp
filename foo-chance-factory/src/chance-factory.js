'use strict';

angular
  .module('foo.chance-factory', [])
  .factory('Chance', function(){ return Chance; })
;

////

function Chance(){
  this.random = Math.random;
}

Chance.version = 'foo';

Chance.prototype.bool = function bool(options) {
  options = angular.extend({ likelihood: 50 }, options);
  return this.random() * 100 < options.likelihood;
};

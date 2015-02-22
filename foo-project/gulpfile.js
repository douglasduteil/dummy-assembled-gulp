'use strict';

var gulp = require('gulp');
var linterTasks = require('dummy-linter-task');
var testerTasks = require('dummy-tester-task');


gulp.config = {
  foo: 'bar'
};


mergeRegistries(gulp, linterTasks, testerTasks);


console.log(gulp.tree());


////

// To modulify or merge somewhere???
function mergeRegistries(target) {
  var registries = Array.prototype.slice.call(arguments, 1);

  registries.map(function (registry) {
    registry.tree().forEach(function (taskName) {
      return target.set(taskName, registry.get(taskName));
    });
  });
}

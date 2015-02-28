'use strict';

var gulp = require('gulp');

var linterTasks = require('dummy-linter-task');
var testerTasks = require('dummy-tester-task');
var exampleServer = require('dummy-example-server');

var helpFromArchyTree = require('help-from-archy-tree');
var assignMetaToTask = require('assign-meta-to-task');

gulp.config = {
  foo: 'bar'
};

// TODO autoprefix imported tasks + alias them
gulp.registry(linterTasks.registry());
gulp.registry(testerTasks.registry());
gulp.registry(exampleServer.registry());


gulp.task('help', function(cb){
  console.log(
    helpFromArchyTree(gulp.tree({ deep : true}))
  );
  cb();
});
assignMetaToTask(gulp, 'help', {
  description: 'The task that help you using the other tasks'
});

gulp.task('default', gulp.series('help'));
assignMetaToTask(gulp, 'default', {
  description: 'The default task here'
});

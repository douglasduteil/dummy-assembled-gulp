
var extend = require('util')._extend;
var path = require('path');

var pkg = require('./package.json');

var gulp = require('gulp');
var assignMetaToTask = require('assign-meta-to-task');

var karma = require('karma').server;

gulp.task('test', function(cb){

  var config = extend({
    test: { configFile: path.join(process.cwd(), 'karma.conf.js')}
  }, gulp.config, gulp.config[pkg.name]);

  karma.start({
    configFile: config.test.configFile
  }, cb);
});

assignMetaToTask(gulp, 'test', {
  description: 'Will test your code'
});

module.exports = gulp;

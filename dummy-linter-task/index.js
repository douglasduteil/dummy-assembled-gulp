
var extend = require('util')._extend;

var gulp = require('gulp');
var assignMetaToTask = require('assign-meta-to-task');

gulp.task('lint', function(cb){
  console.log('dummy-tester-task config', gulp.config)

  console.log('Linting ...')

  cb();
});

assignMetaToTask(gulp, 'lint', {
  description: 'Will lint your code'
});

module.exports = gulp;

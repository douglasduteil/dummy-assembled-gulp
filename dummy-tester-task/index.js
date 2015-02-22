
var gulp = require('gulp');
var assignMetaToTask = require('assign-meta-to-task');

gulp.task('test', function(cb){
  console.log('dummy-tester-task config', gulp.config)

  console.log('Testing ...')

  cb();
});

assignMetaToTask(gulp, 'test', {
  description: 'Will test your code'
});

module.exports = gulp;

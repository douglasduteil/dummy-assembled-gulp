
var gulp = require('gulp');

gulp.task('test', function(cb){
  console.log('dummy-tester-task config', gulp.config)

  console.log('Testing ...')

  cb();
});

module.exports = gulp;

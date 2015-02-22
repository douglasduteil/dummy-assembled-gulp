
var gulp = require('gulp');

gulp.task('lint', function(cb){
  console.log('dummy-tester-task config', gulp.config)

  console.log('Linting ...')

  cb();
});

module.exports = gulp;

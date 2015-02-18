
import gulp from 'gulp';

gulp.task('lint', function(cb){
  console.log('dummy-tester-task config', gulp.config)

  console.log('Linting ...')

  cb();
});

export default gulp;

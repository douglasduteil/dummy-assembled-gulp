
var extend = require('util')._extend;
var pkg = require('./package.json');

var gulp = require('gulp');
var assignMetaToTask = require('assign-meta-to-task');

var merge = require('merge-stream');
var jshint = require('gulp-jshint');

gulp.task('lint', function(cb){

  var config = extend({
    src: { cwd: 'src', scripts: '{,*/}*.js' },
    test: { cwd: 'test', scripts: '{,*/}*{.spec,Spec}.js' }
  }, gulp.config, gulp.config[pkg.name]);

  var scripts = gulp.src(config.src.scripts, {cwd: config.src.cwd});
  var tests = gulp.src(config.test.scripts, {cwd: config.test.cwd});
  return merge(scripts, tests)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

assignMetaToTask(gulp, 'lint', {
  description: 'Will lint your code'
});

module.exports = gulp;

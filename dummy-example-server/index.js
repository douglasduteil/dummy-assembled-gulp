
var extend = require('util')._extend;
var pkg = require('./package.json');

var gulp = require('gulp');
var assignMetaToTask = require('assign-meta-to-task');

var browserSync = require('browser-sync');

gulp.task('serve-examples', function(cb){

  var config = extend({
    exampleFolder: { cwd: 'example' },
    src: { cwd: 'src' }
  }, gulp.config, gulp.config[pkg.name]);

  browserSync({
    files: [
      config.src.cwd + '/**',
      config.exampleFolder.cwd + '/**'
    ],
    open: false,
    server: {
      baseDir: [config.exampleFolder],
      directory: true,
      routes: { "/dist": config.src}
    },
    watchOptions: { debounceDelay: 1000 }
  }, cb)
});

assignMetaToTask(gulp, 'serve-examples', {
  description: 'Will serve the example folder'
});

module.exports = gulp;

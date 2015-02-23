
var extend = require('util')._extend;

var gulp = require('gulp');
var assignMetaToTask = require('assign-meta-to-task');

var browserSync = require('browser-sync');

gulp.task('serve-examples', function(cb){

  var config = extend({
    exampleFolder: 'example',
    src: 'src'
  }, gulp.config);

  browserSync({
    files: [
      config.src + '/**',
      config.exampleFolder + '/**'
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

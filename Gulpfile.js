var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    lrserver = require('tiny-lr'),
    livereload = require('gulp-livereload'),
    connect = require('connect'),
    coffee = require('gulp-coffee'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    rimraf = require('gulp-rimraf');

// Edit this values to best suit your app
var WEB_PORT = 9000;
var APP_DIR = './app';
var DIST_DIR = './dist';

// sass
gulp.task('sass', function() {
  gulp.src(APP_DIR + '/assets/stylesheets/*.scss')
      .pipe(sass())
      .pipe(gulp.dest(DIST_DIR));
});

// coffee
gulp.task('coffee', function() {
  gulp.src(APP_DIR + '/**/*.coffee')
      .pipe(coffee())
      .pipe(gulp.dest(DIST_DIR));
});

// jade
gulp.task('jade', function() {
  gulp.src(APP_DIR + '/**/*.jade')
      .pipe(jade())
      .pipe(gulp.dest(DIST_DIR));
});

// copy bower components
gulp.task('copy', function() {
  gulp.src('./bower_components/**/*.*')
      .pipe(gulp.dest(DIST_DIR + '/vendor'));
});

// clean
gulp.task('clean', function() {
  gulp.src(DIST_DIR + '/**/*')
      .pipe(rimraf({force: true}));
});

// jshint files
gulp.task('jshint', function() {
  gulp.src(['test/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter());
});

var lrs = lrserver();

// start livereload server
gulp.task('lr-server', function() {
  lrs.listen(35729, function(err) {
    if (err) return console.log(err);
  });
});

// start local http server for development
gulp.task('http-server', function() {
  connect()
  .use(require('connect-livereload')())
  .use(connect.static(DIST_DIR))
  .listen(WEB_PORT);

  console.log('Server listening on http://localhost:' + WEB_PORT);
});

// start local http server with watch and livereload set up
gulp.task('server', function() {
  gulp.run('jade', 'sass', 'coffee', 'copy', 'lr-server');

  var watchFiles = [APP_DIR + '/**/*'];
  gulp.watch(watchFiles, function(e) {
      console.log('Files changed. Reloading...');
      gulp.src(watchFiles)
      .pipe(livereload(lrs));
  });

  gulp.watch(APP_DIR + '/**/*.coffee', ['coffee']);
  gulp.watch(APP_DIR + '/**/*.scss', ['sass']);
  gulp.watch(APP_DIR + '/**/*.jade', ['jade']);

  gulp.run('http-server');
});

gulp.task('default', function() {
  gulp.run('jshint', 'server');
});


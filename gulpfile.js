var gulp = require('gulp'),
 browserSync = require('browser-sync'),
 runSequence = require('run-sequence');


var source = {
 //These are all the specific Videbligo files we need for our build
 js:
 //These are all js files we can concat to app.js
 [
  'assets/js/app.js',
  'assets/js/**/app.js',
  'assets/**/*.js',
  'views/**/*.js'
 ],
 less: [
  'assets/less/*.less',
 ],
 html: [
  '*.php',
  '*.html',
  '*/**/*.php',
  '*/**/*.html'
 ],
};

var proxyOptions = {
 target: 'http://bastion.videbligo.com',
 changeOrigin: true,
};


gulp.task('browser-sync', function() {
 var proxy = require('http-proxy-middleware'),
 apiProxy = proxy('/api', proxyOptions);

 browserSync({
  open: false,
  port: 3000,
  logLevel: "debug",
  proxy: {
    target: "localhost:7888",
    middleware: [apiProxy],
  }
  // server: {
  //  baseDir: '.',
  //  middleware: [apiProxy,phpProxy],
  // }
 });
});

gulp.task('reload', function() {
 browserSync.reload();
});

gulp.task('watch-less', function() {
 gulp.watch(source.less, ['concat-compile-less']);
});

gulp.task('concat-compile-less', function(done) {
 var concat = require('gulp-concat');
 var less = require('gulp-less');
 return gulp.src(source.less)
 .pipe(concat('style.less'))
 .pipe(less('style.css'))
 .pipe(gulp.dest('.'))
 .pipe(browserSync.stream());
 done();
});

gulp.task('watch-html', function() {
 gulp.watch(source.html,['reload']);
});

gulp.task('watch-js', function(done) {
 gulp.watch(source.js, function() {
  runSequence('concat-js', 'reload');
 });
});


gulp.task('concat-js', function(done) {
 var concat = require('gulp-concat');
 return gulp.src(source.js)
 .pipe(concat('app.js'))
 .pipe(gulp.dest('.'));
 done();
});

gulp.task('watch', ['watch-less', 'watch-js','watch-html']);

gulp.task('default', ['concat-compile-less', 'concat-js']);

gulp.task('serve', ['default','browser-sync', 'watch']);

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');
 
gulp.task('sass', function () {
  return gulp.src('app/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['sass', 'webserver', 'sass:watch'])

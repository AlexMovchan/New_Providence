var gulp = require('gulp'),
  	sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver');

//take require JS file and compile it to one file
gulp.task("build", function() {
  gulp.src('app/build/build.js')
    .pipe(rigger())
    .pipe(babel())
    .pipe(gulp.dest("dist/js"))
});

gulp.task('sass', function(){
  gulp.src('app/main.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(['app/**/*.scss'], ['sass']);
})

gulp.task('default', ['sass', 'webserver', 'watch']);








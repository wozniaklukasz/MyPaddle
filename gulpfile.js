/* https://css-tricks.com/gulp-for-beginners/ */

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('watch', ['browserSync', 'less'], function (){
  gulp.watch('app/less/**/*.less', ['less']); 
	gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
})

gulp.task('less', function(){
  return gulp.src('app/less/*.less')
    .pipe(less()) 
    .pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
				stream: true
		}));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});
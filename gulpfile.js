'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const tasks = ['vendor', 'bundle', 'bundle:watch'];

gulp.task('vendor', () => {
  return gulp.src([
    'node_modules/angular/angular.min.js',
    'node_modules/angular-route/angular-route.min.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('bundle', () => {
  return gulp.src('public/js/**/*.js')
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('bundle:watch', () => {
  gulp.watch('public/js/**/*.js', ['bundle']);
});

// executable tasks when running 'gulp' command
gulp.task('default', tasks);

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const tasks = ['vendor', 'bundle', 'sass', 'sass:watch', 'bundle:watch'];

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

gulp.task('sass', () => {
  return gulp.src('public/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('sass:watch', () => {
  gulp.watch('public/sass/**/*.scss', ['sass']);
});

// executable tasks when running 'gulp' command
gulp.task('default', tasks);

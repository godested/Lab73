const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const minifycss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('default', ['styles', 'html', 'scripts', 'assets', 'fonts']);

gulp.task('watch', ['styles:watch', 'html:watch', 'scripts:watch', 'assets:watch', 'fonts:watch']);

gulp.task('scripts', function () {
  return gulp.src('./src/scripts/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('scripts:watch', function () {
  gulp.watch('./src/scripts/*.js', ['scripts']);
});

gulp.task('html', function () {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html:watch', function () {
  gulp.watch('./src/**/*.html', ['html']);
});

gulp.task('styles', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename('styles.css'))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('styles:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['styles']);
});

gulp.task('fonts', function () {
  return gulp.src('./src/fonts/**/**')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('fonts:watch', function () {
  gulp.watch('./src/fonts/**/**', ['fonts']);
});

gulp.task('assets', function () {
  return gulp.src('./src/assets/**/**')
    .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('assets:watch', function () {
  gulp.watch('./src/assets/**/**', ['assets']);
});
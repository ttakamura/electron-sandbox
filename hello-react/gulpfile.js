var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var $ = require('gulp-load-plugins')();

gulp.task('compile', function(){
    return gulp.src('src/**/*.{js,jsx}')
        .pipe(webpack(Object.assign({}, webpackConfig, {
            watch: true,
        })))
        .pipe(gulp.dest('./build/'));
});

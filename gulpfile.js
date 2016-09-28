/**
 * Created by Lena on 16/09/28.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./client/app/components/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('minify', function () {
    return gulp.src('./client/app/components/**/*.html')
       // .pipe(minify())
        .pipe(gulp.dest('build'));
});


gulp.task('copy', function () {
    return gulp.src('./client/app/components/**/**/*.jpg')
        // .pipe(minify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['sass', 'minify', 'copy'], function() {
    //console.log("I have configured a gulpfile");
});
// Include gulp

/* 
    run this in PowerShell command :(be sure to run as administrator)
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
*/
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-cssnano');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/sass/main.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['assets/sass/**/*', 'assets/scss/**/*'], gulp.series('sass'));
});

// Default Task
gulp.task('default', gulp.series('sass', 'watch'));
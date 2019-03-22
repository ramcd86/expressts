var gulp = require('gulp');
// var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var hash = require('gulp-hash-filename');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var tsc = require('gulp-typescript');





gulp.task('ts-server', function() {
    return gulp.src('./src/server/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript'), // In my package.json I have "typescript": "~1.8.0-dev.20151128"
        }))
        .pipe(gulp.dest('./public_html/server'));
})

gulp.task('ts-client', function() {
    return gulp.src('./src/client/ts/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript'), // In my package.json I have "typescript": "~1.8.0-dev.20151128"
        }))
        .pipe(gulp.dest('./public_html/client'));
})

gulp.task('concat-server', function() {
    return gulp.src('./public_html/server/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('server.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public_html/server'));
})

gulp.task('concat-client', function() {
    return gulp.src('./public_html/server/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public_html/client'));
})

gulp.task('copy-assets')

gulp.task('cleanup', function() {
    gulp.src('./build', {
        read: false
    })
    .pipe(clean());
})

gulp.task('dev', function(callback){
    runSequence(
        'ts',
        'cleanup',
        callback);
})
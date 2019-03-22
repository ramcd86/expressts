var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var hash = require('gulp-hash-filename');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var tsc = require('gulp-typescript');



gulp.task('css-dev', function() {
    gulp.src('./src/client/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public_html/client'))
})

gulp.task('ts-server', function() {
    return gulp.src('./src/server/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript')
        }))
        .pipe(gulp.dest('./public_html/server-preconc'));
})

gulp.task('ts-client', function() {
    return gulp.src('./src/client/ts/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript')
        }))
        .pipe(gulp.dest('./public_html/client-preconc'));
})

gulp.task('concat-server', function() {
    return gulp.src('./public_html/server-preconc/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('server.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public_html/server'));
})

gulp.task('concat-client', function() {
    return gulp.src('./public_html/client-preconc/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public_html/client'));
})

// gulp.task('copy-assets')

gulp.task('cleanup', function() {
    gulp.src([
        './public_html/server-preconc',
        './public_html/client-preconc',
    ], {
        read: false
    })
    .pipe(clean({force: true}));
})

gulp.task('dev', function(callback){
    runSequence(
        'css-dev',
        'ts-server',
        'ts-client',
        'concat-server',
        'concat-client',
        'cleanup',
        callback);
})
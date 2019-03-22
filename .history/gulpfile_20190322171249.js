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
var babel = require('gulp-babel');



gulp.task('css-dev', function() {
    gulp.src('./src/server/client/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public_html/server/client'))
})

gulp.task('ts-server', function() {
    return gulp.src('./src/server/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript')
        }))
        .pipe(gulp.dest('./public_html/server'));
})

gulp.task('ts-client', function() {
    return gulp.src('./src/server/client/ts/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript'),
            target: 'ES6',
            
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

gulp.task('compile-es6', function() {
    return gulp.src(
        [
        './node_modules/babel-polyfill/dist/polyfill.js',
        './public_html/client-preconc/**/*.js'
        ])
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('./public_html/server/client'))
})

gulp.task('concat-client', function() {
    return gulp.src('./public_html/client-preconc/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public_html/server/client'));
})

gulp.task('clean-client', function() {
    gulp.src([
        './public_html/client',
    ], {
        read: false
    })
    .pipe(clean({force: true}));
})

gulp.task('restructure-data', function() {
    gulp.src('./src/server/views/*.ejs')
    .pipe(gulp.dest('./public_html/server/views'))
    gulp.src(['./public_html/client-preconc/main.css', './public_html/client-preconc/main.js'])
    .pipe(gulp.dest('./public_html/server/client'))
})

gulp.task('pre-clean', function() {
    gulp.src([
        './public_html/server',
    ], {
        read: false
    })
    .pipe(clean({force: true}));
})

gulp.task('post-clean', function() {
    gulp.src([
        './public_html/server-preconc',
        // './public_html/client-preconc',
    ], {
        read: false
    })
    .pipe(clean({force: true}));
})

gulp.task('dev', function(callback){
    runSequence(
        // 'pre-clean',
        'css-dev',
        'ts-server',
        'ts-client',
        // 'concat-server',
        'compile-es6',
        'concat-client',
        'clean-client',
        'restructure-data',
        // 'post-clean',
        callback);
})
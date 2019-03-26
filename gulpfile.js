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
var rollup = require('gulp-better-rollup');
var babel2 = require('rollup-plugin-babel');


gulp.task('transpile-scss', function() {
    gulp.src('./src/server/client/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssnano())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public_html/server/client'));
});

gulp.task('transpile-server-typescript', function() {
    return gulp.src('./src/server/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript'),
            target: 'ES6',
            module: 'commonjs',
            noImplicitAny: true,
            moduleResolution: 'node',
            sourceMap: true,
            baseUrl: '.',
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            paths: {
                '*': [
                    'node_modules/*',
                    'src/server/types/*'
                ]
            }
        }))
        .pipe(gulp.dest('./public_html/server'));
});

gulp.task('transpile-client-typescript', function() {
    return gulp.src('./src/server/client/ts/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript'),
            target: 'ES6',
        }))
        .pipe(gulp.dest('./public_html/es6dump'));
});

gulp.task('transpile-es6', function() {
    return gulp.src(
            [
                './public_html/es6dump/**/*.js'
            ])
        .pipe(babel({
            presets: [
                ['@babel/env', {
                    modules: false
                }]
            ]
        }))
        .pipe(gulp.dest('./public_html/es6outputdump'));
});

gulp.task('es6-to-es5-concat', function() {
    return gulp.src('./public_html/es6outputdump/main.js')
        .pipe(sourcemaps.init())
        .pipe(rollup({
            plugins: [babel2()]
        }, {
            format: 'cjs',
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public_html/es5concatdump'));
});

gulp.task('restructure-data', function() {
    gulp.src('./src/server/views/*.ejs')
        .pipe(gulp.dest('./public_html/server/views'));
    gulp.src('./public_html/es5concatdump/main.js')
        .pipe(gulp.dest('./public_html/server/client'));
});

gulp.task('pre-clean', function() {
    gulp.src([
            './public_html/server',
        ], {
            read: false
        })
        .pipe(clean({ force: true }));
});

gulp.task('post-clean', function() {
    gulp.src([
            './public_html/es6dump',
            './public_html/es6outputdump',
            './public_html/es5concatdump',
            './public_html/server/client/ts',
        ], {
            read: false
        })
        .pipe(clean({ force: true }));
});

gulp.task('dev', function(callback) {
    runSequence(
        'pre-clean',
        'transpile-scss',
        'transpile-server-typescript',
        'transpile-client-typescript',
        'transpile-es6',
        'es6-to-es5-concat',
        'restructure-data',
        'post-clean',
        callback);
});

gulp.task('watch', function() {
    gulp.watch('src/server/**/*.*', ['dev']);
});
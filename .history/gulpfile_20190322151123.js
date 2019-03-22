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



gulp.task('cleanup', function() {
    gulp.src('./build', {
        read: false
    })
    .pipe(clean());
})

gulp.task('ts', function() {
    return gulp.src('./src/server/**/*.ts')
        .pipe(tsc({
            typescript: require('typescript'), // In my package.json I have "typescript": "~1.8.0-dev.20151128"
            // target: 'ES5',
            // // module: 'system',
            // experimentalDecorators: true,
            // emitDecoratorMetadata: true,
            // outFile: 'app.js'
        }))
        // Here in my pipe I only have app.js
        .pipe(gulp.dest('./dist/server'));
})

gulp.task('dev', function(callback){
    runSequence(
        'ts',
        'cleanup',
        callback);
})
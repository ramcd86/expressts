var gulp = require('gulp');
// var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var hash = require('gulp-hash-filename');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');

// gulp.task('ts', function() {
//     return gulp.src('./src/app.ts')
//         .pipe(tsc({
//              // In my package.json I have "typescript": "~1.8.0-dev.20151128"
//             noImplicitAny: true,
//             outFile: 'app.js'
//         }))
//         // Here in my pipe I only have app.js
//         .pipe(gulp.dest('./dist'));
// })

gulp.task('default', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'app.js'
        }))
        .pipe(gulp.dest('dist'));
});
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

function compileSass() {
  return gulp
    .src('./scss/main.scss')
    .pipe(sourcemaps.init())    
    .pipe(sass().on('error', sass.logError)) 
    .pipe(postcss([autoprefixer(), cssnano()])) 
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest('./dist/css')); 
}

function watchFiles() {
  gulp.watch('/scss/main.scss', compileSass); 
}

exports.default = gulp.series(compileSass, watchFiles);
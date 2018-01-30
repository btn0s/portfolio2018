const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

const PATHS = {
    src: {
        styles: './assets/src/scss',
        scripts: './assets/src/js'
    },
    dest: {
        styles: './assets/prod/css',
        scripts: './assets/prod/js'
    }
};

function scss () {
    return gulp.src(PATHS.src.styles + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest(PATHS.dest.styles));
};

function watch () {
    gulp.watch(PATHS.src.styles + '/**/*.scss', scss);
};

gulp.task('build', scss);
gulp.task('default', gulp.series('build', watch));
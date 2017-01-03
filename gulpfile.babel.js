import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import copy from 'gulp-contrib-copy';
import webpack from 'gulp-webpack';

// Config files

// Tasks
/**
 * Clean out build/
 */
gulp.task('clean:build', () => {
  return gulp.src('build', { read: false })
    .pipe(clean());
});

/**
 * Clean out all dirs that need doing
 */
gulp.task('clean', [
  'clean:build'
]);

/**
 * Prepare app/ dir for build
 * Copys required files:
 *  package.json
 *  index.html
 *  views
 */
gulp.task('prepare:app', () => {
  return gulp.src('package.json')
    .pipe(copy())
    .pipe(gulp.dest('app/'));
});

// Tasks to compile files
/**
  * Create electron main process bundle and copy -> app/
  * Folders: src/server, src/browser
  * To: app/browser.js
  */
gulp.task('build:server', () => {
  return gulp.src('src/browser/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('app'));
});

/**
 * Build task
 */
gulp.task('build', ['clean', 'prepare:app', 'build:server']);

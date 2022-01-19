/**
 * Copy folders to the build folder
 */
'use strict';

const gulp = require('gulp');
const newer = require('gulp-newer');

const global = require('../gulp-config.js');

module.exports = function() {
  return () => {
    return gulp.src(`./${global.folder.src}/fonts/**`, { dot: true })
      .pipe(newer(`./${global.folder.dev}/fonts`))
      .pipe(gulp.dest(`./${global.folder.dev}/fonts`));
  };
};

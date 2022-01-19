'use strict';

const gulp = require('gulp');
const dotenv = require('gulp-dotenv');
const rename = require('gulp-rename');
const global = require("../gulp-config");

module.exports = function () {
  return (done) => {
    gulp.src('.env')
      .pipe(dotenv())
      .pipe(rename('env.json'))
      .pipe(gulp.dest(`./${global.folder.src}/config`));

    return done();
  };
};

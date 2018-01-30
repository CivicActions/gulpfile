/**
 * @file
 * Task: Gulp.
 * Default gulp task
 */

module.exports = function (gulp, plugins, options) {
  'use strict';

  // Watch
  gulp.task('default', [
    'sass-lint',
    'sass',
    'patternlab:watch', // Remove this line if your project does not include patternlab
    'watch'
  ]);

};

var gulp = require('gulp'),
	nodemon = require('nodemon');

gulp.task('start', function () {
  nodemon({
    script: 'app.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})
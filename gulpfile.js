var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require('webpack-stream');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var spawn = require('child_process').spawn;
var plugins = require('gulp-load-plugins')();
plugins.livereload = ('gulp-livereload');
var node;


gulp.task('sass', function () {

	return gulp.src('./src/sass/styles.scss')
		.pipe(sass().on('error', function(e) {
				console.log('\n\nError with file:\n'+e.message+'\n\nWaiting for file to change...');
			}))
			.pipe(autoprefixer({
				browsers: ['last 2 iOS versions'],
				cascade: false
		 }))
		.pipe(gulp.dest('./public/css'))
		.pipe(plugins.livereload());

});

gulp.task('webpack', function () {

	return gulp.src('./src/main.js')
		  .pipe(webpack( require('./webpack.config.js') ))
		  .on('error', function(e) {
				console.log(e.message);
		  })
		  .pipe(gulp.dest('./public/js/'))
			.pipe(plugins.livereload());

});

gulp.task('server', function() {
	if (node) node.kill();
	node = spawn('node', ['server.js'], {stdio: 'inherit'});
	node.on('close', function (code) {
	  if (code === 8) {
	    gulp.log('Error detected, waiting for changes...');
	  }
	});
});

gulp.task('default', function() {
	plugins.livereload.listen();

  gulp.run('server');

	gulp.watch('./src/sass/*.scss', ['sass'], function() {
		gulp.run('server');
	});
	gulp.watch('./src/**/*.js', ['webpack'], function() {
		gulp.run('server');
	});
  gulp.watch('./src/*.js', ['webpack'], function() {
		gulp.run('server');
	});
});


gulp.task('watch', ['sass','webpack'], function () {
	gulp.watch('./src/sass/styles.scss', ['sass']);
	gulp.watch('./src/**/*.js', ['webpack']);
  gulp.watch('./src/*.js', ['webpack']);
	// gulp.watch('./core/*.js', ['webpack']);
});

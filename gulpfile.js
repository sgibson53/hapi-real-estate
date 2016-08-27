var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require('webpack-stream');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {

	return gulp.src('./src/sass/styles.scss')
		.pipe(sass().on('error', function(e) {
				console.log('\n\nError with file:\n'+e.message+'\n\nWaiting for file to change...');
			}))
			.pipe(autoprefixer({
				browsers: ['last 2 iOS versions'],
				cascade: false
		 }))
		.pipe(gulp.dest('./public/css'));

});

gulp.task('webpack', function () {

	return gulp.src('./src/main.js')
		  .pipe(webpack( require('./webpack.config.js') ))
		  .on('error', function(e) {
				console.log(e.message);
		  })
		  .pipe(gulp.dest('./public/js/'));

});

gulp.task('watch', ['sass','webpack'], function () {
	gulp.watch('./src/sass/styles.scss', ['sass']);
	gulp.watch('./src/**/*.js', ['webpack']);
	// gulp.watch('./core/*.js', ['webpack']);
});

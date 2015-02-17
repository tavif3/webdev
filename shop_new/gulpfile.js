var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
	var config = {
		server: {
			baseDir: './dev/'
		},
		browser: "google chrome"
	}
	browserSync(config);
});

gulp.task("serve", function(){
	gulp.watch(["./dev/**/*.html", './dev/**/*.js'], ["browser-sync", browserSync.reload]);
});

gulp.task("default", ['browser-sync', 'serve']);
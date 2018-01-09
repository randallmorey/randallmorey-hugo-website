var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile `*.sass`
gulp.task('sass', () => {
  gulp.src('themes/basic/src/styles/main.sass')
    .pipe(sass({
      outputStyle : 'compressed'
    }))
    .pipe(gulp.dest('themes/basic/static/css'));
});

// Watch asset folder for changes
gulp.task('watch', ['sass'], () => {
  gulp.watch('themes/basic/src/styles/*', ['sass']);
});

// Set default task to `watch`
gulp.task('default', ['watch']);

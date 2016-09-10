var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');

var paths = {
  stylus: ['./dev/HZ_BX/stylus/*.styl'],
  script: ['./dev/HZ_BX/js/*.js']
};

gulp.task('stylus-1', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({
      	compress : 0
      }))
    .pipe(gulp.dest('./pro/HZ_BX/css'));
});

gulp.task('stylus-2', function() {
  return gulp.src(paths.stylus)
      .pipe(stylus({
        compress : 0
      }))
    .pipe(gulp.dest('./pro/HZ_BX/css'));
});

gulp.task('script', function() {
  return gulp.src(paths.script)
    // .pipe(uglify())
    .pipe(gulp.dest('./pro/HZ_BX/js'));
});

//监听
gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus-1','stylus-2']);
  gulp.watch(paths.script,['script']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch','stylus-1','stylus-2','script']);
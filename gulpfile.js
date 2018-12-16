var gulp = require('gulp');

var path_homepage = '../homepage/';
var path_backup = '../codebase/blacktbox-demo/';

gulp.task('updateHomepage', function(done) { 
  /* all */
  gulp.src(['dist/**/*'])
    .pipe(gulp.dest(path_homepage));
  done();
});

gulp.task('backupCodebase', function(done) {  
  /* src */
  gulp.src(['src/*'])
    .pipe(gulp.dest(path_backup + 'src/'));
  gulp.src(['src/**/*'])
    .pipe(gulp.dest(path_backup + 'src/'));
  /* script */
  gulp.src(['configs/*'])
    .pipe(gulp.dest(path_backup + 'configs/'));
  /* others */        
  gulp.src([
      'LICENSE',
      'README.md',
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
      'package.json',
      'package-lock.json',
      'gulpfile.js',
      '.eslintrc.js'
    ])
    .pipe(gulp.dest(path_backup));
  done();
});
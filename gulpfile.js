const gulp = require('gulp')
const del = require('del');

const path_page = '../blacktoolboxlaboratory.github.io/react/v2'
const path_backup = '../codebase/homepage_react'

gulp.task('updateHomePage', function (done) {
  /* clean files */
  del([path_page + '/'], {force: true})

  /* dist */
  gulp.src(['dist/**/*'])
    .pipe(gulp.dest(path_page))
  /* sitemap */
  gulp.src(['sitemap.xml'])
    .pipe(gulp.dest(path_page))
  done()
})

gulp.task('backupCodebase', function (done) {
  /* src */
  gulp.src(['src/**/*'])
    .pipe(gulp.dest(path_backup + '/src/'))
  gulp.src(['public/**/*'])
    .pipe(gulp.dest(path_backup + '/public/'))
  gulp.src(['configs/**/*'])
    .pipe(gulp.dest(path_backup + '/configs/'))
  gulp.src(['utils/**/*'])
    .pipe(gulp.dest(path_backup + '/utils/'))
  /* others */
  gulp.src([
    '.browserslistrc',
    '.eslintrc.js',
    '.gitignore',
    'LICENSE',
    'README.md',
    'package.json',
    'package-lock.json',
    'gulpfile.js',
    'sitemap.xml',
    'webpack.common.js',
    'webpack.dev.js',
    'webpack.prod.js'
  ]).pipe(gulp.dest(path_backup))
  done()
})

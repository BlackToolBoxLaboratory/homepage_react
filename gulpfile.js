const gulp = require('gulp')

const path_page = '../blacktoolboxlaboratory.github.io/react'
const path_backup = '../codebase/homepage_react'

gulp.task('updateHomePage', function (done) {
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
  /* others */
  gulp.src([
    '.browserslistrc',
    '.eslintrc.js',
    '.gitignore',
    'LICENSE',
    'README.md',
    'package.json',
    'package-lock.json',
    'babel.config.js',
    'gulpfile.js',
    'sitemap.xml'
  ])
    .pipe(gulp.dest(path_backup))
  done()
})

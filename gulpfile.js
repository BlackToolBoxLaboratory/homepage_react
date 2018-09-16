var gulp = require("gulp");

var path_homepage = "../homepage/";
var path_backup = "../codebase/blacktbox-demo/";

gulp.task("copy2dist", function(done) {
  /* html */
  gulp.src(["src/index.html"])
      .pipe(gulp.dest("dist/"));
  /* font-awesome */
  gulp.src(["node_modules/font-awesome/css/font-awesome.min.css"])
      .pipe(gulp.dest("dist/vendor/font-awesome/css"));
  gulp.src(["node_modules/font-awesome/fonts/*"])
      .pipe(gulp.dest("dist/vendor/font-awesome/fonts"));
  /* blacktbox-menu */
  gulp.src(["node_modules/blacktbox-menu/css/blacktbox-menu.min.css"])
      .pipe(gulp.dest("dist/vendor/blacktbox-menu/css"));
  /* blacktbox-list */
  gulp.src(["node_modules/blacktbox-list/css/blacktbox-list.min.css"])
      .pipe(gulp.dest("dist/vendor/blacktbox-list/css"));
  /* blacktbox-table */
  gulp.src(["node_modules/blacktbox-table/css/blacktbox-table.min.css"])
      .pipe(gulp.dest("dist/vendor/blacktbox-table/css"));
  done();
});       
gulp.task("copy2homepage", function(done) { 
  /* all */
  gulp.src(["dist/**/*"])
    .pipe(gulp.dest(path_homepage));
  done();
});
gulp.task("copy2codebase", function(done) {  
  /* src */
  gulp.src(["src/*"])
    .pipe(gulp.dest(path_backup + "src/"));
  gulp.src(["src/**/*"])
    .pipe(gulp.dest(path_backup + "src/"));
  gulp.src(["src/.eslintrc.js"])
    .pipe(gulp.dest(path_backup + "src/"));
  /* script */
  gulp.src(["configs/*"])
    .pipe(gulp.dest(path_backup + "configs/"));
  /* others */        
  gulp.src([
      "LICENSE",
      "README.md",
      "webpack.config.js",
      "package.json",
      "package-lock.json",
      "gulpfile.js"
    ])
    .pipe(gulp.dest(path_backup));
  done();
});
gulp.task("buildup", gulp.series("copy2dist"));
gulp.task("setup", gulp.series("copy2homepage"));
gulp.task("backup", gulp.series("copy2codebase"));

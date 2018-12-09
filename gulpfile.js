var gulp = require("gulp");

var path_homepage = "../homepage/";
var path_backup = "../codebase/blacktbox-demo/";

gulp.task("updatePublic", function(done) {
  /* html */
  gulp.src(["src/index.html"])
      .pipe(gulp.dest("public/"));
  /* blacktbox-menu */
  gulp.src(["node_modules/blacktbox-menu/css/blacktbox-menu.min.css"])
      .pipe(gulp.dest("public/vendor/blacktbox-menu/css"));
  /* blacktbox-list */
  gulp.src(["node_modules/blacktbox-list/css/blacktbox-list.min.css"])
      .pipe(gulp.dest("public/vendor/blacktbox-list/css"));
  /* blacktbox-table */
  gulp.src(["node_modules/blacktbox-table/css/blacktbox-table.min.css"])
      .pipe(gulp.dest("public/vendor/blacktbox-table/css"));
  /* blacktbox-select */
  gulp.src(["node_modules/blacktbox-select/css/blacktbox-select.min.css"])
      .pipe(gulp.dest("public/vendor/blacktbox-select/css"));
  done();
});

gulp.task("updateHomePage", function(done) { 
  /* all */
  gulp.src(["dist/**/*"])
    .pipe(gulp.dest(path_homepage));
  done();
});

gulp.task("backupCodeBase", function(done) {  
  /* src */
  gulp.src(["src/*"])
    .pipe(gulp.dest(path_backup + "src/"));
  gulp.src(["src/**/*"])
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
      "gulpfile.js",
      ".eslintrc.js"
    ])
    .pipe(gulp.dest(path_backup));
  done();
});
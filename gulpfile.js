var gulp = require("gulp");

const path_homepage = "../homepage/";
const path_backup = "../codebase/blacktbox-demo/";

gulp.task("copy2dist", function() {
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
});       
gulp.task("copy2homepage", function() { 
  /* all */
  gulp.src(["dist/**/*"])
    .pipe(gulp.dest(path_homepage));
});
gulp.task("copy2codebase", function() {  
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
      "CHANGELOGS.md",
      "webpack.config.js",
      "package.json",
      "package-lock.json",
      "gulpfile.js"                  
    ])
    .pipe(gulp.dest(path_backup));
});
gulp.task("buildup",["copy2dist"]);
gulp.task("setup", ["copy2homepage"]);
gulp.task("backup", ["copy2codebase"]);

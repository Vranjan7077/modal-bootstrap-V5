const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
var gcmq = require("gulp-group-css-media-queries");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");

gulp.task("sass", function () {
  return gulp
    .src(["src/sass/style.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gcmq())
    .pipe(postcss([autoprefixer, cssnano()]))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function () {
  return gulp.src(["src/js/*.js"]).pipe(uglify()).pipe(gulp.dest("dist/js"));
});

gulp.task("watch", function () {
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  gulp.watch("src/sass/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "scripts", "watch"));

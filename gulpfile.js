var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var postcss = require("gulp-postcss");
var cssImport = require("postcss-import");

gulp.task("sass", function(){
    var plugins = [
        cssImport({
            path:['node_modules']
        })
    ];
    return gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(postcss(plugins))
        .pipe(gulp.dest("./css"));
});

gulp.task("watch", function(){
    gulp.watch("sass/**/*.scss",["sass"]);
});

gulp.task("default", ["sass"]);
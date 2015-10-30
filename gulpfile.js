var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.product");

var hash = require('gulp-hash-filename');

gulp.task("webpack", function (callback) {
    // run webpack
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('rename', function () {
    return gulp.src('./public/build/*.js')
        .pipe(hash({
            "format": "{name}.{hash}{ext}"
        }))
        .pipe(gulp.dest('./public/dist/'))
});



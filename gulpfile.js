const gulp = require('gulp');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var pump = require('pump');
var uglify = require('gulp-uglify');


gulp.task("default", ["build"]);

gulp.task("build", ["build-lib"], function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./src/"));
});

gulp.task("build-lib", ["bower"], function(cb) {
    pump([
            gulp.src([
                "./bower_components/jquery/dist/jquery.js",
                "./bower_components/bootstrap/dist/js/bootstrap.min.js",
                "./bower_components/knockout/dist/knockout.js",
                "./bower_components/knockout-mapping/knockout.mapping.js",
                "./bower_components/knockout.punches/knockout.punches.js",
                "lib/enable_punches.js"
            ]),
            concat(('core.js')),
            uglify(),
            gulp.dest('./src/lib')
        ],
        cb
    );
});

gulp.task('bower', function() {
    return bower();
});
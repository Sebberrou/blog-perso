var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var critical = require('critical').stream;


gulp.task('default',['build:dev'],function(){

});

gulp.task('build:dev', ['less:dev','js:dev','img:dev','watch']);
gulp.task('build:prod', ['less:prod','js:prod', 'img:prod']);
 //LESS
gulp.task('less:prod', function(){
  return gulp.src('assets/less/main.less')
  .pipe(less())
  .pipe(clean())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('less:dev', function(){
  return gulp.src('assets/less/main.less')
  .pipe(concat('scripts.js'))
  .pipe(less())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function(){
  gulp.watch(['assets/less/**/*.less'], ['less:dev']);
  //gulp.watch(['assets/js/**/*.js'], ['js:dev']);
})

//IMAGES
gulp.task('img:prod', function(){
  return gulp.src('assets/img/*')
  .pipe(imagemin({
    progressive:true
  }))
  .pipe(gulp.dest('dist/img'))
});

gulp.task('img:dev', function(){
  return gulp.src('assets/img/*')
  .pipe(gulp.dest('dist/img'))
});

//JS
gulp.task('js:prod', function(){
  return gulp.src('assets/js/**/*.js')
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
});
gulp.task('js:dev', function(){
  return gulp.src('assets/js/script.js')
  .pipe(gulp.dest('dist/js'))
});


//CRITICAL
gulp.task('critical:prod', ['less:prod'], function(){
  return gulp.src('index-source.html')
  .pipe(critical({
    inline:true,
    minify:true,
    dest:'index.html'
  }))
});

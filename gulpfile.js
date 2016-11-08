var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var imageResize = require('gulp-image-resize');

gulp.task('images', function(){
 gulp.src(['img/profilepic.jpg','img/imgmin/minipizzeria.jpg','views/images/minipizzeria.jpg'])
  .pipe(imagemin({progressive:true,optimizationLevel :7}))
  .pipe(gulp.dest('img/imgmin'));
});

gulp.task('htmlmin',function(){
 gulp.src('index.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('indexmin'));
});

gulp.task('resize',function(){
 gulp.src('pizzeria.jpg')
  .pipe(imageResize({
      width : 750,
      height : 750,
       crop : true,
      upscale : false
    }))
 .pipe(gulp.dest('img/imgmin'));
});
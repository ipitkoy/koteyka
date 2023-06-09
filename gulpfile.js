import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

// Styles
export const styles = () => {
    return gulp.src('css/styles.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([]))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('css'))
}

// Build
export const build = gulp.series(

  gulp.parallel(
    styles    
  ),
);

// Default
export default gulp.series(
    gulp.parallel(
        styles       
    ));

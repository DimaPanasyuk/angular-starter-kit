const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const dest = gulp.dest;


const app = {
  modules: './node_modules/',
  js: ['./app/**/*.module.js', './app/**/*.js'],
  mainLess: './app/main.less',
  less: './app/**/*.less',
  partials: './app/**/*.html',
  build: { 
    normal: './dist',
    partials: './dist/partials'
  }
};

const modules = [
  app.modules + 'angular/angular.js',
  app.modules + 'angular-route/angular-route.js',
  app.modules + 'angular-resource/angular-resource.js',
  app.modules + 'lodash/lodash.js',
  app.modules + 'jquery/dist/jquery.js',
  app.modules + 'bootstrap/dist/js/bootstrap.js'
];

gulp.task('vendorJs', () => {
  return gulp.src(modules)
             .pipe(concat('vendor.js'))
             .pipe(dest(app.build.normal));
});

gulp.task('vendorCss', () => {
  return gulp.src(app.modules)
             .pipe(concat('vendor.css'))
             .pipe(dest(app.build.normal));
});

gulp.task('js', () => {
  return gulp.src(app.js)
             .pipe(concat('build.js'))
             .pipe(gulp.dest(app.build.normal));
});

gulp.task('less', () => {
  return gulp.src(app.mainLess)
             .pipe(less())
             .pipe(dest(app.build.normal));
});

gulp.task('partials', () => {
  return gulp.src(app.partials)
             .pipe(dest(app.build.partials));
});

gulp.task('watchPartials', ['partials'], () => {
  gulp.watch(app.partials, ['partials']);
});

gulp.task('watchJs', ['js'], () => {
  gulp.watch(app.js, ['js']);
});

gulp.task('watchLess', ['less'], () => {
  gulp.watch(app.less, ['less']);
});

gulp.task('sync', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch([
    `${app.build.normal}/**/*.{html,css,js}`,
    `./index.html`
  ]).on('change', browserSync.reload);
});

gulp.task('default', [
  'sync',
  'vendorJs',
  'vendorCss',
  'watchPartials',
  'watchLess',
  'watchJs'
]);

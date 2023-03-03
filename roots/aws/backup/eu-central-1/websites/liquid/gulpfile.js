const {src, dest, task, watch, series, parallel} = require('gulp');

// Gulp plugin
const   panini          = require('panini'),
        merge           = require('merge-stream'),
        newer           = require('gulp-newer'),
        del             = require('del'),
        rename          = require('gulp-rename'),
        concat          = require('gulp-concat'),
        sass            = require('gulp-sass'),
        beautify        = require('gulp-jsbeautifier'),
        imagemin        = require('gulp-imagemin'),
        postcss         = require('gulp-postcss'),
        autoprefixer    = require('autoprefixer'),
        purgecss        = require('@fullhuman/postcss-purgecss'),
        shorthand       = require('postcss-merge-longhand'),
        mediaquery      = require('postcss-combine-media-query'),
        browsersync     = require('browser-sync').create(),
        minify          = require('gulp-minifier'),
        validator       = require('gulp-w3c-html-validator');

// Clean dist folder
function cleanDist() {
    return del('dist')
};

// HTML compile task
function compileHtml() {
    return src('src/pages/**/*.hbs')
    .pipe(panini({
        root: 'src/pages/',
        layouts: 'src/layouts/',
        partials: 'src/partials/',
        helpers: 'src/helpers/',
        data: 'src/data/'
    }))
    .pipe(rename(path => path.extname = '.html'))
    .pipe(beautify({
        html: {
            file_types: ['.html'],
            max_preserve_newlines: 0,
            preserve_newlines: true,
        }
    }))
    // .pipe(validator())
    .pipe(dest('dist'))
};

// Css compile task
function compileCss() {
    return merge(
        // uikit.min.css compile task
        src('src/assets/scss/uikit.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('uikit.min.css'))
        .pipe(beautify({css: {file_types: ['.css']} }))
        .pipe(minify({minify: true, minifyCSS: true}))
        .pipe(dest('dist/css/vendors')),

        // style.css compile task
        src('src/assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(beautify({css: {file_types: ['.css']} }))
        .pipe(postcss([
            autoprefixer(),
            shorthand()
        ]))
        .pipe(dest('dist/css'))
    )
};

// Javascript concat task
function compileJs() {
    return merge(
        // config-theme.js
        src(['src/assets/js/*.js', '!src/assets/js/blockit/*.js'])
        .pipe(newer('dist/js/config-theme.js'))
        .pipe(beautify({js: {file_types: ['.js']} }))
        .pipe(dest('dist/js')),

        // blockit.min.js
        src('src/assets/js/blockit/*.js')
        .pipe(newer('dist/js/vendors/blockit.min.js'))
        .pipe(concat('blockit.min.js', {newLine: '\r\n\r\n'}))
        .pipe(minify({minify: true, minifyJS: {sourceMap: false}}))
        .pipe(dest('dist/js/vendors'))
    )
};

// Image optimization task
function compressImg() {
    return src('src/assets/img/*')
    .pipe(newer('dist/img'))
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 80, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ], {
        verbose: false
    }))
    .pipe(dest('dist/img'))
};

// Static assets task
function staticAssets() {
    return merge(
        // webfonts
        src('src/assets/fonts/*')
        .pipe(dest('dist/fonts')),

        // fontAwesome icons
        src([
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2'
        ])
        .pipe(dest('dist/fonts')),

        // favicon
        src('src/assets/static/favicon.ico')
        .pipe(dest('dist')),

        // apple touch icon
        src('src/assets/static/apple-touch-icon.png')
        .pipe(dest('dist')),

        // sendmail.php
        src('src/assets/php/sendmail.php')
        .pipe(dest('dist')),

        // uikit.min.js
        src('node_modules/uikit/dist/js/uikit.min.js')
        .pipe(dest('dist/js/vendors')),

        // js vendors
        src('src/assets/js/vendors/*.js')
        .pipe(dest('dist/js/vendors')),

        // css vendors
        src('src/assets/css/*')
        .pipe(dest('dist/css/vendors'))
    )
};

// Minify for production files
function minifyFiles() {
    return merge(
        // html minify
        src('dist/**/*.html')
        .pipe(beautify({
            html: {
                indent_char: "",
                eol: ""
            }
        }))
        .pipe(dest('dist')),

        // css minify
        src('dist/css/*.css')
        .pipe(postcss([
            mediaquery(),
            purgecss({
                content: ['dist/*.html', 'dist/js/**/*.js'],
                safelist: {standard: [/@m$/, /in-mobile-nav$/]}
            })
        ]))
        .pipe(minify({minify: true, minifyCSS: true}))
        .pipe(dest('dist/css')),

        // js minify
        src('dist/js/*.js')
        .pipe(minify({minify: true, minifyJS: {sourceMap: false}}))
        .pipe(dest('dist/js'))
    )
};

// Panini reload cache
function resetPages(done) {
    panini.refresh()
    done()
};

// Wacth file task
function wacthFiles() {
    watch('src/assets/scss/**/*.scss', series(compileCss))
    watch('src/assets/js/**/*.js', series(compileJs))
    watch('src/assets/img/**/*', series(compressImg))
    watch('src/**/*.hbs', series(resetPages, compileHtml))
    watch('src/data/*.json', series(resetPages, compileHtml))
};

// Browsersync file task
function browserReload() {
    browsersync.init({
        watch: true,
        notify: false,
        server: {
            baseDir: 'dist'
        }
    })
};

// Define task for gulp
task("build", series(cleanDist, compileHtml, compileCss, compileJs, staticAssets, compressImg))
task("watch", parallel(wacthFiles, browserReload))
task("minify", minifyFiles)

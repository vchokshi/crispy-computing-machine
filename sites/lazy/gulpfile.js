const {src, dest, task, watch, series, parallel} = require('gulp');

// Gulp plugin
const   del             = require('del'),
        browsersync     = require('browser-sync').create();

// Clean dist folder
function cleanDist() {
    return del('dist')
};

// Wacth file task
function wacthFiles() {
    watch('js/*.js')
    watch('index.html')
};

// Browsersync file task
function browserReload() {
    browsersync.init({
        watch: true,
        notify: false,
        server: {
            baseDir: '.'
        }
    })
};

// Define task for gulp
task("watch", parallel(wacthFiles, browserReload))

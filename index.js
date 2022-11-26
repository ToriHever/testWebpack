let sass = require('guip-sass')

function sassToCSS(done) {
    gulp.src('style.scss')
        .pipe(sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(rename({suffix: '.min'}))
    .pipe( gulp.dest('./css/'));
    done();
}
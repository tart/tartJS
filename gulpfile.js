var gulp = require('gulp');
var shell = require("gulp-shell");
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');

gulp.task('jsdoc', shell.task([
    'rm -rf ./docs',
    'jsdoc -c ./scripts/jsdoc-conf.json'
]));

gulp.task('gh-pages', ['jsdoc'], function() {
    var GH_TOKEN = process.env.GH_TOKEN || '';
    return gulp.src('./docs/**/*').
                pipe(ghPages({ remoteUrl: 'https://' + GH_TOKEN + '@github.com/tart/tartJS.git' }));	
});

gulp.task('travis-master', ['gh-pages']);

gulp.task('travis-pull-request', []);

gulp.task('travis', function(callback) { 
    var task = process.env.TRAVIS_PULL_REQUEST != 'false' ? 'travis-pull-request' : 'travis-master';
    runSequence(task, callback);	
});

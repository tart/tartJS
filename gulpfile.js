var gulp = require('gulp');
var shell = require("gulp-shell");
var runSequence = require('run-sequence');

var GH_TOKEN = process.env.GH_TOKEN || '';

gulp.task('jsdoc', shell.task([
    'rm -rf ./docs',
    'jsdoc -c ./scripts/jsdoc-conf.json'
]));

gulp.task('gh-pages', ['jsdoc'], shell.task([
    'mv docs docs_new',
    'git remote add upstream https://' + GH_TOKEN + '@github.com/tart/tartJS.git/',
    'git fetch upstream',
    'git checkout -b gh-pages upstream/gh-pages',
    'rm -rf docs',
    'mv docs_new docs',
    'git add docs',
    'git commit -m "Update documentation"',
    'git push upstream gh-pages',
    'git checkout master'
]));

gulp.task('travis-master', ['gh-pages']);

gulp.task('travis-pull-request', []);

gulp.task('travis', function(callback) { 
    var task = process.env.TRAVIS_PULL_REQUEST != 'false' ? 'travis-pull-request' : 'travis-master';
    runSequence(task, callback);	
});

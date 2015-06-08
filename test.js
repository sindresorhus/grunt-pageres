'use strict';
var test = require('ava');
var pathExists = require('path-exists');

test('pageres', function (t) {
	t.assert(pathExists.sync('tmp/yeoman.io-1000x1000.png'));
	t.assert(pathExists.sync('tmp/yeoman.io-100x100.png'));
	t.end();
});

test('multiple URLs', function (t) {
	t.assert(pathExists.sync('tmp/yeoman.io-1000x1000.png'));
	t.assert(pathExists.sync('tmp/google.com-1000x1000.png'));
	t.end();
});

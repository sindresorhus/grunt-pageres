'use strict';
var test = require('ava');
var del = require('del');
var pathExists = require('path-exists');

test(function (t) {
	t.assert(pathExists.sync('tmp/yeoman.io-1000x1000.png'));
	t.assert(pathExists.sync('tmp/yeoman.io-100x100.png'));
	del.sync('tmp');
	t.end();
});

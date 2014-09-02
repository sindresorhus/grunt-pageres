'use strict';
var test = require('ava');
var fs = require('fs');
var del = require('del');

test(function (t) {
	t.plan(2);
	t.assert(fs.existsSync('tmp/yeoman.io-1000x1000.png'));
	t.assert(fs.existsSync('tmp/yeoman.io-100x100.png'));
	del.sync('tmp');
});

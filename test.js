'use strict';
var fs = require('fs');

exports.pageres = {
	screenshot: function (test) {
		test.expect(2);

		test.ok(fs.existsSync('tmp/yeoman.io-1000x1000.png'));
		test.ok(fs.existsSync('tmp/yeoman.io-100x100.png'));

		test.done();
	}
};

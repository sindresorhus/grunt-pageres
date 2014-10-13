'use strict';
var Pageres = require('pageres');

module.exports = function (grunt) {
	grunt.registerMultiTask('pageres', 'Responsive website screenshots', function () {
		var done = this.async();
		var options = this.options();

		if (!options.url || !options.sizes || !options.dest) {
			grunt.warn('url|sizes|dest are required');
			done();
			return;
		}

		var pageres = new Pageres(options)
			.src(options.url, options.sizes)
			.dest(options.dest);

		pageres.run(function (err) {
			if (err) {
				grunt.warn(err);
				done();
				return;
			}

			pageres.successMessage();
			done();
		});
	});
};

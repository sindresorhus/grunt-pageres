'use strict';
var Pageres = require('pageres');
var arrify = require('arrify');

module.exports = function (grunt) {
	grunt.registerMultiTask('pageres', 'Responsive website screenshots', function () {
		var done = this.async();
		var options = this.options();

		// legacy
		if (options.url) {
			options.urls = options.url;
		}

		if (!options.urls || !options.sizes || !options.dest) {
			grunt.warn('url|sizes|dest are required');
			done();
			return;
		}

		// grunt uses the standard lodash template syntax already
		if (options.filename) {
			options.filename = options.filename.replace(/\{\{([^{]+)\}\}/g, '<%= $1 %>');
		}

		var pageres = new Pageres(options);

		arrify(options.urls).forEach(function (url) {
			pageres.src(url, options.sizes);
		});

		pageres.dest(options.dest)
			.on('warn', grunt.verbose.writeln);

		pageres
			.run()
			.then(function () {
				pageres.successMessage();
				done();
			})
			.catch(grunt.warn);
	});
};

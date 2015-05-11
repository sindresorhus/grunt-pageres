'use strict';
var Pageres = require('pageres');
var asyncLib = require('async');

module.exports = function (grunt) {
	grunt.registerMultiTask('pageres', 'Responsive website screenshots', function () {
		var done = this.async();
		var options = this.options();
		//If the old way of specifying url was using, just build a 1-element array.
		if(options.urls === undefined && option.url !== undefined) options.urls = [options.url];
		var allowedConcurrency = options.concurency || 2;

		asyncLib.eachLimit(options.urls, allowedConcurrency, function (url, next) {
			if (!url || !options.sizes || !options.dest) {
				grunt.warn('url|sizes|dest are required');
				done(false);
				return;
			}

			// grunt uses the standard lodash template syntax already
			if (options.filename) {
				options.filename = options.filename.replace(/\{\{([^{]+)\}\}/g, '<%= $1 %>');
			}

			var pageres = new Pageres(options)
				.src(url, options.sizes)
				.dest(options.dest)
				.on('warn', grunt.verbose.writeln);

			pageres.run(function (err) {
				if (err) {
					grunt.warn(err);
					next();
					return;
				}

				pageres.successMessage();
				next();
			});
		}, function(){
			grunt.log.writeln("Finished pageres task");
			done();
		});
	});
};

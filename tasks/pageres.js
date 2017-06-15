'use strict';
const Pageres = require('pageres');
const arrify = require('arrify');

module.exports = grunt => {
	grunt.registerMultiTask('pageres', 'Capture website screenshots', function () {
		const done = this.async();
		const options = this.options();

		// Legacy
		if (options.url) {
			throw new Error('The `url` option is no longer available. Use the `urls` option.');
		}

		if (!options.urls || !options.sizes || !options.dest) {
			grunt.warn('url|sizes|dest are required');
			done();
			return;
		}

		// Grunt uses the standard lodash template syntax already
		if (options.filename) {
			options.filename = options.filename.replace(/\{\{([^{]+)\}\}/g, '<%= $1 %>');
		}

		const pageres = new Pageres(options);

		arrify(options.urls).forEach(url => {
			pageres.src(url, options.sizes);
		});

		pageres.dest(options.dest)
			.on('warn', grunt.verbose.writeln);

		pageres
			.run()
			.then(() => {
				pageres.successMessage();
				done();
			})
			.catch(grunt.warn);
	});
};

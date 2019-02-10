'use strict';
const Pageres = require('pageres');
const arrify = require('arrify');

module.exports = grunt => {
	grunt.registerMultiTask('pageres', 'Capture website screenshots', function () {
		const done = this.async();
		const options = this.options();

		if (!options.urls || !options.sizes || !options.dest) {
			grunt.warn('The `url`, `sizes`, and `dest` options are required');
			done();
			return;
		}

		// Grunt uses the standard lodash template syntax already
		if (options.filename) {
			options.filename = options.filename.replace(/\{\{([^{]+)\}\}/g, '<%= $1 %>');
		}

		const pageres = new Pageres(options);

		for (const url of arrify(options.urls)) {
			pageres.src(url, options.sizes);
		}

		pageres.dest(options.dest);

		(async () => {
			try {
				await pageres.run();
				pageres.successMessage();
				done();
			} catch (error) {
				grunt.warn(error);
			}
		})();
	});
};

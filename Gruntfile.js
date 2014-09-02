'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		pageres: {
			screenshot: {
				options: {
					url: 'yeoman.io',
					sizes: ['1000x1000', '100x100'],
					dest: 'tmp'
				}
			}
		},
		clean: {
			test: ['tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'pageres']);
};

'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		pageres: {
			screenshot: {
				options: {
					urls: 'yeoman.io',
					sizes: ['1000x1000', '100x100'],
					dest: 'tmp'
				}
			},
			multipleUrls: {
				options: {
					urls: ['yeoman.io', 'google.com'],
					sizes: ['1000x1000'],
					dest: 'tmp'
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['pageres']);
};

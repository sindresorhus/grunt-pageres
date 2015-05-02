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
		}
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['pageres']);
};

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
		nodeunit: {
			tasks: ['test.js']
		},
		clean: {
			test: ['tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', ['clean', 'pageres', 'nodeunit', 'clean']);
};

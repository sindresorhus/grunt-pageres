'use strict';
module.exports = grunt => {
	grunt.initConfig({
		pageres: {
			screenshot: {
				options: {
					urls: 'https://sindresorhus.com',
					sizes: [
						'1000x1000',
						'100x100'
					],
					dest: 'temp'
				}
			},
			multipleUrls: {
				options: {
					urls: [
						'https://github.com',
						'https://google.com'
					],
					sizes: [
						'1000x1000'
					],
					dest: 'temp'
				}
			},
			filenameOption: {
				options: {
					urls: [
						'https://sindresorhus.com'
					],
					sizes: [
						'1000x1000'
					],
					filename: 'filename-option-{{url}}',
					dest: 'temp'
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['pageres']);
};

'use strict';

module.exports = function (grunt) {

	grunt.registerTask('use-the-force', 'turns the --force option ON',
		function () {
			if (!grunt.option('force')) {
				grunt.config.set('forceStatus', true);
				grunt.option('force', true);
			}
		});

	grunt.registerTask('disturb-the-force', 'turns the --force option OFF',
		function () {
			if (grunt.config.get('forceStatus')) {
				grunt.option('force', false);
			}
		});

};

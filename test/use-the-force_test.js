'use strict';

var grunt = require('grunt');

exports.useTheForce = {
	enable: function (test) {
		test.expect(1);
		grunt.loadTasks('use-the-force');
		grunt.option('force', false);
		grunt.task.run('use-the-force');

		test.equal(grunt.option('force'), true, 'should have the force flag as true');

		test.done();
	},
	disable: function (test) {
		test.expect(1);
		grunt.loadTasks('distrub-the-force');

		grunt.option('force', true);
		grunt.task.run('distrub-the-force');

		test.equal(grunt.option('force'), false, 'should have the force flag as false');

		test.done();
	}
};

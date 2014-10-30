module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        jshint: {
            files: ['Gruntfile.js', 'app/scripts/app.js'],
            controllers: 'app/scripts/controllers/*.js',
            services: 'app/scripts/services/*.js',
            directives: 'app/scripts/directives/*.js',

            options: {
                node: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                indent: 4,
                latedef: 'nofunc',
                validthis: true,

                globals: {
                    app: true,
                    angular: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};

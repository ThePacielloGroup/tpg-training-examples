'use strict';

module.exports = function (grunt) {
    /**
     * load all grunt tasks matching the `grunt-*` pattern
     * This means any tasks that DO NOT match the `grunt-*` pattern
     * need to be added here
     */
    require('load-grunt-tasks')(grunt);

    // Show elapsed time at the end
    require('time-grunt')(grunt);

    grunt.util.linefeed = '\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner: {
            compact: '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> */',
            full: '/*!\n' +
                ' * <%= pkg.name %> || <%= pkg.title %> - v<%= pkg.version %> \n' +
                ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
                ' */\n'
        },

        datetime: Date.now(),

        // every 'clean' does a dump of the existing 'dist' folder content
        clean: ['dist/*'],

        watch: {

            concat: {
                options: {
                    separator: grunt.util.linefeed
                },

                css: {
                    files: {
                        'src/assets/sass/<%= pkg.name %>.scss': [
                            'src/assets/sass/mixins.scss',
                            'src/assets/sass/helper_classes.scss',
                            'src/assets/sass/typography.scss',
                            'src/assets/sass/grid.scss',
                            'src/assets/sass/tables.scss',
                            'src/assets/sass/forms.scss',
                            'src/assets/sass/global.scss',
                            'src/assets/sass/theme.scss'
                        ]
                    }
                },
            },

            sass: {
                files: {
                    'dist/assets/css/<%= pkg.name %>.css': 'src/assets/sass/<%= pkg.name %>.scss'
                },
                tasks: ['sass']
            },

            script: {
                files: '<%= jshint.src %>',
                tasks: ['jshint', 'jscs']
            },
        },

        concat: {
            options: {
                separator: grunt.util.linefeed
            },

            css: {
                files: {
                    'src/assets/sass/<%= pkg.name %>.scss': [
                        'src/assets/sass/mixins.scss',
                        'src/assets/sass/helper_classes.scss',
                        'src/assets/sass/typography.scss',
                        'src/assets/sass/grid.scss',
                        'src/assets/sass/tables.scss',
                        'src/assets/sass/forms.scss',
                        'src/assets/sass/global.scss',
                        'src/assets/sass/theme.scss'
                    ]
                }
            },
        },

        sass: {
            dist: {
                files: {
                    'dist/assets/css/<%= pkg.name %>.css': 'src/assets/sass/<%= pkg.name %>.scss'
                }
            }
        },

        jsonlint: {
            configFiles: {
                src: ['.bowerrc',
                    '.jshintrc',
                    'jscs.json',
                    'package.json'
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: ['Gruntfile.js',
                'src/assets/js/common.js']
        },

        jscs: {
            src: '<%= jshint.src %>',
            options: {
                config: 'jscs.json'
            }
        },

        copy: {
            files: {
                cwd: 'src',  // set working folder / root to copy
                src: ['**/*', '!**/sass/**', '!**/example/**'], // copy all files and subfolders
                //src: ['**/*', '!**/sass/**', '!**/example/**', '!**/theme-test/**'], // copy all files and subfolders
                dest: 'dist/',    // destination folder
                expand: true           // required when using cwd
            }
        }
    });

    grunt.registerTask('dist', ['jshint', 'jscs', 'clean', 'concat', 'sass', 'copy']);
    grunt.registerTask('lint', ['jshint', 'jscs']);
    grunt.registerTask('default', ['dist', 'lint']);
};

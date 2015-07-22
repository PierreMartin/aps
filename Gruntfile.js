module.exports = function(grunt) {

    // Plugin qui permet d'appeler tous les "grunt.loadNpmTasks" en 1 ligne :
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        //////////////////////////////// JS VERIFE ////////////////////////////////
        jshint: {
            all: [
                // ON VERIFE :
                'dist/js/*.js',
                'dist/slide/*.js',
                'dist/intro/*.js',

                // ON EXCLUE LES MINIFIER :
                '!dist/js/min.libs.js',
                '!dist/js/min.slider.js',
                '!dist/js/min.main.js',
                '!dist/js/min.pagehome.js',
                '!dist/js/min.intro.js',

                // ON EXCLUE LES LIBS :
                '!dist/slide/modernizr.custom.js',
                '!dist/slide/classie.js',
                '!dist/intro/classie.js',
                '!dist/js/jquery-1.11.2.min.js',
                '!dist/js/velocity.js',
                '!dist/js/jquery.sticky.js',
                '!dist/js/jquery.easing.1.3.js'
            ]
        },

        //////////////////////////////// JS ////////////////////////////////
        uglify: {
            options: {
                mangle: false // option qui permet d'éviter les erreurs avec Angular
            },
            main_js: {
                files: {
                    'dist/js/min.main.js': [
                        'dist/js/menu_mobile.js',
                        'dist/js/main.js',
                        '!dist/js/min.*.js'
                    ]
                }
            },
            libs_js: {
                files: {
                    'dist/js/min.libs.js': [
                        'dist/js/jquery-1.11.2.min.js',
                        'dist/js/jquery.easing.1.3.js',
                        'dist/js/velocity.js',
                        '!dist/js/min.*.js'
                    ]
                }
            },
            slider_js: {
                files: {
                    'dist/js/min.slider.js': [
                        'dist/slide/modernizr.custom.js',
                        'dist/slide/classie.js',
                        'dist/slide/main.js',
                        '!dist/js/min.*.js'
                    ]
                }
            },
            page_home_js: {
                files: {
                    'dist/js/min.pagehome.js': [
                        'dist/js/anim_scroll.js',
                        'dist/js/references.js',
                        '!dist/js/min.*.js'
                    ]
                }
            },
            intro_js: {
                files: {
                    'dist/js/min.intro.js': [
                        'dist/intro/classie.js',
                        'dist/intro/svganimations.js',
                        '!dist/js/min.*.js'
                    ]
                }
            }
        },


        //////////////////////////////// CSS ////////////////////////////////
         cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            main_css: {
                files: {
                    'dist/css/min.main.css': [
                        'dist/css/reset.css',
                        'dist/css/styles.css',
                        '!dist/css/min.*.css'
                    ]
                }
            },
            intro_css: {
                files: {
                    'dist/css/min.intro.css': [
                        'dist/intro/style.css',
                        '!dist/css/min.*.css'
                    ]
                }
            },
            slider_css: {
                files: {
                    'dist/css/min.slider.css': [
                        'dist/css/scroll.css',
                        'dist/css/headline.css',
                        'dist/slide/component.css',
                        '!dist/css/min.*.css'
                    ]
                }
            },
            pagehome_css: {
                files: {
                    'dist/css/min.pagehome.css': [
                        'dist/css/animation_iso.css',
                        'dist/css/clouds.css',
                        'dist/css/fumee.css',
                        'dist/css/tooltip-line.css',
                        'dist/css/cursor.css',
                        'dist/css/references.css',
                        '!dist/css/min.*.css'
                    ]
                }
            },
            nav_css: {
                files: {
                    'dist/css/min.nav.css': [
                        'dist/css/nav.css',
                        'dist/css/menu_mobile.css',
                        'dist/css/menu_cross_icon.css',
                        '!dist/css/min.*.css'
                    ]
                }
            },
            query_css: {
                files: {
                    'dist/css/min.query.css': [
                        'dist/css/queries.css',
                        '!dist/css/min.*.css'
                    ]
                }
            },
            pages_css: {
                files: {
                    'dist/css/min.pages.css': [
                        'dist/css/pages.css',
                        '!dist/css/min.*.css'
                    ]
                }
            }
        },

        //////////////////////////////// WATCH ////////////////////////////////
        watch: {
            js: {
                files: ['dist/js/*.js', '!dist/js/min.*.js'],
                tasks: ['uglify'],
                options: { spawn: false, },
            },
            css: {
                files: ['dist/css/*.css', '!dist/css/min.*.css'],
                tasks: ['cssmin'],
                options: { spawn: false, },
            },
        }




    });


    // grunt.loadNpmTasks('grunt-serve');

    // LANCEUR POUR LIGNES DE COMMANDE :
    grunt.registerTask('default', [
        'uglify:main_js',
        'uglify:libs_js',
        'uglify:slider_js',
        'uglify:page_home_js' ,
        'uglify:intro_js',

        'cssmin:main_css',
        'cssmin:intro_css',
        'cssmin:slider_css',
        'cssmin:pagehome_css',
        'cssmin:nav_css',
        'cssmin:query_css',
        'cssmin:pages_css'
    ]);


    // # grunt
    // # grunt watch

};

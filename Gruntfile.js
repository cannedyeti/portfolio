module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      watch: {
        css: {
            files: ['scss/*.scss', 'index.html', 'js/*.js'],
            tasks: ['sass']
        },
      },
      sass: {                              // Task
        dist: {                            // Target
          files: {                         // Dictionary of files
            'css/style.css': 'scss/*scss',       // 'destination': 'source'
          }
        }
      },
      browserSync: {
        bsFiles: {
            src : [
                'css/*.css',
                'index.html',
                'js/*.js'
            ]
        },
        options: {
            reloadOnRestart: true,
            watchTask: true,
            server: {
                baseDir: './'
            }
        }
    }
    });
  
    // Load the plugin that provides the "scss" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
  
    // Default task(s).
    grunt.registerTask('default', ['browserSync', 'sass', 'watch']);
  
  };
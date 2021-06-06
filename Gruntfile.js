const sass = require('node-sass');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      sass: {
        dist: {
          files: {
            'style/main.css' : 'style/scss/main.scss'
          }
        }
      },

      watch: {
        grunt: { files: ['Gruntfile.js'] },
  
        sass: {
          files: ['style/scss/**/*.scss', ['script/*.js']],
          tasks: ['sass']
        }
      }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    // Default task(s).
    grunt.registerTask('compile', ['sass']);
    grunt.registerTask('default', ['watch']);
  
  };
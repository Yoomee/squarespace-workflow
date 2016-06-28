module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      build: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/styles.css': 'sass/styles.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'assets/styles.css': 'assets/styles.css'
        }
      }
    },

    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass:build', 'autoprefixer']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['sass:build', 'autoprefixer']);
  grunt.registerTask('build', ['sass:build', 'autoprefixer']);

};

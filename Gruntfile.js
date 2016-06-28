module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        options: {
          sourcemap: 'auto',
          style: 'expanded'
        },
        files: {
          'assets/styles.css': 'sass/styles.scss'
        }

      },
      dist: {
        options: {
          sourcemap: 'none',
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
        tasks: ['sass:dev', 'autoprefixer']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['sass:dev', 'autoprefixer']);
  grunt.registerTask('dist', ['sass:dist', 'autoprefixer']);

};

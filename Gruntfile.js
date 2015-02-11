module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
        dist: {
          options: {
            style: 'expanded',
            sourcemap: false
          },
          files: {
            'css/stretch.css': 'scss/stretch.scss'
          }
        },
        dev: {
          options: {
            sourcemap: false
          }
        }
    },

    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}

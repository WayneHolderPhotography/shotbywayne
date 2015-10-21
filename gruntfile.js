module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'css/style.css': 'sass/main.scss'
        }
      }
    },

    watch: {
      dist : {
        files: ['sass/*'],
        tasks: ['sass:dev']
      }
    },
  });

  grunt.registerTask('default', ['watch']);
}
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.initConfig({
    ngdocs: {
      all: ['app.js', 'areas/**/*.js', 'directives/**/*.js', 'services/**/*.js']
    }
  });
}
module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      dev: {
        files: 'public/**',
        tasks: ['copy']
      }
    },
    copy: {
      tmp: {
        files: [{
          src: ['**'],
          cwd: 'public/',
          dest: '.tmp/',
          expand: true
        },
        {
          src: ['bower_components/**'],
          dest: '.tmp/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
}

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'spicearraybuffer.js', 
          'enums.js', 
          "atKeynames.js",
          "utils.js",
          "png.js",
          "lz.js",
          "quic.js",
          "bitmap.js",
          "spicedataview.js",
          "spicetype.js",
          "spicemsg.js",
          "wire.js",
          "spiceconn.js",
          "display.js",
          "port.js",
          "main.js",
          "inputs.js",
          "webm.js",
          "playback.js",
          "simulatecursor.js",
          "cursor.js",
          "thirdparty/jsbn.js",
          "thirdparty/rsa.js",
          "thirdparty/prng4.js",
          "thirdparty/rng.js",
          "thirdparty/sha1.js",
          "ticket.js",
          "resize.js",
          "filexfer.js"
        ],
        dest: 'dist/spice-html5.js',
      },
    },
    uglify: {
      options: {
        output: {
          comments: "all"
        }
      },
      build: {
        src: 'dist/spice-html5.js',
        dest: 'dist/spice-html5.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat', 'uglify']);
};
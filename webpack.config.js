var options = require('./webpack.base.js');
    options.entry = './src';
    options.output = {
      library: 'VueCirleMenu',
      libraryTarget: 'umd',
      filename: 'CircleMenu.js',
      path: './dist'
    };
    options.externals = {
      vue: 'Vue'
    };
module.exports = options;


module.exports = {
  module: {
    loaders: [
      {
          test: /\.vue$/,
          loader: 'vue'
      }, {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
      }, {
          test: /\.css$/,
          loader: 'style!css!autoprefixer'
      }, {
          test: /\.less$/,
          loader: 'style!css!less'
      }
    ]
  },
  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ],
    loaders: {
        js: 'babel'
      }
    }
};

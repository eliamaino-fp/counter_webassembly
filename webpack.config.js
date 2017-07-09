var config = {
    entry: './src',
    output: {
        path: '/Users/elia.maino/Desktop/webpack_example/dist',           // folder path
        filename: 'index.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
        	test: /\.wasm$/,
        	loaders: ['wasm-loader']
        }
      ]
    }
}
module.exports = config;
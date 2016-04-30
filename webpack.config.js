module.exports = {
  entry: "./index.jsx",
  output: {
      filename: "dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets:['es2015', 'react']
        }
      }
    ]
  }
}

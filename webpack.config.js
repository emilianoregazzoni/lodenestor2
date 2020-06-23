const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'to-do-list': './app/client/to-do-list.js',
        'to-do-list-new': './app/client/to-do-list-new.js',
        'new-company':'./app/client/new-company.js',
        'view-companies' :'./app/client/view-companies.js',
        'lodenestor':'./app/client/lodenestor.js',
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: [".js", ".jsx"]
          },
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/, 
          loader: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin()
    ]
};
const path = require('path');
const portFinderSync = require('portfinder-sync');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
   return path.join(__dirname, '..', dir)
}

module.exports = {
   entry: { app: './src/index.js' },
   output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].[hash].js',
   },
   devServer: {
      contentBase: './build',
      port: portFinderSync.getPort(3000),
      hot: true,
   },
   resolve: {
      // These are the reasonable defaults supported by the Node ecosystem.
      // We also include JSX as a common component filename extension to support
      // some tools, although we do not recommend using it, see:
      // https://github.com/facebookincubator/create-react-app/issues/290
      // `web` extension prefixes have been added for better support
      // for React Native Web.
      extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
      alias: {
        'app': resolve('src/app'),
        'img': resolve('src/img'),
        'router': resolve('src/router'),
        '@': resolve('src/app/components'),
        'bootstrap': resolve('node_modules/bootstrap'),
        'modules': resolve('node_modules'),
        'store': resolve('src/store'),
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
      },
    },
   module: {
      rules: [
         {
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader',
         },
         {
            test: /\.html$/,
            use: [
               {
                  loader: 'html-loader',
                  options: { minimize: false },
               },
            ],
         },
         {
            test: /\.(scss|css)$/,
            use: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: { sourceMap: true, importLoaders: 1 },
               },
               { loader: "sass-loader", options: { sourceMap: true } },
            ],
         },
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         title: 'React Bootstrap App',
         template: './src/index.html'
      })
   ]
}
var webpack = require('webpack');
var path = require('path');
// var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

// var nodeModules = {};
// fs.readdirSync('node_modules')
  // .filter(function(x) {
    // return ['.bin'].indexOf(x) === -1;
  // })
  // .forEach(function(mod) {
    // nodeModules[mod] = 'commonjs ' + mod;
  // });

  
module.exports = {
  entry: './init/bin/www',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'www.js'
  },
  externals: [nodeExternals({
	  modulesDir:'init/node_modules',
	  whitelist:[],
	  binaryDirs:[]
  }),{
	  '../cfg/sett':'require("./sett")'
  }],
  plugins: [
    //new webpack.IgnorePlugin(/\.(css|less)$/),
    //new webpack.BannerPlugin('require("source-map-support").install();',
    //                         { raw: true, entryOnly: false }),
	new UglifyJsPlugin({
            // compressor: {
                // warnings: false,
                // screw_ie8: true
            // },
            // //mangle: false
            // mangle:{
                // screw_ie8: true,
                // except: ['RouterLink', 'NgFor', 'NgModel']
            // },
            comments: false
            // https://github.com/AngularClass/angular2-webpack-starter/commit/1a4edb9693d60ae3b39810bb75b4199123b798ad
            // disable mangling because of a bug in angular2 beta.1, beta.2 and beta.3
            // TODO(mastertinner): enable mangling as soon as angular2 beta.4 is out
            // mangle: { screw_ie8 : true },//prod
        })
  ],
  devtool: 'sourcemap'
}
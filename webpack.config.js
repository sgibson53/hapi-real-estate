var webpack = require("webpack");
var path = require('path');


module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "./module.js"
    },
  	module: {
  	  loaders: [
    		{
    		  test: /\.jsx|\.js?$/,
    		  exclude: /(node_modules|bower_components)/,
    		  loader: 'babel', // 'babel-loader' is also a legal name to reference
    		  query: {
    			     presets: ['react', 'es2015']
    		  }
    		},

        { test: /\.json$/, loader: 'json-loader' }

  	  ]
  	},

    resolve: {
          root: [
              __dirname+'/node_modules'
          ],
          extensions: ['', '.js', '.json', '.jsx'],
          alias: {
            "jquery-ui": "jquery-ui/jquery-ui.js"
          }
      },

  	plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new webpack.ProvidePlugin({
            React: "react",
            "window.React": "react"
        })

        /*new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })*/
  	]
};

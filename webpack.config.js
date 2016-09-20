var webpack = require("webpack");
var path = require('path');

var lib_dir = __dirname + '/public/libs',
    node_dir = __dirname + '/node_modules';


module.exports = {
    resolve: {
      alias: {
        react: node_dir + '/react',
        reactDom: node_dir + '/react-dom',
        // jqueryUI: lib_dir + '/jquery-ui.min.js'
      }
    },
    entry: {
      app: ["./src/main.js"],
      // vendors: ['react', 'reactDom', 'jqueryUI']
    },
    output: {
        path: __dirname,
        filename: "./module.js"
    },
  	module: {
      noParse: [
        // new RegExp(lib_dir + '/jquery-ui.min.js')
      ],
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

  	plugins: [
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': "jquery"
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

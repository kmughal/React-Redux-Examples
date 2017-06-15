var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context : __dirname,
    entry: './redux-mvc/index.js',
     output: { path: path.join(__dirname , "dist"), filename: 'bundle.js' },
     module: {   
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }] 
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./templates/index.html'})
    ]
};
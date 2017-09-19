const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.config");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// VENDOR
let vendor = {
    name: "vendor",
    entry: ["angular", "jquery", "oclazyload", "bootstrap", "@uirouter/angularjs", 'angular-sanitize', 'angular-block-ui'],
    output: {
        path: path.join(__dirname, config.outputPath),
        publicPath: '/',
        filename: "js/vendor.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ]
};

// PLUGINS
let plugins = {
    name: "plugins",
    entry: ["devextreme/dist/js/dx.all", "fusioncharts", path.join(__dirname, '/libs/fusioncharts/angular-fusioncharts.min.js')],
    output: {
        path: path.join(__dirname, config.outputPath),
        publicPath: '/',
        filename: "js/plugins.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ]
};

// APP
let app = {
    name: "app",
    module: config.module,
    resolve: config.resolve,
    entry: ['babel-polyfill', path.join(__dirname, 'client/app/app.js')],
    output: {
        path: path.join(__dirname, config.outputPath),
        publicPath: '/',
        filename: "js/app.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin("css/[name].min.css", { allChunks: true })
    ]
};

module.exports = [vendor, plugins, app];
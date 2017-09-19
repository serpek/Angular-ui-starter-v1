const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = {
    outputPath: '/dist',
    resolve: {
        modules: ['node_modules', 'client'],
        extensions: ['.js', '.json', '.css', '.scss'],
        descriptionFiles: ['package.json'],
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'ng-annotate-loader' },
                    { loader: 'babel-loader' }
                ]
            }, {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
                exclude: /(node_modules)/,
                loader: 'url-loader?limit=100&name=images/[name].[ext]'
            }, {
                test: /\.html$/,
                loader: 'raw-loader'

            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            }, {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
}

module.exports = baseConfig;
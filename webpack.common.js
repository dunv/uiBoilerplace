const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackVariables = require('./webpack.variables');

const config = {
    entry: {
        app: ['./src/app.tsx'],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.less', '.css'],
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
            { test: /\.js$/, enforce: 'pre', loader: 'source-map-loader' },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
                'apple-mobile-web-app-capable': 'yes',
            },
            title: webpackVariables?.appTitle || 'PLEASE DEFINE TITLE IN webpack.variabes.js',
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = config;

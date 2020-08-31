const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DefinePlugin = require('webpack').DefinePlugin;

const common = require('./webpack.common.js');
const envVars = require('./src/envVars.js').production;

module.exports = merge.smart(common, {
    mode: 'production',
    stats: 'errors-warnings',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.global\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: '@teamsupercell/typings-for-css-modules-loader', options: { formatter: 'prettier' } },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'less-loader', options: { modules: true } },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    plugins: [
        new DefinePlugin(envVars), // lets us inject env-dependent variables
        // new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            // creates a separate css-file for css
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].css',
        }),
    ],
});

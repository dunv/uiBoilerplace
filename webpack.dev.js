const merge = require('webpack-merge');
const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;

const common = require('./webpack.common.js');
const envVars = require('./src/envVars.js').development;

module.exports = merge.smart(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'app.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.global\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true } }],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: '@teamsupercell/typings-for-css-modules-loader', options: { formatter: 'prettier' } },
                    { loader: 'css-loader', options: { modules: { localIdentName: '[path][name]__[local]' }, sourceMap: true } },
                    { loader: 'less-loader', options: { modules: true, sourceMap: true } },
                ],
            },
        ],
    },
    plugins: [new DefinePlugin(envVars)],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 3000,
        stats: 'minimal',
    },
});

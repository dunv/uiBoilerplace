const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    entry: {
        app: ['./src/App.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.less', '.css'],
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
            { test: /\.js$/, enforce: 'pre', loader: 'source-map-loader' },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: '@teamsupercell/typings-for-css-modules-loader',
                        options: { formatter: 'prettier' },
                    },
                    {
                        loader: 'css-loader',
                        options: { modules: { localIdentName: '[path][name]__[local]' }, sourceMap: true },
                    },
                    {
                        loader: 'less-loader',
                        options: { modules: true, sourceMap: true },
                    },
                ],
            },
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
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = config;

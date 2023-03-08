const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            Pages: path.resolve(__dirname, 'src/pages/'),
            Utilities: path.resolve(__dirname, 'src/utils/'),
            Hooks: path.resolve(__dirname, 'src/hooks/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Assets: path.resolve(__dirname, 'src/assets/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                use: 'raw-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
    },
};
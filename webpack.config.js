const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    devServer: {
        host: '192.168.1.56',
        port: 3010,
        contentBase: ':/dist',
        disableHostCheck: true,
        stats: { colors: true },
        historyApiFallback: true
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx']
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                exclude: /node_modules/,
                use: ['file-loader'],
                resolve: {
                    extensions: ['.png', '.jpg', '.jpeg']
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

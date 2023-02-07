const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/pages', 'index.js'),
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 3010,
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
        publicPath: '',
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                        ],
                        
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/img/[hash][ext][query]'
                  } 
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]]'
                  } 
            }
        ]
    },
      optimization: {
          minimizer: [
            new ImageMinimizerPlugin({
               minimizer: {
                 implementation: ImageMinimizerPlugin.imageminMinify,
                 options: {
                     plugins: [
                       ['gifsicle', { interlaced: true }],
                       ['jpegtran', { progressive: true }],
                       ['optipng', { optimizationLevel: 5 }],
                       ['svgo', { name: 'preset-default' }],
                     ],
                   },
                 },
               }),
             ],
           },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'template.html'),
        filename: 'index.html',
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                delete: ['dist'],
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        ],
}
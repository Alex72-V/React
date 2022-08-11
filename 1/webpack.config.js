const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, "dist") //создать папку
        },
        compress: true,
        port: 3000 //порт через который потом подключатся

    },
    mode: 'development',//тип разработки
    entry: {
        main: './index.js' //точка входа
    },
    context: path.resolve( __dirname, "src"),
    output: {// точка выхода (бангл создаётся)
        filename: "[name].[contenthash].js",// contenthash - хэш
        path: path.resolve(__dirname, 'dist') // путь куда бангл сохранится
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }
}
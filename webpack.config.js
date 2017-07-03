//更改javascript css 页面自动刷新
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    //起始文件夹
    context: __dirname,
    entry: {
        //入口打包文件
        index: './js/index.js'
    },
    //输出文件
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
        publicPath: "/",            // New
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: './index.html'
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
        new OpenBrowserPlugin({ 
            url: 'http://localhost:8080' 
        }),
    ],
    //服务器启动页面index.html所在文件夹
    devServer: {
        contentBase: __dirname,  // New
    },
    //CSS Modules
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

};



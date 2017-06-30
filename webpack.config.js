//更改javascript css 页面自动刷新
const webpack = require('webpack');
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
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],
};



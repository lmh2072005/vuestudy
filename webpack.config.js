
/**
 * Created by Administrator on 16-8-22.
 * 通过webpack --config xxx.js调用不同的config
 * webpack 把所有的资源都当成了一个模块, CSS,Image, JS 字体文件等
 * https://webpack.github.io/
 */
const webpack = require('webpack'); //webpack
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //合并独立的css文件插件
var path = require('path');
module.exports = {
    entry: {
        testComponent : './src/js/controllers/test.js',
        main : './src/js/main.js',
        asyncComponent : './src/js/controllers/require-vue.js',
        img : './src/js/controllers/img.js'
    },
    output: {  //打包后的输出目录
        path: __dirname+'/bin',
        filename: '[name].js', //[hash] 、[chunkhash](根据内容生成md5值)
        chunkFilename:'[name].chunk.js', //require.ensure用到，生成chunk的名字
        publicPath:'../../bin/'  //require.ensure用到，相对路径，require.ensure会从publicPath加载文件,不写则默认是当前配置文件目录
    },
    //devtool: "#source-map",  //生成对应的map文件
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
             compress: {
                warnings: false //压缩时是否显示告警信息
             },
             output: {
                comments: false //压缩后的文件是否有注释
             }
         })
        /*new webpack.optimize.CommonsChunkPlugin({
         name: 'commons', //和配置的entry入口对应
         filename: "commons.js", //输出的文件名
         minChunks: Infinity //指一个文件至少被require几次才会被放到CommonChunk里，这一项一定要设置否则生成的common.js不会包含公共的文件
         // (Modules must be shared between 2 entries)

         // chunks: ["pageA", "pageB"], //只提炼pageA、pageB里的公共文件
         }),*/
        //new ExtractTextPlugin("[name].css")
    ],
    module:{
        loaders:[
            {
                test: /(\.png|\.jpg)$/,
                loader: "url-loader?limit=10240"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"  //针对.css文件用2个加载器预处理(!号隔开多个加载器)
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.vue$/,
                loader: "vue"
            }
            //{test:/\.css$/, loader:ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    babel: {
        // 告诉babel你要解析的语言
        presets: ['es2015']
    },
    resolve :{
        extentions:["","js","vue"], //当requrie的模块找不到时，添加这些后缀
        alias : {
            'vue' : path.join(__dirname, 'src/js/lib/vue.js') //__dirname当前目录，path.join路径合并
        }
    }
};

/*webpack uglify
vue*/
 /*http://javascript.ruanyifeng.com/nodejs/packagejson.html   package学习教程*/
/*https://www.zhihu.com/question/29289483 开源协议*/
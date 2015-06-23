var Path = require("path");
var ExtractTextPlugin  = require("extract-text-webpack-plugin");

module.exports = {
    context: Path.join(__dirname, "js"),
    entry: ['webpack/hot/dev-server', "./bootstrap.jsx"],
    output: {
        path: Path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "http://localhost:8080/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    resolve: {
        root: __dirname,
        extensions: ["", ".webpack.js", ".web.js", ".js", ".less", ".jsx"]
    },
    devServer: {
        contentBase: __dirname,
        noInfo: true, //  --no-info option
        hot: true
        //,inline: true
    }
	
};
var Path = require("path");
var ExtractTextPlugin  = require("extract-text-webpack-plugin");

module.exports = {
    context: Path.join(__dirname, "js"),
    entry: ['webpack/hot/dev-server', "./main.jsx"],
    output: {
        path: Path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    resolve: {
        root: __dirname,
        extensions: ["", ".webpack.js", ".web.js", ".js", ".less"]
    },
    devServer: {
        contentBase: __dirname,
        noInfo: true, //  --no-info option
        hot: true
        //,inline: true
    }
	
};
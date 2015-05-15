var Path = require("path");

module.exports = {
    context: Path.join(__dirname, "js"),
    entry: "./main.jsx",
    output: {
        path: Path.join(__dirname, "js"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
	
};
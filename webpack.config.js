var path = require("path");
var HTMLPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader" },
			{ test: /\.css$/, use: [ "style-loader", "css-loader" ] }
		]
	},
	mode: "development",
	devServer: {
		open: false,
		port: 3000,
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: true,
			assets: true,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: false,
			warnings: true,
			publicPath: false
		}
	},
	plugins: [
		new HTMLPlugin({ template: "src/index.html" })
	]
}


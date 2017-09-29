const path = require('path');

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development'; // for babel preset react-app to work
}

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),

	},
	devtool: 'source-map',
	devServer: {
		contentBase: './public'
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
			]
		}]
	}
};

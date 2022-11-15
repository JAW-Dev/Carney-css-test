/* global __basedir */

// Require Modules.
const path = require('path');

const settings = {
	entry: {},
	process: {
		js: false,
		css: true,
		images: false,
		fonts: false,
		typescript: false,
		tailwind: false
	},
	plugins: {
		CleanWebpackPlugin: true,
		MiniCssExtractPlugin: true,
		RemoveEmptyScriptsPlugin: true,
		ImageminPlugin: false,
		BundleAnalyzerPlugin: false
	}
};

if (settings.process.css === true) {
	settings.entry['css/index'] = [path.resolve(__basedir, 'assets/css/index.scss')];
}

module.exports = settings;

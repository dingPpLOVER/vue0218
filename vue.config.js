const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	// configureWebpack: {
	// 	resolve: {
	// 		extensions: [".ts", ".tsx", ".js", ".json"]//配置扩展
	// 	},
	// 	module: {
	// 		rules: [{
	// 			test: /\.tsx?$/,
	// 			loader: 'ts-loader',
	// 			exclude: /node_modules/,
	// 			options: {
	// 				appendTsSuffixTo: [/\.vue$/],
	// 			}
	// 		}]
	// 	}
	// }
});
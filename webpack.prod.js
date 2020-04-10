const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
    }),
    new WorkboxPlugin.GenerateSW(),
  ]
});

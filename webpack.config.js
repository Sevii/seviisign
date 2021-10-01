const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    experiments: {
        topLevelAwait: true
      },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    // Other rules...
    plugins: [
        new NodePolyfillPlugin()
    ]
}
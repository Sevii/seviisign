const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
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
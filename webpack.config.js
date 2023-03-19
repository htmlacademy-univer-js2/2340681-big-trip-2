const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin({
          patterns: [
            { from: "public", to: "build" },
          ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}
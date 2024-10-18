const mode = process.env.NODE_ENV !== 'production';
const terserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: mode ? 'development':'production',
    entry: './src/plugins/entry.js', //Module to start the dependencies list
    output: {
        path: __dirname + '/dist', //Generated files path
        filename: 'pluginLib.js' //.js generated file name
    },
    optimization: {
        minimizer: [
            new terserPlugin(), //.js uglifier(minimizer)
        ]
    },
    devServer: {
        static: './src', //Dir to provide
        port: 8080, //Server port
    }
}
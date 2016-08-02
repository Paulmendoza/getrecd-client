module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['babel-preset-react', 'babel-preset-es2015']
                }
            }
        ]
    }
}
module.exports ={
    entry: './src/app/index.jsx',
    output: {
        path: __dirname + "/src/public",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use:'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }
        ]
    }
}
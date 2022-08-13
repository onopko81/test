const path = require('path');
//const IS_DEVELOPMENT =   (process.env.WEBPACK_SERVE) ? true : false



const udm = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output:  {
        path: path.resolve(__dirname, 'dist/umd'),
        filename: 'test.js',
        library: {
            type: 'umd',
        },
    }
}

const esm = {
    entry: './src/index.ts',
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/esm'),
        filename: 'test.js',
        library: {
            type: 'module',
        },
    },
}

const dev = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        devMiddleware: {
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js',
    },
}

//module.exports = (IS_DEVELOPMENT) ? [udm, esm] : dev

module.exports = (env) => {
    console.log(env)
    return (env.production) ? [udm, esm] : dev

}
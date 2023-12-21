const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, "../js/index.jsx")
        ],
    },
    mode: "development",
    output: {
        filename: "../build/[name].js",
        path: path.resolve(__dirname, "../build")
    },
    plugins: [new CompressionPlugin()], //, new BundleAnalyzerPlugin()],
    module: {
        rules: [
            {
                test: /\.js(x*)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false,
                            importLoaders: 1,
                            modules: false
                        }
                    },
                    "postcss-loader",
                    "group-css-media-queries-loader",
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "../js")
        }
    }
};

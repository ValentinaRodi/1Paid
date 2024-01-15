const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, "../app/react/index.jsx")
        ],
        landing: [
            path.resolve(__dirname, "../app/react/landing.jsx")
        ]
    },
    mode: "production",
    output: {
        filename: "[name].min.js",//../web/js/
        path: path.resolve(__dirname, "../web/js"),
        clean: true
    },
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
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
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
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i
            }),
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].min.css",
            path: path.resolve(__dirname, "../web/css")
        }),
        new CompressionPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};

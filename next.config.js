
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "scss")],
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(c|sa|sc)ss$/i,
    //             use: [
    //                 devMode ? "style-loader" : MiniCssExtractPlugin.loader,
    //                 "css-loader",
    //                 {
    //                     loader: "postcss-loader",
    //                     options: {
    //                         postcssOptions: {
    //                             plugins: [require("postcss-preset-env")],
    //                         },
    //                     },
    //                 },
    //                 "group-css-media-queries-loader",
    //                 "sass-loader",
    //             ],
    //         },
    //     ],
    //     plugins: [
    //         new MiniCssExtractPlugin({
    //             filename: "css/[name]-[contenthash].css",
    //         }),
    //     ],
    // },
};

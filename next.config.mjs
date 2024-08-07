
/** @type {import('next').NextConfig} */
// const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const allMedia = require("postcss-combine-media-query");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

// module.exports = {
//     sassOptions: {
//         includePaths: [path.join(__dirname, "scss")],
//     },
// };
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        
        config.module.rules.push(
            {
                test: /\.(?:js|mjs|cjs)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                        ],
                    },
                },
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                postCssPlugins: [
                                    require("postcss-preset-env"),
                                    require("postcss-logical"),
                                ],
                            },
                        },
                    },
                    "group-css-media-queries-loader",
                    "sass-loader",
                ],
            }
        );
        config = {
            sassOptions: {
                includePaths: [path.join(__dirname, "scss")],
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: ".next/static/css/style.css",
                }),
            ],
        };
        return config;
    },
};

export default nextConfig;

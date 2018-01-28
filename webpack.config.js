const webpack = require("webpack");
const path = require("path");

const babel_config = require(path.join(__dirname, "/configs/babel_config.js"));
const style_config = require(path.join(__dirname, "/configs/style_config.js"));

const sourcehPath = "/src";
const distributePath = "/dist";

const webpack_config = {
    "devServer": {
        "contentBase": path.join(__dirname, distributePath),
        "compress": true,
        "port": 9000,
        "inline": true
    },
    "entry": {
        "index": path.join(__dirname, sourcehPath+"/index.js"),
        "vendors": ["react", "react-dom", "react-router-dom", "react-fontawesome"]
    },
    "output": {
        "path": path.join(__dirname, distributePath),
        "filename": "[name].js"
    },
    "module": {
        "loaders": [
            {...babel_config},
            {...style_config}
        ]
    },
    "plugins": [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["index","vendors"]
        })
    ]
};

module.exports = webpack_config;

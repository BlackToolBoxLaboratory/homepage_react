const webpack = require("webpack");
const path = require("path");

const eslint_config = require(path.join(__dirname, "/configs/eslint.config.js"));
const babel_config = require(path.join(__dirname, "/configs/babel.config.js"));
const style_config = require(path.join(__dirname, "/configs/style.config.js"));
const file_config = require(path.join(__dirname, "/configs/file.config.js"));

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
        "vendors": ["react", "react-dom", "react-router-dom", "@fortawesome/react-fontawesome"]
    },
    "output": {
        "path": path.join(__dirname, distributePath),
        "filename": "[name].js"
    },
    "module": {
        "loaders": [
            {...eslint_config},
            {...babel_config},
            {...style_config},
            {...file_config}
        ]
    },
    "resolve": {
      "modules": [
        path.resolve('./node_modules'),
        path.resolve('./src')
      ]
    },
    "plugins": [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["index","vendors"]
        })
    ]
};

module.exports = webpack_config;

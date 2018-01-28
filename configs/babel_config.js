const webpack = require("webpack");

const babel_config = {
  "test": /\.js$/,
  "exclude": /node_modules/,
  "use": 
  {
    "loader": "babel-loader",
    "options": {
      "presets": [
        "env",
        "react"
      ],
      "plugins": [
        "transform-object-rest-spread",
        "transform-react-remove-prop-types"  
      ]
    }
  }
}

module.exports = babel_config;
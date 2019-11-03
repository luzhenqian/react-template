var baseConfig = require("./webpack.base.config");
var devConfig = require("./webpack.dev.config");
var prodConfig = require("./webpack.prod.config");
var merge = require("webpack-merge");

module.exports = (env, argv) => {
  var envConfig = argv.mode === "development" ? devConfig : prodConfig;
  var config = merge(baseConfig, envConfig);
  return config;
};

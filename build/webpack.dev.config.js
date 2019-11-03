var path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    host: "127.0.0.1",
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: {
      index: "/index.html"
    }
  }
};

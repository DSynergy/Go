module.exports = {
  entry: {
    index: "./index.js",
    test: "mocha!./test.js"
  }
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(handlebars|hbs)$/, loader: "handlebars-loader" }
    ]
  }
};

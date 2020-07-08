const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8083/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8083,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "button",
      library: { type: "var", name: "button" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Button": "./src/Button",
      },
      shared: require("./package.json").dependencies,
    }),
  ],
};

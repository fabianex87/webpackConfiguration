const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin()],
  },
  module: {
    rules: [
      {
        /* test: /\.css$/i,
        use: ['style-loader', 'css-loader'],// ma questo è vecchio, bisogna fare con options
      */
        // css
        test: /\.css$/i,
        exclude: /styles\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "styleTag",
            },
          },
          "css-loader",
        ],
      },
      // css globale
      {
        test: /styles\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // html
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: false,
          minimize: false, // html min
        },
      },

      {
        test: /\.(png | svg |jpg | gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      // production
      // filename: "[name].[contentHash].css", // contenHash, per avere un hash, cosi ce ne accorgiamo delle modifiche
      // development
      filename: "[name].css",
      ignoreOrder: false,
    }),
    new CopyPlugin([{ from: "src/assets", to: "assets/" }]),
  ],
};

const path = require("path");
/* thêm html-webpack-plugin vào file cấu hình */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /* đây là file đầu tiên mà webpack sẽ đọc ở đây mình để index.js */
  entry: path.resolve(__dirname, "./src/index.js"),
  /* cấu hình thư mục đầu ra là dist và tên file là index.bundle.js,
  clean dùng để reset thư mục dist khi build */
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  /* đoạn code sau sẽ load các gói babel vào webpack */
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  /* cấu hình file index.html từ folder public */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  /* tự mở tab trình duyệt mới */
  devServer: {
    open: true,
  },
  mode: "development",
};

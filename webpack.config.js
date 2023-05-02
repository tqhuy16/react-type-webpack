const path = require("path");
/* thêm html-webpack-plugin vào file cấu hình */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const IS_DEV = true;

  return {
    /* đây là file đầu tiên mà webpack sẽ đọc ở đây mình để index.js */

    mode: IS_DEV ? "development" : "production",
    /* cho biết vị trí chính xác của lỗi */
    watch: true,
    /* cho biết vị trí chính xác của lỗi */
    devtool: IS_DEV ? "eval-source-map" : "source-map",
    entry: path.resolve(__dirname, "./src/index.js"),
    /* cấu hình thư mục đầu ra là build và tên file là random,
    clean dùng để reset thư mục dist khi build */
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
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
          test: /\.tsx?$/, // Sẽ sử dụng babel-loader cho những file .ts || .tsx
          exclude: /node_modules/,
          use: ["babel-loader"], // Giúp dịch code TS, React sang JS,
        },
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
        {
          test: /\.(jpg|jpeg|png|svg|woff|eot|ttf|otf|pdf|gif)$/,
          use: ["file-loader"],
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

    //tắt gợi ý performance, cần nghiên cứu thêm cái qq này
    performance: {
      hints: false,
    },
  };
};

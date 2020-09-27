/*
 * @Author: jiazhiteng
 * @Date: 2020-09-23 20:54:12
 * @LastEditTime: 2020-09-27 22:54:50
 * @LastEditors: JiaZhiteng
 * @Description: webpack入口文件
 * @FilePath: /toy-react/webpack.config.js
 */

module.exports = {
  entry: {
    main: './main.js'
  },
  module: {
    rules: [
      {
        test: /.\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', {praagma: 'createElement'}]]
          }
        }
      }
    ]
  },
  mode: "development", // 使人类易读懂的打包后代码
  optimization: {
    minimize: false
  }
}
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.js",
  performance: { hints: false },
  devServer: {
    port: 4203,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    proxy: {
      '/api': { target: 'http://localhost:5000', changeOrigin: true },
      '/uploads': { target: 'http://localhost:5000', changeOrigin: true },
    },
  },
  output: { 
    publicPath: "http://localhost:4203/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfeCatalog",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeScreen": "./src/HomeCatalogApp.js",
      },
      remotes: {
        mfeWishlist: "mfeWishlist@http://localhost:4206/remoteEntry.js",
        mfeOrders: "mfeOrders@http://localhost:4205/remoteEntry.js",
        mfeAuth: `promise new Promise((resolve) => {
          if (window.location.port === '4203') {
            const mock = {
              isAuthenticated: () => !!localStorage.getItem('userInfo'),
              getUser:   () => { try { return JSON.parse(localStorage.getItem('userInfo')); } catch(e) { return null; } },
              isAdmin:   () => { try { return JSON.parse(localStorage.getItem('userInfo'))?.isAdmin === true; } catch(e) { return false; } },
              setUser:   (data) => { localStorage.setItem('userInfo', JSON.stringify(data)); },
              logout:    () => { localStorage.removeItem('userInfo'); localStorage.removeItem('cart'); },
              subscribe: () => () => {},
            };
            resolve({ get: () => Promise.resolve(() => ({ __esModule: true, default: mock })), init: () => {} });
            return;
          }
          const script = document.createElement('script');
          script.src = 'http://localhost:4201/remoteEntry.js';
          script.onload = () => resolve({ get: (req) => window.mfeAuth.get(req), init: (arg) => { try { window.mfeAuth.init(arg); } catch(e) {} } });
          script.onerror = () => resolve({ get: () => Promise.resolve(() => ({ __esModule: true, default: null })), init: () => {} });
          document.head.appendChild(script);
        })`,
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: false },
        "react-redux": { singleton: true, requiredVersion: false },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: false },
        "react-helmet-async": { singleton: true, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const env = require('dotenv').config({ path: path.resolve(__dirname, './../.env') }).parsed;
const ESLintPlugin = require('eslint-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { SourceMapDevToolPlugin } = require('webpack');
/* eslint-enable */

/********************************************************************************************************************
 * Variables
 * ******************************************************************************************************************/

const isProduction = process.env.NODE_ENV === 'production';
const outputPath = path.resolve(__dirname, 'dist');
const devtool = isProduction ? false : 'eval';
const mode = isProduction ? 'production' : 'development';

/********************************************************************************************************************
 * MyHtmlPlugin
 * ******************************************************************************************************************/

class MyHtmlPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('MyHtmlPlugin', (data, cb) => {
        const splitText = '</head>';
        const htmls = data.html.split(splitText);
        const inject = `
          <title>${isProduction ? '<%= title %>' : env.APP_NAME}</title>
          <script>window.$$AppConfig = {version: '${new Date().getTime()}'}</script>
          <script>
            window.$$AppConfig = {
              version: window.$$AppConfig.version,
              env: '${isProduction ? '<%= appEnv %>' : env.APP_ENV}',
              title: '${isProduction ? '<%= title %>' : env.APP_NAME}',
            };
          </script>
        `;

        data.html = `${htmls[0]}${inject}${splitText}${htmls[1]}`;

        cb(null, data);
      });
    });
  }
}

/********************************************************************************************************************
 * Alias
 * ******************************************************************************************************************/

const alias = {
  '@sass': path.resolve(__dirname, 'src/sass'),
  '@types': path.resolve(__dirname, 'src/@types'),
  '@styles': path.resolve(__dirname, 'src/@styles'),
  '@common': path.resolve(__dirname, 'src/common'),
  '@comp': path.resolve(__dirname, 'src/component'),
  '@ccomp': path.resolve(__dirname, 'src/component/Common'),
  '@const': path.resolve(__dirname, 'src/constant'),
  '@context': path.resolve(__dirname, 'src/context'),
  '@app': path.resolve(__dirname, 'src/common/app'),
  '@api': path.resolve(__dirname, 'src/common/api'),
  '@util': path.resolve(__dirname, 'src/common/util'),
  '@dialog': path.resolve(__dirname, 'src/dialog'),
};

/********************************************************************************************************************
 * Options
 * ******************************************************************************************************************/

const options = {
  mode,
  devtool,
  target: 'web',
  entry: './src',
  stats: isProduction,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias,
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunks/[name].[chunkhash].js',
  },
  devServer: {
    host: env.APP_HOST,
    port: env.APP_PORT,
    historyApiFallback: true,
    client: {
      overlay: { errors: false, runtimeErrors: false, warnings: false },
      progress: false,
    },
    proxy: [
      {
        context: ['/api'],
        target: env.API_URL,
        changeOrigin: true,
        pathRewrite: { '^/api': '/' },
      },
    ],
  },
  performance: {
    hints: isProduction ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: isProduction,
    runtimeChunk: true,
    removeAvailableModules: isProduction,
    removeEmptyChunks: isProduction,
    splitChunks: isProduction
      ? {
          chunks: 'all',
          cacheGroups: {
            common: {
              test: /[\\/]node_modules[\\/](react|react-dom|react-router|history|stylis)[\\/]/,
              chunks: 'all',
              name(module) {
                if (module.context.includes('/node_modules/')) {
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                  return `vendors/_common_${packageName.replace('@', '')}`;
                }
              },
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name(module) {
                if (module.context.includes('/node_modules/')) {
                  const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                  if (packageName === '@pdg') {
                    return `vendors/_pdg_${module.context.match(/[\\/]node_modules\/@pdg[\\/](.*?)([\\/]|$)/)[1]}`;
                  } else if (packageName === '@mui') {
                    const subPackageName = module.context.match(/[\\/]node_modules\/@mui[\\/](.*?)([\\/]|$)/)[1];
                    if (subPackageName === 'material') {
                      const subSubPackageName = module.context.match(
                        /[\\/]node_modules\/@mui\/material[\\/](.*?)([\\/]|$)/
                      )[1];
                      return `vendors/_mui_material_${subSubPackageName.replace('@', '')}`;
                    } else if (subPackageName === 'x-date-pickers') {
                      const subSubPackageName = module.context.match(
                        /[\\/]node_modules\/@mui\/x-date-pickers[\\/](.*?)([\\/]|$)/
                      )[1];
                      return `vendors/_mui_x-date-pickers_${subSubPackageName.replace('@', '')}`;
                    }
                    return `vendors/_mui_${subPackageName.replace('@', '')}`;
                  }
                  return `vendors/${packageName.replace('@', '')}`;
                }
              },
            },
          },
        }
      : {},
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'dist'),
        path.resolve(__dirname, 'public'),
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './public/robots.txt', to: outputPath }],
    }),
    new MyHtmlPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    ...(isProduction
      ? [
          new CleanWebpackPlugin.CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['*'],
          }),
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: '../build/report.html',
          }),
        ]
      : [
          new SourceMapDevToolPlugin({
            filename: '[file].map',
          }),
          new FriendlyErrorsWebpackPlugin({
            clearConsole: true,
          }),
          new webpack.HotModuleReplacementPlugin(),
          new ReactRefreshWebpackPlugin({ overlay: false }),
        ]),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        enforce: 'pre',
        resolve: {
          fullySpecified: false,
        },
        use: ['source-map-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sa|sc)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line @typescript-eslint/no-require-imports
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: 'url-loader?limit=100000&name=[name].[ext]',
      },
    ],
  },
};

module.exports = options;

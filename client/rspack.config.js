const path = require('node:path');
const fs = require('node:fs');
const rspack = require('@rspack/core');
const { ReactRefreshRspackPlugin } = require('@rspack/plugin-react-refresh');
const env = {
  ...require('dotenv').config({ path: path.resolve(__dirname, '../.env'), quiet: true }).parsed,
  ...process.env,
};
const MyProvidePlugin = require('./rspack/ProvidePlugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const splitChunks = require('./rspack/splitChunks');

const isProduction = process.env.NODE_ENV === 'production';
const appConfig = isProduction
  ? "{version: '<%= version %>', env: '<%= appEnv %>', title: '<%= title %>'}"
  : JSON.stringify({ version: String(Date.now()), env: env.APP_ENV, title: env.APP_NAME });

class AppHtmlPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('AppHtmlPlugin', (compilation) => {
      rspack.HtmlRspackPlugin.getCompilationHooks(compilation).beforeEmit.tap('AppHtmlPlugin', (data) => {
        const version = String(Date.now());
        const config = appConfig.replace('<%= version %>', version).replace(/<\/script/gi, '<\\/script');
        const title = isProduction
          ? '<%= title %>'
          : String(env.APP_NAME || '').replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
        // Inject after HTML serialization so Express receives literal EJS placeholders.
        data.html = data.html.replace(
          '</head>',
          () => `<title>${title}</title><script>window.$$MyAppConfig = ${config}</script></head>`
        );
        return data;
      });
    });
  }
}

class BuildStatsPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('BuildStatsPlugin', (stats) => {
      if (stats.hasErrors()) return;
      const reportPath = path.resolve(__dirname, 'build');
      fs.mkdirSync(reportPath, { recursive: true });
      fs.writeFileSync(
        path.join(reportPath, 'stats.json'),
        JSON.stringify(stats.toJson({ all: false, assets: true, chunks: true, modules: true }))
      );
    });
  }
}

module.exports = {
  context: __dirname,
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? false : 'source-map',
  target: 'browserslist',
  entry: './src',
  stats: 'errors-warnings',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    tsConfig: path.resolve(__dirname, 'tsconfig.json'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
    filename: '[name].[contenthash].js',
    chunkFilename: 'chunks/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
  },
  devServer: {
    host: env.APP_HOST,
    port: Number(env.APP_PORT),
    hot: true,
    historyApiFallback: true,
    client: { overlay: { errors: false, warnings: false, runtimeErrors: false }, progress: false },
    proxy: env.API_URL
      ? [
          {
            context: ['/api'],
            target: env.API_URL,
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
            logger: { info: () => {}, warn: console.warn, error: console.error },
          },
        ]
      : [],
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
    splitChunks: isProduction ? splitChunks : {},
  },
  plugins: [
    new MyProvidePlugin(),
    new rspack.CssExtractRspackPlugin({ filename: 'css/[name].[contenthash].css' }),
    new rspack.HtmlRspackPlugin({ template: './public/index.html' }),
    new AppHtmlPlugin(),
    new rspack.CopyRspackPlugin({ patterns: [{ from: './public/robots.txt' }] }),
    new rspack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
    ...(isProduction
      ? [
          new rspack.CircularCheckRspackPlugin({ exclude: /a\.js|node_modules/, failOnError: true }),
          new BuildStatsPlugin(),
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: '../build/report.html',
          }),
        ]
      : [new ReactRefreshRspackPlugin({ overlay: false })]),
  ],
  module: {
    rules: [
      { test: /\.m?js$/, resolve: { fullySpecified: false }, extractSourceMap: true },
      { test: /\.html$/i, loader: 'html-loader', options: { minimize: true } },
      {
        test: /\.[jt]sx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: { syntax: 'typescript', tsx: true },
            transform: {
              react: { runtime: 'automatic', development: !isProduction, refresh: !isProduction },
              reactCompiler: { target: '19', panicThreshold: 'all_errors' },
            },
          },
          env: { mode: 'usage', coreJs: require('core-js/package.json').version, proposals: true },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        type: 'javascript/auto',
        use: [
          { loader: rspack.CssExtractRspackPlugin.loader, options: { publicPath: '../' } },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 100 * 1024 } },
      },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/,
            type: 'javascript/auto',
            use: [
              {
                loader: 'builtin:swc-loader',
                options: {
                  jsc: {
                    parser: { syntax: 'ecmascript', jsx: true },
                    transform: { react: { runtime: 'automatic' } },
                  },
                },
              },
              { loader: '@svgr/webpack', options: { babel: false } },
              { loader: 'url-loader', options: { limit: 100000, name: '[name].[ext]' } },
            ],
          },
          { type: 'asset', parser: { dataUrlCondition: { maxSize: 100000 } } },
        ],
      },
      { test: /\.(woff2?|eot|ttf|otf)$/i, type: 'asset/resource' },
      { test: /\.(txt|md)$/i, type: 'asset/source' },
    ],
  },
};

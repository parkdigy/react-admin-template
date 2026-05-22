const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const options = {
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  entry: {
    main: './src/app.ts',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  stats: isProduction,
  output: {
    path: path.join(__dirname, isProduction ? 'dist' : '@dev'),
    filename: 'app.js',
  },
  externals: {
    express: 'commonjs express',
    // redis 에서 참조하는 모듈로 빌드 시 warning 발생하여 externals 처리
    '@opentelemetry/api': 'commonjs @opentelemetry/api',
    // redis 에서 참조하는 모듈로 빌드 시 warning 발생하여 externals 처리
    '@node-rs/xxhash': 'commonjs @node-rs/xxhash',
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
              allowTsInNodeModules: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = options;

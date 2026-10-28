const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const options = {
  context: __dirname,
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  entry: {
    main: './src/app.ts',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  stats: 'errors-warnings',
  node: { __dirname: false, __filename: false },
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
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: { parser: { syntax: 'typescript' }, target: 'es2022' },
        },
      },
    ],
  },
};

module.exports = options;

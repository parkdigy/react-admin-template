const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['babel-plugin-react-compiler', { panicThreshold: 'all_errors' }],
    !isProduction && require.resolve('react-refresh/babel'),
  ].filter(Boolean),
};

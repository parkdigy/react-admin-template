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
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [!isProduction && require.resolve('react-refresh/babel')].filter(Boolean),
};

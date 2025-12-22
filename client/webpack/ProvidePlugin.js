/* eslint-disable */
const webpack = require('webpack');
const app = require('./ProvidePlugin.app');
const react = require('./ProvidePlugin.react');
const reactHooks = require('./ProvidePlugin.react-hooks');
const pdg = require('./ProvidePlugin.pdg');
const thirdParty = require('./ProvidePlugin.third-party');
const reactComponents = require('./ProvidePlugin.common-component');
/* eslint-enable */

class MyProvidePlugin {
  apply(compiler) {
    new webpack.ProvidePlugin({
      ...app,
      ...react,
      ...reactHooks,
      ...pdg,
      ...thirdParty,
      ...reactComponents,
    }).apply(compiler);
  }
}

module.exports = MyProvidePlugin;

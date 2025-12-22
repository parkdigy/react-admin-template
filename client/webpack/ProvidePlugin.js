/* eslint-disable */
const webpack = require('webpack');
const app = require('./ProvidePlugin.app');
const react = require('./ProvidePlugin.react');
const reactHooks = require('./ProvidePlugin.react-hooks');
const pdg = require('./ProvidePlugin.pdg');
const pdgReactComponent = require('./ProvidePlugin.pdg-react-component');
const pdgReactForm = require('./ProvidePlugin.pdg-react-form');
const pdgReactDialog = require('./ProvidePlugin.pdg-react-dialog');
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
      ...pdgReactComponent,
      ...pdgReactForm,
      ...pdgReactDialog,
      ...thirdParty,
      ...reactComponents,
    }).apply(compiler);
  }
}

module.exports = MyProvidePlugin;

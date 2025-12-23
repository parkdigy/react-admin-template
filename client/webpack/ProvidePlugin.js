/* eslint-disable */
const webpack = require('webpack');
const app = require('./ProvidePlugin.app');
const react = require('./ProvidePlugin.react');
const reactHooks = require('./ProvidePlugin.react-hooks');
const pdg = require('./ProvidePlugin.pdg');
const pdgReactComponent = require('./ProvidePlugin.pdg-react-component');
const pdgReactDialog = require('./ProvidePlugin.pdg-react-dialog');
const pdgReactForm = require('./ProvidePlugin.pdg-react-form');
const pdgReactTable = require('./ProvidePlugin.pdg-react-table');
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
      ...pdgReactDialog,
      ...pdgReactForm,
      ...pdgReactTable,
      ...thirdParty,
      ...reactComponents,
    }).apply(compiler);
  }
}

module.exports = MyProvidePlugin;

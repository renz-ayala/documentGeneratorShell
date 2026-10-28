const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const webpackConfig = withModuleFederationPlugin({
  name: 'mfeShell',
  remotes: {
    'ui-upload': 'http://localhost:12101/remoteEntry.js',
    'ui-download': 'http://localhost:12102/remoteEntry.js',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

webpackConfig.watchOptions = {
  ignored: /node_modules|\.angular|dist/,
};

module.exports = webpackConfig;
